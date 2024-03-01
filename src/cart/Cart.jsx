import React from 'react'

const Cart = ({
  movie: { title, image, year, duration }, // props olarak movie alınacak
}) => {
  return (
    <div className="movie-container">
      <div className="movie-img">
        <img src={image} alt={title} />{" "}
      </div>
      <div className="movie-inf">
        <div className="movie-title">
          <h3>{title}</h3>
        </div>
        <div className="movie-text">
          <p>{year}</p>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart


