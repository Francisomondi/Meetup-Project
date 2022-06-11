import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div>React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meet ups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/newmeetup">New Meet ups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
