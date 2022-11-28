import RepoModel from "../../models/RepoModel";
import classes from "./CardModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
interface CardModalProps {
  repo: RepoModel;
  close: () => void;
}
const CardModal = ({ repo, close }: CardModalProps) => {
  const formatDate = (d: string) => {
    var m = new Date(d);
    var dateString =
      ("0" + m.getUTCDate()).slice(-2) +
      "-" +
      ("0" + (m.getUTCMonth() + 1)).slice(-2) +
      "-" +
      m.getUTCFullYear();
    return dateString;
  };
  return (
    <>
      <div onClick={close} className={classes.backdrop}>
        <div id="modal" className={classes.modal}>
          <span  onClick={close} className={classes.close}>
            x
          </span>
          <div className={"row align-center"}>
            <div className={classes.avatar}>
              <img src={repo.owner.avatar_url} alt="avatar" />
            </div>
            <div className={classes.titles}>
              <a href={repo.html_url}>
                <h2 className="heading-2">{repo.name}</h2>
              </a>
              <a href={repo.owner.html_url}>
                <h2>{repo.owner.login}</h2>
              </a>
            </div>
          </div>
          <div className={classes.tags + " row "}>
            <p>{repo.visibility}</p>
            <p>
              <span className="bold"> {formatDate(repo.created_at)}</span>
            </p>
            <p className="bold">{repo.language || "-"}</p>
          </div>
          <div className={classes.counts}>
            <div>
              <FontAwesomeIcon className={classes.icon} icon={faEye} />
              <span>{repo.watchers_count} watchers</span>
            </div>
            <div>
              <FontAwesomeIcon className={classes.icon} icon={faCodeFork} />
              <span>{repo.forks_count} forks</span>
            </div>
            <div>
              <FontAwesomeIcon className={classes.icon} icon={faStar} />
              <span>{repo.stargazers_count} stars</span>
            </div>
          </div>
          <p>{repo.description || "No description provided"}</p>
        </div>
      </div>
    </>
  );
};

export default CardModal;
