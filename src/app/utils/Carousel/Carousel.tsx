"use client";
import React, { useState, ReactNode } from "react";
import styles from "./Carousel.module.css"; // Create Carousel.module.css for styling
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface CarouselProps {
  children: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  return (
    <div className={styles.slides_wrapper}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <div className={styles.btn_wrapper}>
        <button className={styles.arrow_btn} onClick={prev}>
          <BsChevronLeft className={styles.arrow_font} />
        </button>
        <button className={styles.arrow_btn} onClick={next}>
          <BsChevronRight className={styles.arrowFont} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
