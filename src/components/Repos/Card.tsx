import classes from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import RepoModel from "../../models/RepoModel";
import CardModal from "./CardModal";
interface CardProps {
  repo: RepoModel;
}
const Card = ({ repo }: CardProps) => {
  var r: any = document.querySelector(":root");
  r.style.setProperty("--deg", Math.floor(Math.random() * 10) + "deg");
  return (
    <>
      <CardModal></CardModal>
      <div className={classes.card}>
        <div className={classes.cardTitle}>
          <FontAwesomeIcon className={classes.icon} icon={faBookmark} />
          <h2 className="heading-2">{repo.name}</h2>
        </div>

        <p className={classes.description}>{repo.description}</p>
        <div className={classes.tags + " row"}>
          <p>{repo.visibility}</p>
          <p>{repo.language}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
