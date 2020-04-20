import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slideshow.scss";

const slideImages = [
  "./images/sharks2copy.jpg",
  "./images/iskras1copy.jpeg",
  "./images/taiwan1copy.jpeg",
  "./images/kobra1copy.jpeg"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            {/* <span>Slide 1</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            {/* <span>Slide 2</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
