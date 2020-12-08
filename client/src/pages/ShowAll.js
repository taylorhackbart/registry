import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";



import "./show.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const ShowAll = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    API.getUsers()
      .then((res) => {
        const sortedUser = res.data.sort((a, b) => (a.name > b.name ? 1 : -1));
        setUsers(sortedUser);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="resultsContainer">
      <ul>
        <h3>List of Registries:</h3>
        <h5> Click on a user to see their wishlist</h5>
        <div className="usernameUpper">
          {users.map((user) => (
            <div class="users-all" key={user._id}>
              <Link to={"/showall/" + user._id}>
              <AccountCircleIcon /> <strong>{user.name}</strong>
              </Link>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ShowAll;
