import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import API from "../../utils/API"
import "./index.css"

const Review = () => {
  const [reviewsArr, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const job = "GIFTR";
  const [review, setReview] = useState({})



  useEffect(() => {
    console.log("reviewsArr")
    loadReviews()
  }, [index])

  // Loads all books and sets them to books
  function loadReviews() {
    console.log("reviewsArr")
    API.getReviews()
      .then(res => {
        console.log("res")
        console.log(res.data);
        setData(res.data);
        setReview(res.data[index]);
      }
      )
      .catch(err => console.log(err));
  };

  const checkNumber = (number) => {
    if (number > reviewsArr.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviewsArr.length - 1;
    }
    return number;
  };

  // this increases the index upon click
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

    // this decreases the index upon click
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // generates a random index
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviewsArr.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  // this is the return block
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={review.image} alt={review.name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{review.name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{review.text}</p>
      <div className='button-container'> 
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );

};

export default Review;