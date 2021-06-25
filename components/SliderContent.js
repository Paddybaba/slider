import React from "react";
import styles from "../styles/Components.module.css";
import Slide from "./Slide";

const SliderContent = ({ images, translate, transition, width }) => {
  console.log(width);
  const myStyle = {
    transform: `translate(-${translate}px)`,
    transition: `transform ease-out ${transition}s `,
    height: `100%`,
    width: `${width}px`,
    border: `2px solid green`,
    display: `flex`,
  };

  return (
    <div style={myStyle}>
      {images.map((image, index) => {
        return <Slide content={image} key={index} />;
      })}
    </div>
  );
};

export default SliderContent;
