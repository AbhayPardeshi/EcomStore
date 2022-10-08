import React from "react";
import styles from "./multipleItems.module.css";
import { data } from "./multipleItemsData";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { useFilter } from "../../contexts/filter/FilterProvider";
import { Link, useParams } from "react-router-dom";

const DisplayMultipleItems = () => {
  const { sortedProducts } = useFilter();
  const productsCount = sortedProducts?.length;
  return (
    <section className={styles.item_section}>
      <article className={styles.applied_filters}>
        <div className={styles.products}>
          <span>{productsCount} Products</span>
          <span>
            <FiFilter />
          </span>
        </div>

        <div className={styles.all_applied_filters}>
          <span className={styles.applied_filters_name}>Applied Filters</span>
          <div className={styles.applied_filters_black_div}>
            <span>nike</span>
            <span>
              <AiFillCloseCircle />
            </span>
          </div>
        </div>
      </article>

      <article className={styles.item_article}>
        {sortedProducts?.map((item) => {
          return (
            <Link
              to={`/products/${item.categoryName.toLowerCase()}/${item._id}`}
            >
              <div className={styles.single_item_div} key={item._id}>
                <a href="#" className={styles.item_anchor}>
                  <img src={item.imageUrl} alt={item.name} />
                  <div className={styles.item_name}>{item.name}</div>
                  <div className={styles.item_price}>${item.originalPrice}</div>
                </a>
              </div>
            </Link>
          );
        })}
      </article>
    </section>
  );
};

export default DisplayMultipleItems;
