import React from "react";
import Marquee from "react-fast-marquee";

function Marque() {
  const styling = {
    padding: "15px",
    width: "60%",
  };
  const stylee={
    marginBottom:"100px"
  }
  return (
    <div style={stylee}>
      <Marquee pauseOnHover speed="150" >
        <img src="img/Marquee/one.png" style={styling} />
        <img src="img/Marquee/two.png" style={styling} />
        <img src="img/Marquee/three.png" style={styling} />
        <img src="img/Marquee/four.png" style={styling} />
        <img src="img/Marquee/five.png" style={styling} />
        <img src="img/Marquee/eight.png" style={styling} />
        <img src="img/Marquee/nine.png" style={styling} />
      </Marquee>
    </div>
  );
}

export default Marque;
