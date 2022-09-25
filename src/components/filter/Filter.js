import { React } from "react";
import styles from "./filter.module.css";
import { data } from "./filterAttributes";
import { IoIosArrowDropdown } from "react-icons/io";
import { useFilter } from "../../contexts/filter/FilterProvider";
import { useProducts } from "../../contexts/products/ProductProvider";
import { Link } from "react-router-dom";
const Filter = () => {
  const { filterDispatch, filterState } = useFilter();
  const { filters } = useProducts();

  const uniqueBrands = Array.from(new Set(filters.brands));
  const uniqueColors = Array.from(new Set(filters.productColors));

  const selectFilterHandler = (e) => {
    let value = e.target.value;
    if (filterState.brandName.includes(value.toUpperCase())) {
      filterDispatch({ type: "REMOVE_BRAND", payload: value.toUpperCase() });
    } else {
      filterDispatch({ type: "ADD_BRAND", payload: value.toUpperCase() });
    }

    if (filterState.productColors.includes(value.toUpperCase())) {
      filterDispatch({ type: "REMOVE_COLOR", payload: value.toUpperCase() });
    } else {
      filterDispatch({ type: "ADD_COLOR", payload: value.toUpperCase() });
    }

    if (filterState.productPriceRanges.includes(value)) {
      filterDispatch({ type: "REMOVE_PRICE_RANGE", payload: value });
    } else {
      filterDispatch({ type: "ADD_PRICE_RANGE", payload: value });
    }
  };
  const checkIfApplied = (filterType, name) => {
    return filterState[filterType]?.includes(name.toUpperCase());
  };

  const checkIfPriceApplied = (price) => {
    return filterState.productPriceRanges?.includes(`${price[0]},${price[1]}`);
  };
  const clearFilterHandler = () => {
    filterDispatch({ type: "CLEAR_ALL_FILTERS" });
  };

  const getArrayFromString = (str) => {
    const str1 = str.split(" - ");
    const arr1 = str1.map((value) => value.slice(1));
    return arr1.map((value) => Number(value));
  };

  return (
    <>
      <aside className={styles.filter_section}>
        <article className={styles.filter_article}>
          <div className={styles.main_header_div}>
            <p className={styles.main_header}>Filters</p>
            <p
              role={"button"}
              onClick={clearFilterHandler}
              className={styles.main_clear}
            >
              Clear All
            </p>
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
              {uniqueBrands?.map((item, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    value={item}
                    onClick={(e) => selectFilterHandler(e)}
                    className={`${
                      checkIfApplied("brandName", item) ? styles.change_bg : ""
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
              {uniqueColors?.map((item, index) => {
                return (
                  <>
                    <button
                      key={index}
                      type="button"
                      value={item}
                      onClick={(e) => selectFilterHandler(e)}
                      className={`${
                        checkIfApplied("productColors", item)
                          ? styles.change_bg
                          : ""
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
                <Link to={`/category/${item}`}>
                  <button
                    key={index}
                    type="button"
                    value={item}
                    onClick={(e) => selectFilterHandler(e)}
                    className={`${
                      filterState.categoryName === item.toUpperCase()
                        ? styles.change_bg
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                </Link>
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
                  value={getArrayFromString(item)}
                  onClick={(e) => selectFilterHandler(e)}
                  className={`${
                    checkIfPriceApplied(
                      item.split(" - ").map((x) => x.slice(1))
                    )
                      ? styles.change_bg
                      : ""
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
                    checkIfApplied("productSize", item) ? styles.change_bg : ""
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
