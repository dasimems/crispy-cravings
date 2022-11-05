import React from "react";
import { AboutUs, Hero, Team, Services } from "../components/index";

function Home(props) {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Team />
    </div>
  );
}

export default Home;
