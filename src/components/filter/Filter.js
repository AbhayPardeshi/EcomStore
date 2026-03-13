import { React } from "react";
import styles from "./filter.module.css";
import { data } from "./filterAttributes";
import { IoIosArrowDropdown } from "react-icons/io";
import { useFilter } from "../../contexts/filter/FilterProvider";
import { useProducts } from "../../contexts/products/ProductProvider";
import { useSelectedFilter } from "../../contexts/SelectedFilters/SelectedFiltersProvider";

const Filter = ({ showGenderFilter = false }) => {
  const { filterDispatch, filterState } = useFilter();
  const { filters } = useProducts();

  const uniqueBrands = Array.from(new Set(filters.brands));
  const uniqueColors = Array.from(new Set(filters.productColors));
  const activeFiltersCount =
    filterState.brandName.length +
    filterState.productColors.length +
    filterState.productPriceRanges.length +
    (showGenderFilter && filterState.selectedGender ? 1 : 0);

  const { addAppliedFilters, removeAppliedFilters, removeAllAppliedFilters } =
    useSelectedFilter();

  const toggleAppliedFilter = (isApplied, value) => {
    if (isApplied) {
      removeAppliedFilters(value);
      return;
    }

    addAppliedFilters(value);
  };

  const handleBrandFilter = (value) => {
    const formattedValue = value.toUpperCase();
    const isApplied = filterState.brandName.includes(formattedValue);

    toggleAppliedFilter(isApplied, value);
    
    if (filterState.brandName.includes(value.toUpperCase())) {
      filterDispatch({ type: "REMOVE_BRAND", payload: formattedValue });
    } else {
      filterDispatch({ type: "ADD_BRAND", payload: formattedValue });
    }
  };

  const handleColorFilter = (value) => {
    const formattedValue = value.toUpperCase();
    const isApplied = filterState.productColors.includes(formattedValue);

    toggleAppliedFilter(isApplied, value);
    if (isApplied) {
      filterDispatch({ type: "REMOVE_COLOR", payload: formattedValue });
    } else {
      filterDispatch({ type: "ADD_COLOR", payload: formattedValue });
    }
  };

  const handlePriceFilter = (value) => {
    const isApplied = filterState.productPriceRanges.includes(value);

    toggleAppliedFilter(isApplied, value);
    if (isApplied) {
      filterDispatch({ type: "REMOVE_PRICE_RANGE", payload: value });
    } else {
      filterDispatch({ type: "ADD_PRICE_RANGE", payload: value });
    }
  };

  const handleGenderFilter = (value) => {
    const formattedValue = value.toUpperCase();
    const isApplied = filterState.selectedGender === formattedValue;

    if (isApplied) {
      filterDispatch({ type: "CLEAR_GENDER" });
      removeAppliedFilters(value);
      return;
    }

    if (filterState.selectedGender) {
      removeAppliedFilters(filterState.selectedGender.toLowerCase());
    }

    filterDispatch({ type: "SET_GENDER", payload: formattedValue });
    addAppliedFilters(value);
  };

  const checkIfApplied = (filterType, name) => {
    return filterState[filterType]?.includes(name.toUpperCase());
  };

  const checkIfPriceApplied = (price) => {
    return filterState.productPriceRanges?.includes(`${price[0]},${price[1]}`);
  };
  const clearFilterHandler = () => {
    filterDispatch({ type: "CLEAR_ALL_FILTERS" });
    removeAllAppliedFilters();
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
            <div>
              <p className={styles.main_eyebrow}>Refine Results</p>
              <p className={styles.main_header}>Filters</p>
            
            </div>
            <button
              type="button"
              onClick={clearFilterHandler}
              className={styles.main_clear}
            >
              Clear All
            </button>
          </div>

          <div className={styles.filter_status}>
            <span>{activeFiltersCount} active</span>
            <span>{filters.brands.length} brands available</span>
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

            <div className={styles.filter_options}>
              {uniqueBrands?.map((item, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    value={item}
                    onClick={() => handleBrandFilter(item)}
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

            <div className={styles.filter_options}>
              {uniqueColors?.map((item, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    value={item}
                    onClick={() => handleColorFilter(item)}
                    className={`${
                      checkIfApplied("productColors", item)
                        ? styles.change_bg
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {showGenderFilter ? (
            <div className={styles.filters}>
              <div className={styles.filters_header_div}>
                <p className={styles.filters_header}>Gender</p>
                <button className={styles.dropdown}>
                  <IoIosArrowDropdown />
                </button>
              </div>
              <div className={styles.filter_options}>
                {data.gender.map((item, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      value={item}
                      onClick={() => handleGenderFilter(item)}
                      className={`${
                        filterState.selectedGender === item.toUpperCase()
                          ? styles.change_bg
                          : ""
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

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
            <div className={styles.filter_options}>
              {data.price.map((item, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    value={getArrayFromString(item)}
                    onClick={() =>
                      handlePriceFilter(`${getArrayFromString(item)}`)
                    }
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
            <div className={styles.filter_options}>
              {data.sizes.menSize.map((item, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    value={item}
                    className={`${
                      checkIfApplied("productSize", item) ? styles.change_bg : ""
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </article>
      </aside>
    </>
  );
};

export default Filter;
