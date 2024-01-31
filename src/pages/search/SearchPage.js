import React from "react";
import { Navbar } from "../../components/ui/Navbar/Navbar";
import Search from "../../components/ui/Search/Search";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import "./SearchPage.css";

const SearchPage = () => {
  const { background } = useSelector((state) => state.background);
  return (
    <div
      style={{
        backgroundImage: `url(${background.largeImageURL})`,
      }}
      className="searchPage"
    >
      {/* <img
        className="bg"
        src="https://images.pexels.com/photos/19542085/pexels-photo-19542085/free-photo-of-snowcapped-mountains-under-a-dramatic-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="bg"
      /> */}
      <div className="searchPage__childrens">
        <Navbar />
        <Search />
        <motion.div
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
          }}
          className="searchResults"
        >
          {[...Array(10).fill(0)].map((el) => (
            <div
              style={{
                width: "300px",
                height: "400px",
                backgroundColor: "grey",
              }}
            >
              Content
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SearchPage;
