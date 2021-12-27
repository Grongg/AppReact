import React from "react";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Logo />
      <h1>Accueil</h1>
      <Countries />
    </div>
  );
};

export default Home;
