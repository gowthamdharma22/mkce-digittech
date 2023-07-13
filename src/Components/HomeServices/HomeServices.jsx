import React from "react";
import "./style.css";
import { Card } from "flowbite-react";

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

function HomeServices() {
  return (
    <section>
      <div className="top">
        <h1 className="tit">Services with which we can support you.</h1>
      </div>
      <div className="cont">
        <div className="lef">
          <img src="https://21645388.fs1.hubspotusercontent-na1.net/hub/21645388/hubfs/infinity/Home/Frame%20127.webp?width=458&amp;height=548&amp;name=Frame%20127.webp" width="400px" />
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
    </section>
  );
}

export default HomeServices;
