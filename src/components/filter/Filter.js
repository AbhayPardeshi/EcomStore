import { React, useState } from "react";
import styles from "./filter.module.css";
import { data } from "./filterAttributes";
import { IoIosArrowDropdown } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";

const Filter = () => {
  const [filterValue, setFilterValue] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const sizeChangeHandler = (e) => {
    setFilterValue(e.target.value);
  };
  const setFilterDropdown = (e) => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section className={styles.filter_section}>
        <article className={styles.filter_article}>
          <div className={styles.main_header_div}>
            <p className={styles.main_header}>Filters</p>
            <p className={styles.main_clear}>Clear All</p>
          </div>

          <div className={styles.filters}>
            <div className={styles.filters_header_div}>
              <p className={styles.filters_header}>Brands</p>
              <button
                className={styles.dropdown}
                value="brands"
                onClick={(e) => setFilterDropdown(e.target.value)}
              >
                <IoIosArrowDropdown />
              </button>
            </div>

            {isActive && (
              <div>
                {data.brands.map((item, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      value={item}
                      onClick={(e) => sizeChangeHandler(e)}
                      className={`${
                        filterValue === item ? styles.change_bg : ""
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className={styles.filters}>
            <div className={styles.filters_header_div}>
              <p className={styles.filters_header}>Color</p>
              <button
                className={styles.dropdown}
                value="color"
                onClick={(e) => setFilterDropdown(e.target.value)}
              >
                <IoIosArrowDropdown />
              </button>
            </div>

            {isActive && (
              <div>
                {data.color.map((item, index) => {
                  return (
                    <>
                      <span
                        className={styles.filter_color}
                        style={{
                          backgroundColor: `${item}`,
                          width: "1rem",
                          aspectRatio: "1",
                          marginRight: "1rem",
                          borderRadius: "50%",
                        }}
                      ></span>
                      <button
                        key={index}
                        type="button"
                        value={item}
                        onClick={(e) => sizeChangeHandler(e)}
                        className={`${
                          filterValue === item ? styles.change_bg : ""
                        }`}
                      >
                        {item}
                      </button>
                    </>
                  );
                })}
              </div>
            )}
          </div>

          <div className={styles.filters}>
            <div className={styles.filters_header_div}>
              <p className={styles.filters_header}>Gender</p>
              <button
                className={styles.dropdown}
                onClick={(e) => setIsActive(!isActive)}
              >
                <IoIosArrowDropdown />
              </button>
            </div>
            {data.gender.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  value={item}
                  onClick={(e) => sizeChangeHandler(e)}
                  className={`${filterValue === item ? styles.change_bg : ""}`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className={styles.filters}>
            <div className={styles.filters_header_div}>
              <p className={styles.filters_header}>Price</p>
              <button
                className={styles.dropdown}
                onClick={(e) => setIsActive(!isActive)}
              >
                <IoIosArrowDropdown />
              </button>
            </div>
            {data.price.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  value={item}
                  onClick={(e) => sizeChangeHandler(e)}
                  className={`${filterValue === item ? styles.change_bg : ""}`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className={styles.filters}>
            <div className={styles.filters_header_div}>
              <p className={styles.filters_header}>Size</p>
              <button
                className={styles.dropdown}
                onClick={(e) => setIsActive(!isActive)}
              >
                <IoIosArrowDropdown />
              </button>
            </div>
            {data.sizes.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  value={item}
                  onClick={(e) => sizeChangeHandler(e)}
                  className={`${filterValue === item ? styles.change_bg : ""}`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </article>

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
      </section>
    </>
  );
};

export default Filter;
