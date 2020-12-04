import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import API from "../../utils/API"
import "./index.css"

const Review = () => {
  const [reviews, setReviews] = useState([]);
  // const [index, setIndex] = useState(0);
  // const { name, job, image, text } = Reviews[index];

  useEffect(() => {
    loadReviews()
    console.log(reviews)
  }, [])

  // Loads all books and sets them to books
  function loadReviews() {
    API.getReviews()
      .then(res => {
        console.log(res.data);
        setReviews(res.data)
        // setIndex(0)
      }
      )
      .catch(err => console.log(err));
  };
  // const checkNumber = (number) => {
  //   if (number > Reviews.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return Reviews.length - 1;
  //   }
  //   return number;
  // };
  // const nextPerson = () => {
  //   setIndex((index) => {
  //     let newIndex = index + 1;
  //     return checkNumber(newIndex);
  //   });
  // };
  // const prevPerson = () => {
  //   setIndex((index) => {
  //     let newIndex = index - 1;
  //     return checkNumber(newIndex);
  //   });
  // };
  // const randomPerson = () => {
  //   let randomNumber = Math.floor(Math.random() * Reviews.length);
  //   if (randomNumber === index) {
  //     randomNumber = index + 1;
  //   }
  //   setIndex(checkNumber(randomNumber));
  // };

  return (
    <article className='review'>
      <div className='img-container'>
        {reviews.map(review => (
          <>
           <img src={review.image} alt={review.name} className='person-img' />
      <h4 className='author'>{review.name}</h4>
      <p className='job'>{review.job}</p>
      <p className='info'>{review.text}</p>
      </>
        ))}
       
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <div className='button-container'>
        <button className='prev-btn' >
          <FaChevronLeft />
        </button>
        <button className='next-btn' >
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' >
        surprise me
      </button>
    </article>
  );
};

export default Review;