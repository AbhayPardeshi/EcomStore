import React from "react";
import styles from "./trending.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trendingItems from "./trendingData";
import Carousal from "../carousal/Carousal";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1124, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 550, settings: { slidesToShow: 2 } },
    { breakpoint: 0, settings: { slidesToShow: 1 } },
  ],
};

export const Trending = () => {
  return (
    <main className={styles.trendingItems_div}>
      {/* <Carousal /> */}
      <p id={styles.heading}>TRENDING IN SALE</p>
      <Slider {...settings}>
        {trendingItems.map((item) => {
          return (
            <div
              className={styles.trendingItems_section_singleItem}
              key={item.id}
            >
              <article>
                <a href="#">
                  <img src={item.image} alt={item.name} />
                  <div className={styles.trendingItem_info}>
                    <div>
                      <p className={styles.trendingItem_name}>
                        {`${item.name.substring(0, 20)}...`}
                      </p>
                      <p className={styles.pale_color_heading}>{item.type}</p>
                      <p className={styles.pale_color_heading}>
                        {item.category}
                      </p>
                    </div>
                    <div className={styles.trendingItem_price}>
                      <p className={styles.trendingItem_original_price}>
                        ${item.originalPrice}.00
                      </p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          );
        })}
      </Slider>
    </main>
  );
};
