import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const cardsData = [
  {
    id: 1,
    title: "Vegetables",
    image: "https://via.placeholder.com/200",
    offer: "upto 10% off",
  },
  {
    id: 2,
    title: "Fruits",
    image: "https://via.placeholder.com/200",
    offer: "upto 5% off",
  },
  {
    id: 3,
    title: "Branded Food",
    image: "https://via.placeholder.com/200",
    offer: "upto 7% off",
  },
  {
    id: 4,
    title: "Non Veg",
    image: "https://via.placeholder.com/200",
    offer: "upto 3% off",
  },
  {
    id: 5,
    title: "Home Core",
    image: "https://via.placeholder.com/200",
    offer: "upto 8% off",
  },
  {
    id: 6,
    title: "Beverages",
    image: "https://via.placeholder.com/200",
    offer: "upto 10% off",
  },
  {
    id: 7,
    title: "Kitchen",
    image: "https://via.placeholder.com/200",
    offer: "upto 5% off",
  },
  {
    id: 8,
    title: "Mobiles",
    image: "https://via.placeholder.com/200",
    offer: "upto 7% off",
  },
  {
    id: 9,
    title: "Electronics",
    image: "https://via.placeholder.com/200",
    offer: "upto 3% off",
  },
  {
    id: 10,
    title: "Fashionwear",
    image: "https://via.placeholder.com/200",
    offer: "upto 8% off",
  },
  {
    id: 11,
    title: "Footwear",
    image: "https://via.placeholder.com/200",
    offer: "upto 3% off",
  },
  {
    id: 12,
    title: "Dryfruits",
    image: "https://via.placeholder.com/200",
    offer: "upto 8% off",
  },
];

const Cards = () => {
  return (
    <>
      <h1>Shop By Category</h1>
    <div className="cards">
        
                  
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt="card-image" className="card-image" />
          <div className="card-title">{card.title}</div>
          <Link to="/offer" className="card-offer">{card.offer}</Link>
        </div>
      ))}
      </div>
      </>
  );
};

const Last = () => {
  return (
    <div className="container">

      <div className="content">
        <Cards />
      </div>
    </div>
  );
};

export default Last;
