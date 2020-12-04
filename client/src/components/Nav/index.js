import React, {useState} from "react"
import "./style.css"
import { Link } from "react-router-dom";




const Nav = ({setSearched}) => {

const [searchValue, setSearchValue] = useState ("")

function handleInputChange (e) {
  e.preventDefault()
  setSearchValue(e.target.value)
  
}
console.log(searchValue)

return (
  <>
<nav className="navbar navbar-light">
  <a className="navbar-brand" href="/" >GIFTR</a>
  <form className="form-inline">
    <input onChange={handleInputChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    <button onClick={(e)=> {e.preventDefault(); setSearched(searchValue)}}  className="btn btn-outline-secondary my-2 my-sm-0" type="submit"><Link to ={ "/showall/name/" + searchValue}> Search</Link></button>
    <button className="btn btn-outline-secondary my-2 my-sm-0"><Link to ={ "/showall"}>Show all</Link></button>
  </form>
</nav>
</>
)
}

export default Nav;