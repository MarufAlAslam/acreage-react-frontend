import React from "react";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Benifits from "../../components/benifits";
import KeyFeatures from "../../components/key-features";
import Quote from "../../components/quote";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Benifits />
      <KeyFeatures />
      <Quote />
    </div>
  );
};

export default Home;
