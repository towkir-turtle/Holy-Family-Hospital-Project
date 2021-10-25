import React from "react";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ChooseUs></ChooseUs>
      <Review></Review>
    </div>
  );
};

export default Home;
