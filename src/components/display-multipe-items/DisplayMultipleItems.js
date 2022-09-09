import React from "react";
import styles from "./multipleItems.module.css";
import { data } from "./multipleItemsData";

const DisplayMultipleItems = () => {
  return (
    <section className={styles.item_section}>
      <article className={styles.item_article}>
        {data.map((item) => {
          return (
            <>
              <div className={styles.single_item_div}>
                <a href="#" className={styles.item_anchor}>
                  <img src={item.image} alt={item.name} />
                  <div className={styles.item_name}>{item.name}</div>
                  <div className={styles.item_price}>{item.price}</div>
                </a>
              </div>
            </>
          );
        })}
      </article>
    </section>
  );
};

export default DisplayMultipleItems;
