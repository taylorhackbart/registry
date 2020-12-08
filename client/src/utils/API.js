import axios from "axios";

export default {
  // Gets all Users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the User with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a User to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  // Updates giftlist of User with given id
  updateUser: function (id,userData) {
    return axios.put("/api/users/" + id,userData)
  },
  // Gets the user with the given name
  getUserByName: function(name) {
    return axios.get("/api/users/name/" + name)
  },
  // Saves a new review
  saveReviews: function (reviewData) {
    return axios.post("/api/reviews", reviewData);
  },
  // Gets all reviews
  getReviews: function () {
    return axios.get("/api/reviews");
  }
}

