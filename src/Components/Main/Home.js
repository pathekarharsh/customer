import React from "react";
import "./Home.css";
import Header from "../Header";
import Card from "./Card";

const Home = () => {
  return (
    <div className="major-container">
      <Header />
      <div className="C">
        <Card />
      </div>
    </div>
  );
};

export default Home;
