import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Footer from "../components/Footer";
import {Input,FormBtn} from "../components/Form";
import Hero from "../components/Hero";
import "./detail.css";




const Detail = () => {
  const [user, setUser] = useState({
    name: "",
    giftList: [],
  });
  const [formObject, setFormObject] = useState({})
  const params = useParams();

  useEffect(() => {
    console.log(params)
    if(params.id){
      API.getUser(params.id).then((res) => {
        console.log(params.id)
        console.log(res.data)
        setUser(res.data)
      })
      .catch((err) => console.log(err));
    } else if (params.name){
      API.getUserByName(params.name).then((res) => {
        // console.log(params.name)
        // console.log(res.data[0])
        setUser(res.data[0])
      })
      .catch((err) => console.log(err));
    }
  }, [params]);

  const handleInputChange=(event)=>{
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  const handleFormSubmit=(event)=>{
      event.preventDefault();
      var newArr = user.giftList
      newArr.push(formObject)
      setUser({...user, giftList: newArr})
      console.log(user)
      API.updateUser(user._id,user).then((res) =>{
        console.log(res)
      }).catch(err=>{throw err})
      
  };

  


  return (

   <div className="Detail" >
     <div className="container-fluid">
     <Hero backgroundImage="https://www.thissimplebalance.com/wp-content/uploads/2019/10/gift-ideas-for-minimalists-840x630.jpg">
       <h1 className="text-center">Add A Gift, {user.name}!</h1>
       <h2>Treat Yourself Today</h2>
       </Hero>
      <Row>
        <Col size="md-12">
        <form>
            <Input
                onChange={handleInputChange} 
                name="title"
                placeholder="Title"
            />
            <Input 
                onChange={handleInputChange}
                name="image"
                placeholder="Image"
            />
            <Input
                onChange={handleInputChange}
                name="link"
                placeholder="Link"
      
            />
            <FormBtn
                disabled={!(formObject.title && formObject.link)}
                onClick={handleFormSubmit}
              >
                  Add gift
              </FormBtn>
            
        </form>
            {user.giftList.map((gift) => (
              <List key={gift.title}>
                <ListItem>{gift.title}</ListItem>
                <ListItem > <img src ={gift.image} alt="gift" ></img></ListItem>
                <ListItem > <a href={gift.link} target="_blank"
                rel="noopener noreferrer" > Click to purchase </a></ListItem>
              </List>
            ))}
       
          </Col>
         </Row>
        <Footer />
      </div>
    </div>
  
  );
};
export default Detail;
