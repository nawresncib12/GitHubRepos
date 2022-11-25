import HeroDescription from "../components/Home/HeroDescription";
import HeroImage from "../components/Home/HeroImage";
import classes from "./Home.module.css"
const Home = () => {
  return (
    <div className="grid-2">
      <HeroDescription></HeroDescription>
      <HeroImage></HeroImage>
    </div>
  );
};

export default Home;
