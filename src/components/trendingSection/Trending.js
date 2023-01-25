import React from "react";
import styles from "./trending.module.css";
import Carousel from "react-elastic-carousel";
import trendingItems from "./trendingData";
import Carousal from "../carousal/Carousal";

const breakPoints = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 550,
    itemsToShow: 2,
  },
  {
    width: 768,
    itemsToShow: 3,
  },
  {
    width: 1124,
    itemsToShow: 4,
  },
];

export const Trending = () => {
  return (
    <main className={styles.trendingItems_div}>
      {/* <Carousal /> */}
      <p id={styles.heading}>TRENDING IN SALE</p>
      <Carousel breakPoints={breakPoints}>
        {trendingItems.map((item) => {
          return (
            <div className={styles.trendingItems_section_singleItem}>
              <article key={item.id}>
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
      </Carousel>
    </main>
  );
};
