import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import UpBar from "./components/UpBar";
import Healthy from "./views/Healthy/index.jsx";
import Blog from "./views/Blog";
import Join from "./views/Join";
import Register from "./views/Register";

export default function myRoutes() {
  return (
    <Router>
      {/* <UpBar /> */}
      <Routes>
        <Route path="/" element={<Healthy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/join" element={<Join />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
