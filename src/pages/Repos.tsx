import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Repos/Card";
import ReposService from "../services/Repos.service";
import SearchBar from "../components/shared/SearchBar";
import { toast, ToastContainer } from "react-toastify";
import RepoModel from "../models/RepoModel";
import Loader from "../components/shared/Loader";
const Repos = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const getRepos = async () => {
    if (username) {
      const result = await ReposService.getReposByUser(username);
      if (result) {
        if (result.length) {
          setRepos(result);
        } else {
          toast.info("The user you searched has no public repositories");
          navigate(-1);
        }
      } else {
        toast.info("User not found");
        navigate(-1);
      }
    }
  };
  const handleSearch = async (value: any) => {
    const result = repos.filter((repo: RepoModel) => {
      return repo.name.toLowerCase().includes(value.toLocaleLowerCase());
    });
    if (result.length) {
      setFilteredRepos(result);
    } else {
      toast.info("No repositories found");
    }
  };
  useEffect(() => {
    getRepos();
  }, []);

  return repos.length ? (
    <div>
      <ToastContainer />
      <SearchBar
        style={{ minWidth: "40vw", marginBottom: "50px" }}
        onEnter={(value) => {
          handleSearch(value);
        }}
        placeholder="Repository name.."
      ></SearchBar>
      <div className="row flex-center g-30">
        {filteredRepos.length
          ? filteredRepos.map((repo, index) => {
              return <Card repo={repo} key={index} />;
            })
          : repos.map((repo, index) => {
              return <Card repo={repo} key={index} />;
            })}
      </div>
    </div>
  ) : (
    <Loader></Loader>
  );
};

export default Repos;
