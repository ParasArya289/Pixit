import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/home/Home";
import SearchPage from "./pages/search/SearchPage";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { useEffect } from "react";
import { fetchBackground } from "./services/state/backgroundSlice";

export default function App() {
  const location = useLocation();
  //add framer motion for page transition
  const dispatch = useDispatch();
  const background = useSelector((state) => state.background);
  useEffect(() => {
    if (background.status === "idle") {
    dispatch(fetchBackground());
    }
  }, [background]);
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
