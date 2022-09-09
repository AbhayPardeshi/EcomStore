import React from "react";
import styles from "./multipleItems.module.css";
import { data } from "./multipleItemsData";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";

const DisplayMultipleItems = () => {
  return (
    <section className={styles.item_section}>
      <article className={styles.applied_filters}>
        <div className={styles.products}>
          <span>5 Products</span>
          <span>
            <FiFilter />
          </span>
        </div>

        <div className={styles.all_applied_filters}>
          <span className={styles.applied_filters_name}>Applied Filters</span>
          <div className={styles.applied_filters_black_div}>
            <span>Nike</span>
            <span>
              <AiFillCloseCircle />
            </span>
          </div>
        </div>
      </article>

      <article className={styles.item_article}>
        {data.map((item) => {
          return (
            <>
              <div className={styles.single_item_div}>
                <a href="#" className={styles.item_anchor}>
                  <img src={item.image} alt={item.name} />
                  <div className={styles.item_name}>{item.name}</div>
                  <div className={styles.item_price}>${item.price}</div>
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
