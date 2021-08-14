import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Home />
      </div>
    </Router>
  );
}

export default App;
