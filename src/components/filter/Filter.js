import { React, useState } from "react";
import styles from "./filter.module.css";
import { data } from "./filterAttributes";
import { IoIosArrowDropdown } from "react-icons/io";

const Filter = () => {
  const [filterValue, setFilterValue] = useState([]);

  const selectFilterHandler = (e) => {
    let value = e.target.value;

    setFilterValue((previous) =>
      previous.includes(value)
        ? previous.filter((val) => val !== value)
        : [...previous, value]
    );
  };

  return (
    <>
      <aside className={styles.filter_section}>
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
                // onClick={(e) => setFilterDropdown(e)}
              >
                <IoIosArrowDropdown />
              </button>
            </div>

            <div>
              {data.brands.map((item, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    value={item}
                    onClick={(e) => selectFilterHandler(e)}
                    className={`${
                      filterValue.includes(item) ? styles.change_bg : ""
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.filters}>
            <div className={styles.filters_header_div}>
              <p className={styles.filters_header}>Color</p>
              <button
                className={styles.dropdown}
                value="color"
                // onClick={(e) => setFilterDropdown(e)}
              >
                <IoIosArrowDropdown />
              </button>
            </div>

            <div>
              {data.color.map((item, index) => {
                return (
                  <>
                    <button
                      key={index}
                      type="button"
                      value={item}
                      onClick={(e) => selectFilterHandler(e)}
                      className={`${
                        filterValue.includes(item) ? styles.change_bg : ""
                      }`}
                    >
                      {item}
                    </button>
                  </>
                );
              })}
            </div>
          </div>

          <div className={styles.filters}>
            <div className={styles.filters_header_div}>
              <p className={styles.filters_header}>Gender</p>
              <button
                className={styles.dropdown}
                // onClick={(e) => setIsActive(!isActive)}
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
                  onClick={(e) => selectFilterHandler(e)}
                  className={`${
                    filterValue.includes(item) ? styles.change_bg : ""
                  }`}
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
                // onClick={(e) => setIsActive(!isActive)}
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
                  onClick={(e) => selectFilterHandler(e)}
                  className={`${
                    filterValue.includes(item) ? styles.change_bg : ""
                  }`}
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
                // onClick={(e) => setIsActive(!isActive)}
              >
                <IoIosArrowDropdown />
              </button>
            </div>
            {data.sizes.menSize.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  value={item}
                  onClick={(e) => selectFilterHandler(e)}
                  className={`${
                    filterValue.includes(item) ? styles.change_bg : ""
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </article>
      </aside>
    </>
  );
};

export default Filter;
