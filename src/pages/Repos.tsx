import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/Repos/Card";
import ReposService from "../services/Repos.service";
import CardModal from "../components/Repos/CardModal";
const Repos = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const [repos, setRepos] = useState([]);
  const handleSearch = async () => {
    if (username) {
      const result = await ReposService.getReposByUser(username);
      if (result) {
        setRepos(result);
        console.log(result);
      } else {
        navigate("/user");
      }
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="row flex-center g-30">
      {repos.map((repo, index) => {
        return <Card repo={repo} key={index} />;
      })}
    </div>
  );
};

export default Repos;
