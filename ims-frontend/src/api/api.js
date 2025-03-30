import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Documents from "./pages/Documents";
import Approval from "./pages/Approval";
import React from 'react';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/approval" element={<Approval />} />
      </Routes>
    </Router>
  );
}

export default App;
