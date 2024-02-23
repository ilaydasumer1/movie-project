import React from "react";

const Trending = ({
  movie: { title, image, year, duration }, // props olarak movie alınacak
}) => {
  return (
    <div>
      <h2>Film Listesi</h2>
      <img src={image} alt={title} />{" "}
      <div>
        <h3>{title}</h3>
        <p>{year}</p>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Trending;
