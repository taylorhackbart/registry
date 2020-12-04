import React, { useState } from "react";
import API from "../../utils/API";

function Reviews() {
    // Setting our component's initial state
    const [formObject, setFormObject] = useState({
        name : "",
        review : "",
        picture: ""

    })
    const [form,setForm]= useState([])

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        console.log(value)
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        
        console.log("I hit the route");
        if (formObject.name && formObject.review) {
            API.saveReviews(formObject)
                .then(res => {
                    const reviewArr = form.slice(0);
                    reviewArr.push(res);
                    setForm(reviewArr);
                    console.log("I hit the route");
                    console.log(res);
                })
            
                .catch(err => console.log(err));
        }
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
                        name="review"
                        placeholder="write your review (required)" />
                </div>
                <div className="form-group">
                    <input className="form-control" onChange={handleInputChange}
                        name="picture"
                        placeholder="picture url (required)" />
                </div>

                <button disabled={!(formObject.name && formObject.review)}
                    onClick={handleFormSubmit}> submit</button>
            </form>
            </>
            

        
    );
}


export default Reviews;
