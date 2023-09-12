import React from "react";
import { NavLink } from "react-router-dom";
import "./nav_bar.css";

export default function NavBar() {
  return (
    <nav className="mainNav">
      <div>
        <NavLink to="/">Accueil</NavLink>
      </div>
      <div>
        <NavLink to="/random">Random Beer</NavLink>
      </div>
      <div>
        <NavLink to="/research">Research</NavLink>
      </div>
      <div>
        <NavLink to="/beerpage">About</NavLink>
      </div>
    </nav>
  );
}
