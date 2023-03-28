import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Better from "./Better";
import Build from "./Building/Build";
import Hero from "./Hero";
import LastCom from "./LastCom";

const Homescreen = () => {
  return (
    <div>
      <Header />
      {/* <br /> */}
      <Hero />
      <Better /> 
      <Build />
      <LastCom />
      <Footer />
    </div>
  );
};

export default Homescreen;
