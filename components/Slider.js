import React, { useEffect, useState } from "react";
import styles from "../styles/Components.module.css";
import SliderContent from "./SliderContent";
import Arrow from "./Arrow";
const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
    "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
    "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
  ];
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  const { activeIndex, translate, transition } = state;
  //   const getWidth = () => {
  //     if (typeof window !== "undefined") {
  //       return window.innerWidth;
  //     } else return 400;
  //   };

  const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    } else {
      setState({
        ...state,
        activeIndex: activeIndex + 1,
        translate: (activeIndex + 1) * 700, /// 700 is width of container
      });
    }
  };

  const prevSlide = () => {
    if (activeIndex <= images.length - 1 && activeIndex > 0) {
      setState({
        ...state,
        activeIndex: activeIndex - 1,
        translate: (activeIndex - 1) * 700, /// 700 is width of container
      });
    } else {
      setState({
        ...state,
        translate: (images.length - 1) * 700,
        activeIndex: images.length - 1,
      });
    }
  };

  // const autoSlide = () => {
  //   setInterval(nextSlide, 1000);
  // };

  // autoSlide();
  return (
    <div className={styles.sliderContainer}>
      {/* <h1>I am Slider container</h1> */}
      <SliderContent
        images={images}
        translate={translate}
        transition={transition}
        width={700 * images.length}
      />
      <Arrow direction={"left"} handleClick={prevSlide} />
      <Arrow direction={"Right"} handleClick={nextSlide} />
    </div>
  );
};

export default Slider;
