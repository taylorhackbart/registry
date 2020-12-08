import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
// import Footer from "../components/Footer";
import { Input, FormBtn } from "../components/Form";
import Hero from "../components/Hero";
import "./detail.css";
import NoMatch from "./NoMatch";

const Detail = () => {
  const [user, setUser] = useState({
    name: "",
    giftList: [],
  });
  const [formObject, setFormObject] = useState({});
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      API.getUser(params.id)
        .then((res) => setUser(res.data))
        .catch((err) => console.log("error boiiiii"));
    } else if (params.name) {
      API.getUserByName(params.name)
        .then((res) => setUser(res.data[0]))
        .catch((err) => console.log(err));
    }
  }, [params]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    var newArr = user.giftList;
    newArr.push(formObject);
    setUser({ ...user, giftList: newArr });
    API.updateUser(user._id, user)
      .then((res) => console.log(res))
      .catch((err) =>{ throw err });
  };

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
          <Row>
            <button className="website-btn"><a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">Amazon</a></button>
            <button className="website-btn"><a href="https://www.etsy.com/" target="_blank" rel="noopener noreferrer">Etsy</a></button>
            <button className="website-btn"><a href="https://www.target.com/" target="_blank" rel="noopener noreferrer">Target</a></button>
            <p className="website-link-txt">Here are a few links to get your Giftr going!</p>
          </Row>
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
