import React from "react";
import "../index.css";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import photo from "../Asserts/Phonewall.jpg";

function Home() {
  return (
    <div className="container" style={{ backgroundImage: `url(${photo})` }}>
      <Logo />
      <div className="main_contain">
        <NavLink to="/quizapp">
          <button style={{ color: "black" }}>EXPLORE.a</button>
        </NavLink>
        <h1 style={{ color: "white" }}>MILKYWAY</h1>
      </div>
    </div>
  );
}

export default Home;
