import React, { useState } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import { Card } from "react-bootstrap";


const Create = () => {
  const [userName, setUserName] = useState([]);
  const [userObj, setUserObj] = useState({
    name: "",
    giftList: [],

  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUserObj({ ...userObj, [name]: value });
  };

  const handleFormSubmit = (e) => {
    API.saveUser(userObj)
      .then((data) => {
        const userArr = userName.slice(0);
        userArr.push(data.data);
        console.log(data.data);
        setUserName(userArr);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
   <> 
      
  <div className="text-center" >
      <Card className="mb-3" style={{ width: "40rem", padding: "20px"}}>
        <Card.Title>Create Your Own Registry Here!</Card.Title>
        <Card.Img src="https://www.honestlymodern.com/wp-content/uploads/2020/10/Gifts-Laying-on-a-Table-1.png" />
        <Card.Body>
          <Input onChange={handleInputChange} name="name" placeholder="Name" />
         
        </Card.Body>

        <FormBtn onClick={handleFormSubmit}>
        <Link to={"/showall/name/" + userObj.name}>Submit</Link>
      </FormBtn>

      </Card>

      

      <Footer/>
    </div>

    </>

  );
};

export default Create;
