import React from "react";
import styles from "./category.module.css";
import Filter from "../../components/filter/Filter";
import DisplayMultipleItems from "../../components/display-multipe-items/DisplayMultipleItems";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFilter } from "../../contexts/filter/FilterProvider";
import { applyCategoryFilter } from "../../utils";
import { useFetch } from "../../services";
import { data } from "./CategoryImages";

export const Categories = () => {
  const params = useParams();
  const { filterDispatch } = useFilter();
  const categoryName = params.id;
  useEffect(() => {
    applyCategoryFilter(filterDispatch, categoryName);
  }, [params]);
  const filteredData = data.filter(
    (item) => item.category === categoryName.toUpperCase()
  );

  return (
    <>
      <article className={styles.category_images}>
        {filteredData.map((item) => {
          return <img src={item.imageUrl} alt={item.name}></img>;
        })}
      </article>
      <div className={styles.category_name}>{categoryName}</div>
      <div className={styles.section_div}>
        <div className={styles.filter__div}>
          <Filter />
        </div>

        <div className={styles.main_wrapper}>
          <DisplayMultipleItems />
        </div>
      </div>
    </>
  );
};
