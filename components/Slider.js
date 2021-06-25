import React, { useEffect, useState } from "react";
import styles from "../styles/Components.module.css";
import SliderContent from "./SliderContent";

const Slider = () => {
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    width: 300,
  });
  const images = [
    "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
    "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
    "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
  ];
  //   const getWidth = () => {
  //     if (typeof window !== "undefined") {
  //       return window.innerWidth;
  //     } else return 400;
  //   };
  const { translate, transition } = state;

  return (
    <div className={styles.sliderContainer}>
      {/* <h1>I am Slider container</h1> */}
      <SliderContent
        images={images}
        translate={translate}
        transition={transition}
        width={700 * images.length}
      />
    </div>
  );
};

export default Slider;
