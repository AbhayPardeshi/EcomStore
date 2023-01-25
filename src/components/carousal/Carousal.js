import React, { useState, useEffect } from "react";
import styles from "./carousal.module.css";
const items = [
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "Image 3",
  },
];

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [itemsCount, setItemsCount] = useState(items.length);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
    if (width < 768) {
      setSlidesToShow(1);
    } else if (width < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(itemsCount - 1);
    }
    setCurrentIndex(currentIndex - slidesToShow);
    setTranslateValue(translateValue + -(100 / itemsCount) * slidesToShow);
  };

  const goToNextSlide = () => {
    if (currentIndex === itemsCount - slidesToShow) {
      return setCurrentIndex(0);
    }
    setCurrentIndex(currentIndex + slidesToShow);
    setTranslateValue(translateValue + -(100 / itemsCount) * slidesToShow);
  };

  return (
    <div className={styles.carousel_container}>
      <div
        className={styles.carousel_slider}
        style={{
          transform: `translateX(${translateValue}%)`,
          transition: "transform ease-out 0.45s",
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-slide">
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      <button className="goToPrev" onClick={goToPrevSlide}>
        <i className="fas fa-chevron-left">Prev</i>
      </button>
      <button className="goToNext" onClick={goToNextSlide}>
        <i className="fas fa-chevron-right">Next</i>
      </button>
    </div>
  );
};

export default Carousal;
