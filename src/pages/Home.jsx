import React from "react";
import { AboutUs, Hero, Team } from "../components/index";

function Home(props) {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Team />
    </div>
  );
}

export default Home;
