import React, { useState } from "react";
import API from "../utils/API";

function Reviews() {
    // Setting our component's initial state
    const [form, setForm]= useState([])
    const [formObject, setFormObject] = useState({
        name : "",
        text : "",
        image: "",

    })

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        console.log(name, value)
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        // event.preventDefault();
        
        console.log("I hit the route");

            API.saveReviews(formObject)
                .then(data => {
                    console.log(data);
                    const reviewArr = form.slice(0);
                    reviewArr.push(data);
                    setForm(reviewArr);
                    console.log("I hit the route");
                })
            
                .catch(err => console.log(err));
        
    };

    return (
        <>

            <form>
                <div className="form-group">
                    <input className="form-control" onChange={handleInputChange}
                        name="name"
                        placeholder="name (required)" />
                </div>
                <div className="form-group">
                    <input className="form-control" onChange={handleInputChange}
                        name="text"
                        placeholder="write your review (required)" />
                </div>
                <div className="form-group">
                    <input className="form-control" onChange={handleInputChange}
                        name="image"
                        placeholder="picture url (required)" />
                </div>

                <button disabled={!(formObject.name && formObject.text)}
                    onClick={handleFormSubmit}> submit</button>
            </form>
            </>
            

        
    );
}


export default Reviews;
