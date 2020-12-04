import axios from "axios";

export default {
  // Gets all books
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
  
  getUserByName: function(name) {
    return axios.get("/api/users/name/" + name)
  },

  saveReviews: function (reviewData) {
    return axios.post("/api/reviews", reviewData);
  },
  
  getReviews: function () {
    return axios.get("/api/reviews");
  }
}

