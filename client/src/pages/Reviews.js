import React, { useState } from "react";
import API from "../utils/API";

function Reviews() {
  // Setting our component's initial state
  const [formObject, setFormObject] = useState({});

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit() {
    API.saveReviews(formObject)
      .then((data) => {
        console.log(data);
        console.log("I hit the route");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <form>
        <div className="form-group">
          <input
            className="form-control"
            onChange={handleInputChange}
            name="name"
            placeholder="name (required)"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            onChange={handleInputChange}
            name="text"
            placeholder="write your review (required)"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            onChange={handleInputChange}
            name="image"
            placeholder="picture url (required)"
          />
        </div>

        <button
          variant="outline-dark"
          disabled={!(formObject.name && formObject.text)}
          onClick={handleFormSubmit}
        >
          {" "}
          Submit
        </button>
      </form>
    </>
  );
}

export default Reviews;
