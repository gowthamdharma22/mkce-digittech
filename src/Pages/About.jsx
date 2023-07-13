import React from "react";
import "./about.css";

function About() {
  return (
    <section>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">About Us</h1>
          <p class="lead">Home > About</p>
        </div>
      </div>
      <div class="row">
        <div class="col ida">
          <h1 className="title">We work with Perfection</h1>
          <p className="des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper diam
            ut et elementum quis magna tristique. Commodo condimentum turpis
            quam porttitor. Pretium, odio viverra ornare quisque.
          </p>
          <p className="desci">
            <img
              width="30px"
              src="https://21645388.fs1.hubspotusercontent-na1.net/hubfs/21645388/rectangle.png"
            ></img>{" "}
            ESTABLISHED IN 2020
          </p>
        </div>
        <div class="col">
          <img
            width="450px"
            src="https://21645388.fs1.hubspotusercontent-na1.net/hub/21645388/hubfs/infinity/Author/Group%209181%20(2).webp?width=675&amp;height=634&amp;name=Group%209181%20(2).webp"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default About;
