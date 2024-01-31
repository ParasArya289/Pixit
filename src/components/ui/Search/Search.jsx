import { useLocation, useNavigate } from "react-router-dom";
import { animate, motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchQuery,
  fetchSearchResult,
} from "../../../services/state/SearchResultSlice";
import "./Search.css";
const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.searchResult);
  const navigate = useNavigate();
  const location = useLocation();
  const changeHandler = (e) => {
    dispatch(changeSearchQuery(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname !== "search") {
      navigate("/search");
    }
    dispatch(fetchSearchResult(searchQuery));
  };
  return (
    <motion.div className="search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
      <div className="vr" />
      <form onSubmit={handleSubmit}>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="Search"
          value={searchQuery}
        />
        <button type="submit">GO</button>
      </form>
    </motion.div>
  );
};

export default Search;
