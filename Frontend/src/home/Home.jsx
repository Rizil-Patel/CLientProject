import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Subsection1 from "../components/Subsection1";
import Section3 from "../components/Section3";
import Section2 from "../components/Section2";

function Home() {
  return (
    <>
     
      <Subsection1 />    
      <Navbar />
      <Section3 />
      <Section2 />
      <Footer />
    </>
  );
}

export default Home;
