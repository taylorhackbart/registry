import React, {useState} from "react";
import API from "../utils/API"
import {Input,FormBtn} from "../components/Form"
import './create.css';
// import Footer from "../components/Footer"


const Create = () => {

  const [userName, setUserName] = useState([]);
  const [userObj, setUserObj] = useState({
    name: ""
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setUserObj({...userObj, [name]: value})
  }
  
  const handleFormSubmit = (e) => {
    API.saveUser(userObj)
    .then(data => {
      const userArr =  userName.slice(0);
      userArr.push(data.data)
      console.log(data.data)
      setUserName(userArr)
    })
    .catch(err => {
      throw err;
    })
  }

  return (
    <>
     <Input
        onChange={handleInputChange}
        name="name"
        placeholder="Name"
        />  
        

      <FormBtn
      onClick={handleFormSubmit}
      >
        Submit
      </FormBtn>

    
      {/* <Footer/> */}
    </>
   
  );
};

export default Create;
