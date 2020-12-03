import React from "react"
import "./style.css"


const Nav = () => {

return (
  <>
<nav class="navbar navbar-light">
  <a class="navbar-brand">GIFTR</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</>
)
}

export default Nav;