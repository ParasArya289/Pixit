import { Navbar } from "../../components/ui/Navbar/Navbar";
import Search from "../../components/ui/Search/Search";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <img
        className="bg"
        src="https://images.pexels.com/photos/19542085/pexels-photo-19542085/free-photo-of-snowcapped-mountains-under-a-dramatic-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="bg"
      />
      <div className="home__childrens">
        <Navbar />
        <p className="home__hero">
          Discover Over 2,000,000
          <br />
          free Stock Images
        </p>
        <Search />
      </div>
    </div>
  );
};
