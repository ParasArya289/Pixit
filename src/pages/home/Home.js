import { Navbar } from "../../components/ui/Navbar/Navbar";
import Search from "../../components/ui/Search/Search";
import { motion } from "framer-motion";
import "./Home.css";
import { useSelector } from "react-redux";

export const Home = () => {
  const { background } = useSelector((state) => state.background);
  console.log(background.largeImageURL);
  return (
    <div
      style={{
        backgroundImage: `url(${background.largeImageURL})`,
      }}
      className="home"
    >
      {/* <img
        className="bg"
        src="https://images.pexels.com/photos/19542085/pexels-photo-19542085/free-photo-of-snowcapped-mountains-under-a-dramatic-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="bg"
      /> */}
      <div className="home__childrens">
        <Navbar />
        <motion.p
          exit={{
            y: "-5vh",
            scale: 0.5,
            opacity: 0,
            height: 0,
            marginBottom: 0,
            transition: { duration: 0.5 },
          }}
          className="home__hero"
        >
          Discover Over 2,000,000
          <br />
          free Stock Images
        </motion.p>
        <Search />
      </div>
    </div>
  );
};
