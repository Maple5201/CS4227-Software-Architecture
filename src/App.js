import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Documents from "./pages/Documents";
import Approval from "./pages/Approval";
import Collaboration from "./pages/Collaboration";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/approval" element={<Approval />} />
          <Route path="/collaboration" element={<Collaboration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
