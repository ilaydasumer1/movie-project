import React from "react";

const Cart2 = ({
  movie: { title, image, year, duration }, // props olarak movie alınacak
}) => {
  return (
    <div className="movie-container">
      <div className="movie-img">
        <img src={image} alt={title} />{" "}
      </div>
      <div className="movie-inf">
        <div className="movie-title">
          <h5>{title}</h5>
        </div>
        <div className="movie-text">
          <h5>{year}</h5>
          <h5>{duration}</h5>
        </div>
      </div>
    </div>
  );
};

export default Cart2;
