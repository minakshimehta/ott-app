import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navBar">
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand">TV MAZE SHOW</a>
            <form className="d-flex">
              <button className="submitBtn" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
