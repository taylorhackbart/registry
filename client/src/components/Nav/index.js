import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import RedeemIcon from "@material-ui/icons/Redeem";

const Nav = ({ setSearched }) => {
  const [searchValue, setSearchValue] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setSearchValue(e.target.value);
  }
  console.log(searchValue);

  return (
    <>
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="/">
          GIFTR
          <RedeemIcon />
        </a>

        <div className="format-nav-bar">
          <form className="form-inline">
            <Link to="/create">
              <button
                className="btn btn-outline-secondary my-2 my-sm-0 create-button"
                type="submit"
              >
                Create Registry
              </button>
            </Link>
            <input
              onChange={handleInputChange}
              className="form-control mr-sm-2 nav-form"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>

            <Link to={"/showall/name/" + searchValue}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSearched(searchValue);
                }}
                className="btn btn-outline-secondary my-2 my-sm-0"
                type="submit"
              >
                <SearchIcon />
              </button>
            </Link>
            <Link to={"/showall"}>
              <button className="btn btn-outline-secondary my-2 my-sm-0 ">
                Show all
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Nav;
