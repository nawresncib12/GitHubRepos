import RepoModel from "../../models/RepoModel";
import classes from "./CardModal.module.css";
import { faCodeFork, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import IconTitle from "../shared/IconTitle";
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
          <span onClick={close} className={classes.close}>
            x
          </span>
          <div className={"row align-center"}>
            <div className={classes.avatar}>
              <img src={repo.owner.avatar_url} alt="avatar" />
            </div>
            <div className={classes.titles}>
              <a href={repo.html_url}>
                <h2 className="heading-2 underline">{repo.name}</h2>
              </a>
              <a href={repo.owner.html_url}>
                <h2 className="underline">{repo.owner.login}</h2>
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
            <IconTitle
              color="#4078C0"
              icon={faEye}
              text={`  ${repo.watchers_count} watchers`}
            />
            <IconTitle
              color="#549d62"
              icon={faCodeFork}
              text={`${repo.forks_count} forks`}
            />
            <IconTitle
              icon={faStar}
              color="#D5AB55"
              text={`${repo.stargazers_count} stars`}
            />
          </div>
          <p>{repo.description || "No description provided"}</p>
        </div>
      </div>
    </>
  );
};

export default CardModal;
