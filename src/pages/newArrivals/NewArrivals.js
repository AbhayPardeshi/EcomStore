import React from "react";
import { useFilter } from "../../contexts/filter/FilterProvider";
import styles from "./newarrival.module.css";
import Filter from "../../components/filter/Filter";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

const NewArrivals = () => {
  const { newArrivalSortedProducts } = useFilter();
  const newProductsCount = newArrivalSortedProducts.length;
  return (
    <>
      <div className={styles.category_name}>New Arrivals</div>
      <div className={styles.section_div}>
        <div className={styles.filter__div}>
          <Filter />
        </div>

        <div className={styles.main_wrapper}>
          <section className={styles.item_section}>
            <article className={styles.applied_filters}>
              <div className={styles.products}>
                <span>{newProductsCount} Products</span>
                <span>
                  <FiFilter />
                </span>
              </div>

              <div className={styles.all_applied_filters}>
                <span className={styles.applied_filters_name}>
                  Applied Filters
                </span>
                <div className={styles.applied_filters_black_div}>
                  <span>nike</span>
                  <span>
                    <AiFillCloseCircle />
                  </span>
                </div>
              </div>
            </article>

            <article className={styles.item_article}>
              {newArrivalSortedProducts?.map((item) => {
                return (
                  <Link
                    to={`/products/${item.categoryName.toLowerCase()}/${
                      item._id
                    }`}
                  >
                    <div className={styles.single_item_div} key={item._id}>
                      <a href="#" className={styles.item_anchor}>
                        <img src={item.imageUrl} alt={item.name} />
                        <div className={styles.item_name}>{item.name}</div>
                        <div className={styles.item_price}>
                          ${item.originalPrice}
                        </div>
                      </a>
                    </div>
                  </Link>
                );
              })}
            </article>
          </section>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
