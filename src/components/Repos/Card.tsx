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
  var r: any = document.querySelector(":root");
  r.style.setProperty("--deg", Math.floor(Math.random() * 10) + "deg");
  const [modal, setModal] = useState(false);
  const close = () => {
    setModal(false);
  };
  return (
    <>
      {modal && <CardModal close={close} repo={repo}></CardModal>}

      <div
        data-testid="card"
        className={classes.card}
        onClick={() => {
          setModal(true);
        }}
      >
        <div>
          <div className={classes.cardTitle}>
            <FontAwesomeIcon className={classes.icon} icon={faBookmark} />
            <div>
              <a href={repo.html_url}>
                <h2 className="heading-2 underline">{repo.name}</h2>
              </a>
              <a href={repo.owner.html_url}>
                <h2 className="underline">{repo.owner.login}</h2>
              </a>
            </div>
          </div>
        </div>
        <p className={classes.description}>{repo.description}</p>
        <p>{repo.language}</p>
      </div>
    </>
  );
};

export default Card;
