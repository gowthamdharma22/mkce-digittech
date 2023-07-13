import React from "react";
import Lottie from "lottie-react";
import HomeLot from "../Components/HomeLot.json";
import { Carousel } from "flowbite-react";
import Marque from "../Components/Marquee";
import HomeServices from "../Components/HomeServices/HomeServices";
import About from "../Components/About/Stats";

function Home() {
  return (
    <>
      <section className="home" >
        <div className="main">
          <div className="left">
            <h1 className="title">We create amazing digital products</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              blanditiis nisi cumque rem fugiat adipisci sunt perferendis
              nesciunt doloremque facilis nihil, hic, in ea soluta. Totam
              adipisci doloremque reprehenderit modi.
            </p>
            <button className="btn">Know More</button>
          </div>
          <div className="righ1t">
            <Lottie animationData={HomeLot} className="left_gif" />
          </div>
        </div>
        <div className="mar">
          <Marque />
        </div>
      </section>
      <About/>
      <HomeServices />
    </>
  );
}

export default Home;
