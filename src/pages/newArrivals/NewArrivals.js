import React from "react";
import { useFilter } from "../../contexts/filter/FilterProvider";
import { useSelectedFilter } from "../../contexts/SelectedFilters/SelectedFiltersProvider";
import styles from "./newarrival.module.css";
import Filter from "../../components/filter/Filter";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const { newArrivalSortedProducts } = useFilter();
  const { appliedFilters, removeAppliedFilters } = useSelectedFilter();

  const newProductsCount = newArrivalSortedProducts.length;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price || 0);
  };

  return (
    <section className={styles.page_shell}>
      <div className={styles.category_name}>New Arrivals</div>

      <div className={styles.section_div}>
        <div className={styles.filter__div}>
          <Filter showGenderFilter />
        </div>

        <div className={styles.main_wrapper}>
          <section className={styles.item_section}>
            <article className={styles.toolbar}>
              <div className={styles.products}>
                <div>
                  <span className={styles.products_count}>
                    {newProductsCount} Products
                  </span>
                 
                </div>
                <span className={styles.filter_icon}>
                  <FiFilter />
                </span>
              </div>

              <div className={styles.all_applied_filters}>
                <span className={styles.applied_filters_name}>Applied Filters</span>
                <div className={styles.filter_chip_group}>
                  {appliedFilters.length ? (
                    appliedFilters.map((filter) => {
                      return (
                        <button
                          type="button"
                          className={styles.applied_filters_black_div}
                          key={filter}
                          onClick={() => removeAppliedFilters(filter)}
                        >
                          <span>{filter}</span>
                          <AiFillCloseCircle />
                        </button>
                      );
                    })
                  ) : (
                    <span className={styles.empty_filters}>
                      No filters applied yet.
                    </span>
                  )}
                </div>
              </div>
            </article>

            <article className={styles.item_article}>
              {newArrivalSortedProducts?.map((item) => {
                const primaryImage = Array.isArray(item.imageUrl)
                  ? item.imageUrl[0]
                  : item.imageUrl;
                const productId = item._id || item.id;

                return (
                  <Link
                    className={styles.item_anchor}
                    to={`/products/${productId}`}
                    key={productId}
                  >
                    <div className={styles.single_item_div}>
                      <div className={styles.image_wrap}>
                        <img src={primaryImage} alt={item.name} />
                        <span className={styles.product_badge}>Just In</span>
                      </div>

                      <div className={styles.card_body}>
                        <div className={styles.card_header}>
                          <span className={styles.product_brand}>
                            {item.brand}
                          </span>
                          <span className={styles.product_gender}>
                            {item.gender}
                          </span>
                        </div>
                        <div className={styles.item_name}>{item.name}</div>
                        <div className={styles.product_meta}>
                          {(item.categories || []).slice(0, 2).map((category) => (
                            <span
                              key={`${productId}-${category}`}
                              className={styles.meta_pill}
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <div className={styles.price_row}>
                          <div className={styles.item_price}>
                            Rs. {formatPrice(item.productPricing?.originalPrice)}
                          </div>
                          <span className={styles.cta_text}>View details</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </article>
          </section>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
