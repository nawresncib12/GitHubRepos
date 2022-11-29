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
  /**
   * get user repos
   */
  const getRepos = async () => {
    // exectues only if username provided in params
    if (username) {
      // uses service to fetch repositories by username
      const result = await ReposService.getReposByUser(username);
      if (result) {
        // user found and has repos
        if (result.length) {
          setRepos(result);
        } else {
          // user found and has no repos return to previous page with the information in a toast
          setTimeout(() => {
            toast.info("The user you searched has no public repositories");
          }, 300);
          navigate(-1);
        }
      } else {
        setTimeout(() => {
          // user not found return to previous page with the information in a toast
          toast.info("User not found");
        }, 300);
        navigate(-1);
      }
    }
  };
  /**
   * search user repos by name
   * @param {any} value
   */
  const handleSearch = async (value: any) => {
    // result based on original repos arrays has repos with names icnluding search value
    const result = repos.filter((repo: RepoModel) => {
      return repo.name.toLowerCase().includes(value.toLocaleLowerCase());
    });
    if (result.length) {
      setFilteredRepos(result);
    } else {
      // no match found toast the information
      toast.info("No repositories found");
    }
  };
  useEffect(() => {
    getRepos();
  }, [getRepos]);

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
