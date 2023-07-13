import React from "react";
import { Carousel } from "flowbite-react";
import "./about.css";

function About() {
  return (
    <section>
      <div className="abt-main">
        <div className="abt-left">
          <img
            className="abt-logo"
            src="https://21645388.fs1.hubspotusercontent-na1.net/hubfs/21645388/dart-board.webp"
          />
          <h2 className="abt-h2">STATS ABOUT WORK</h2>
          <h1 className="title">Appear On the Front Page of Google!</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            blanditiis nisi cumque rem fugiat adipisci sunt perferendis nesciunt
            doloremque facilis nihil, hic, in ea soluta. Totam adipisci
            doloremque reprehenderit modi.
          </p>
          <button className="btn">View More</button>
        </div>
        <div className="abt-right">
          <Carousel
            leftControl=" "
            rightControl=" "
            slideInterval={1000}
            className="caro"
          >
            <img src="img/Carousel/1.jpg" alt="Image 2" className="caro-img" />
            <img src="img/Carousel/2.jpg" alt="Image 4" className="caro-img" />
            <img src="img/Carousel/3.jpg" alt="Image 5" className="caro-img" />
            <img src="img/Carousel/4.jpg" alt="Image 6" className="caro-img" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default About;
