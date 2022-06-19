import React from "react";
import styles from "./trending.module.css";
import trendingItems from "./trendingData";
export const Trending = () => {
  return (
    <main className={styles.trendingItems_div}>
      <p id={styles.heading}>TRENDING IN SALE</p>
      <div className={styles.trendingItems_section}>
        {trendingItems.map((item) => {
          return (
            <article key={item.id}>
              <a href="#">
                <img src={item.image} alt={item.name} />
                <div className={styles.trendingItem_info}>
                  <div>
                    <p className={styles.trendingItem_name}>
                      {`${item.name.substring(0, 20)}...`}
                    </p>
                    <p className={styles.pale_color_heading}>{item.type}</p>
                    <p className={styles.pale_color_heading}>{item.category}</p>
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
          );
        })}
      </div>
    </main>
  );
};
