import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Healthy from "./views/Healthy";
import Register from "./views/Register";

export default function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Healthy />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
