import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Play from "./components/play";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="play" element={<Play />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
