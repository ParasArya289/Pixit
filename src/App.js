import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";

export default function App() {
  //add framer motion for page transition
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
} 
