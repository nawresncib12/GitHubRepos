import classes from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import RepoModel from "../../models/RepoModel";
import CardModal from "./CardModal";
import { useState } from "react";
interface CardProps {
  repo: RepoModel;
}
const Card = ({ repo }: CardProps) => {
  const [modal, setModal] = useState(false);
  const close = () => {
    setModal(false);
  };
  const open = () => {
    setModal(true);
  };
  return (
    <>
      {modal && <CardModal close={close} repo={repo}></CardModal>}
      <div data-testid="card" className={classes.card} onClick={open}>
        <div>
          <div className={classes.cardTitle}>
            <FontAwesomeIcon className={classes.icon} icon={faBookmark} />
            <div>
              <h2 className="heading-2">{repo.name}</h2>
              <h2>{repo.owner.login}</h2>
            </div>
          </div>
        </div>
        <p className={classes.description}>
          {repo.description || "No description provided"}
        </p>
        <p>{repo.language}</p>
      </div>
    </>
  );
};

export default Card;
