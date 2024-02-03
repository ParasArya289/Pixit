import React from "react";
import { Navbar } from "../../components/ui/Navbar/Navbar";
import Search from "../../components/ui/Search/Search";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import "./SearchPage.css";
import { ImageDrawer } from "../../components/ui/Drawer/ImageDrawer";

const SearchPage = () => {
  const { background } = useSelector((state) => state.background);
  const { searchResult } = useSelector((state) => state.searchResult);
  console.log(searchResult);
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
          <AnimatePresence mode="wait">
            {searchResult?.hits?.map((image, index) => (
              <ImageDrawer>
                <motion.img
                  class="rounded-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.8 },
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: { delay: 0.02 * index },
                  }}
                  transition={{ duration: 1 }}
                  key={image.webformatURL}
                  src={image.webformatURL}
                  alt={image.user}
                />
              </ImageDrawer>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default SearchPage;
