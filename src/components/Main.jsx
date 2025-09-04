import React from "react";
import Card from "./Card/Card";
import cards from "./../data/cards-data.json";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__cards">
          {cards.map((card, index) => {
            return <Card data={card} key={index} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
