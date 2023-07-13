import React from "react";
import Lottie from "lottie-react";
import HomeLot from "./HomeLot.json";
import { Carousel } from "flowbite-react";
import Marquee from "react-fast-marquee";
import { Card } from "flowbite-react";
import "./home.css";

function Home() {
  const data = [
    {
      title: "Web Development",
      desc: "lorem skdocnoksd ckndkosd cksodnc mcnsndkoc",
    },
    {
      title: "App Development",
      desc: "lorem skdocnoksd ckndkosd cksodnc mcnsndkoc",
    },
    {
      title: "UI/UX Design",
      desc: "lorem skdocnoksd ckndkosd cksodnc mcnsndkoc",
    },
    {
      title: "Web Hosting",
      desc: "lorem skdocnoksd ckndkosd cksodnc mcnsndkoc",
    },
  ];
  const styling = {
    padding: "15px",
    width: "60%",
  };
  const stylee = {
    marginBottom: "100px",
  };
  return (
    <>
      <section>
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
          <div style={stylee}>
            <Marquee pauseOnHover speed="150">
              <img src="img/Marquee/one.png" style={styling} />
              <img src="img/Marquee/two.png" style={styling} />
              <img src="img/Marquee/three.png" style={styling} />
              <img src="img/Marquee/four.png" style={styling} />
              <img src="img/Marquee/five.png" style={styling} />
              <img src="img/Marquee/eight.png" style={styling} />
              <img src="img/Marquee/nine.png" style={styling} />
            </Marquee>
          </div>
        </div>
      </section>
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
              blanditiis nisi cumque rem fugiat adipisci sunt perferendis
              nesciunt doloremque facilis nihil, hic, in ea soluta. Totam
              adipisci doloremque reprehenderit modi.
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
              <img
                src="img/Carousel/1.jpg"
                alt="Image 2"
                className="caro-img"
              />
              <img
                src="img/Carousel/2.jpg"
                alt="Image 4"
                className="caro-img"
              />
              <img
                src="img/Carousel/3.jpg"
                alt="Image 5"
                className="caro-img"
              />
              <img
                src="img/Carousel/4.jpg"
                alt="Image 6"
                className="caro-img"
              />
            </Carousel>
          </div>
        </div>
      </section>
      <section>
        <div className="over">
          <div className="top">
            <h1 className="tit">Services with which we can support you.</h1>
          </div>
          <div className="cont">
            <div className="lef">
              <img
                src="https://21645388.fs1.hubspotusercontent-na1.net/hub/21645388/hubfs/infinity/Home/Frame%20127.webp?width=458&amp;height=548&amp;name=Frame%20127.webp"
                width="400px"
              />
            </div>
            <div className="conta">
              {data.map((prop) => {
                return (
                  <div className="ri" key={prop.title}>
                    <Card className="card">
                      <h3 className="h3">{prop.title}</h3>
                      <p>{prop.desc}</p>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
