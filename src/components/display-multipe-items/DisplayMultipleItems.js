import React from "react";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { useFilter } from "../../contexts/filter/FilterProvider";
import { useSelectedFilter } from "../../contexts/SelectedFilters/SelectedFiltersProvider";
import styles from "./multipleItems.module.css";

const DisplayMultipleItems = () => {
  const { sortedProducts } = useFilter();
  const { appliedFilters } = useSelectedFilter();
  const productsCount = sortedProducts?.length ?? 0;

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
          {appliedFilters.map((item) => {
            return (
              <div className={styles.applied_filters_black_div} key={item}>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </article>

      <article className={styles.item_article}>
        {sortedProducts?.map((item) => {
          const productId = item._id || item.id;
          const categoryPath = item.categoryName?.toLowerCase() || "products";

          return (
            <Link
              key={productId}
              to={`/products/${categoryPath}/${productId}`}
            >
              <div className={styles.single_item_div}>
                <div className={styles.item_anchor}>
                  <img src={item.imageUrl} alt={item.name} />
                  <div className={styles.item_name}>{item.name}</div>
                  <div className={styles.item_price}>${item.originalPrice}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </article>
    </section>
  );
};

export default DisplayMultipleItems;
