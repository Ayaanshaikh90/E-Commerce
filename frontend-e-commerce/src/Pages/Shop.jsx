import React from "react";
import Hero from "../Components/Hero/Hero";
import Polular from "../Components/Popular/Polular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollection/newCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Polular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
