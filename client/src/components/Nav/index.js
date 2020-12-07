import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

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
          <FavoriteBorderIcon />
        </a>
        
        <div className="format">
          
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
          <button
            onClick={(e) => {
              e.preventDefault();
              setSearched(searchValue);
            }}
            className="btn btn-outline-secondary my-2 my-sm-0"
            type="submit"
          >
            <Link to={"/showall/name/" + searchValue}> Search</Link>
          </button>
          <button className="btn btn-outline-secondary my-2 my-sm-0 ">
            <Link to={"/showall"}>Show all</Link>
          </button>
        

        {/* <Link to="/create">
          <button
            className="btn btn-outline-secondary my-2 my-sm-0 create-button"
            type="submit"
          >
            Create Registry
          </button>
        </Link> */}
        </form>
        </div>
      </nav>
    </>
  );
};

export default Nav;
