import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Hero from "../components/Hero";
import "./detail.css";
import NoMatch from "./NoMatch";

const Detail = () => {
  // Setting state for user and form inputs
  const [user, setUser] = useState({
    name: "",
    giftList: [],
    updatedAt: ""
  });
  // Ensuring we can clear the from inputs on submit
  const [formObject, setFormObject] = useState({
    title: "", 
    image: "", 
    link: ""
  });
  const params = useParams();
  // Getting users data by ID or name 
  useEffect(() => {
    if (params.id) {
      API.getUser(params.id)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    } else if (params.name) {
      API.getUserByName(params.name)
        .then((res) => setUser(res.data[0]))
        .catch((err) => console.log(err));
    }
  }, [params]);
  // Grabbing values from form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };
  // Setting new state after form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    var newArr = user.giftList;
    newArr.push(formObject);
    setUser({ ...user, giftList: newArr });
    API.updateUser(user._id, user)
      .then((res) => console.log(res), setFormObject({title:"", image:"", link:""}))
      .catch((err) =>{ throw err });
  };
  // Deleting a gift from the array
  const delGift = (e) => {
    e.preventDefault();
    var newArr = user.giftList.filter((id) => {return e.target.id !== id._id});
    setUser({ ...user, giftList: newArr });
    API.updateUser(user._id, user)
      .then((res) => console.log(res))
      .catch((err) => { throw err });
  };
  {if (user){
    return (
      <div className="Detail">
        <div className="container-fluid">
        <p className="website-link-txt text-center">Here are a few links to get your Giftr going!</p>
          <Row>
            <div className="align-btns">
            <button className="website-btn"><a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">Amazon</a></button>
            <button className="website-btn"><a href="https://www.etsy.com/" target="_blank" rel="noopener noreferrer">Etsy</a></button>
            <button className="website-btn"><a href="https://www.target.com/" target="_blank" rel="noopener noreferrer">Target</a></button>
            <button className="website-btn"><a href="https://www.wayfair.com/" target="_blank" rel="noopener noreferrer">Wayfair</a></button>
            </div>
          </Row>
          <Hero backgroundImage="https://www.thissimplebalance.com/wp-content/uploads/2019/10/gift-ideas-for-minimalists-840x630.jpg">
            <h1 className="text-center">Add A Gift, {user.name}!</h1>
            <h2>Treat Yo' Self</h2>
          </Hero>
          <Row>
            <Col size="md-12">
              <form>
                <Input
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Title"
                  value={formObject.title}
                />
                <Input
                  onChange={handleInputChange}
                  name="image"
                  placeholder="Image Link"
                  value={formObject.image}
                />
                <Input
                  onChange={handleInputChange}
                  name="link"
                  placeholder="Link"
                  value={formObject.link}
                />
                <FormBtn
                  disabled={!(formObject.title && formObject.link)}
                  onClick={handleFormSubmit}
                >
                  Add gift
                </FormBtn>
              </form>
              {user.giftList.map((gift) => (
                <List key={gift.title} className="detail-list">
                  <ListItem>
                    {gift.title}
                    <button
                      className="delete-button"
                      id={gift._id}
                      onClick={delGift}
                    >
                      X
                    </button>
                  </ListItem>
                  <ListItem>
                    <img className="detail" src={gift.image} alt="gift"></img>
                  </ListItem>
                  <ListItem>
                    <a href={gift.link} target="_blank" rel="noopener noreferrer">
                      Click to purchase
                    </a>
                  </ListItem>
                </List>
              ))}
            </Col>
          </Row>
        </div>
      </div>
    );

  } else if (user === undefined) {
    return(
      <NoMatch />

    )
  }}
};
export default Detail;
