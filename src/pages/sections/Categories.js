import React from "react";
import styles from "./section.module.css";
import Filter from "../../components/filter/Filter";
import DisplayMultipleItems from "../../components/display-multipe-items/DisplayMultipleItems";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFilter } from "../../contexts/filter/FilterProvider";
import { applyCategoryFilter } from "../../utils";
import { useFetch } from "../../services";

export const Categories = () => {
  const params = useParams();
  const { filterDispatch } = useFilter();
  const { isLoading } = useFetch();
  useEffect(() => {
    const categoryName = params.id;
    applyCategoryFilter(filterDispatch, categoryName);
  }, [params]);
  return (
    <>
      <article className={styles.category_images}>
        <img src="https://i.shgcdn.com/9aeedb93-04ca-4d98-b06c-852db76f9d19/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
        <img src="https://i.shgcdn.com/9de3b359-52ff-4573-97c2-56a825153c05/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
        <img src="https://i.shgcdn.com/5552b0fd-40bd-4c2a-b6bf-6a0d19ee9692/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
        <img src="https://i.shgcdn.com/1ae861ab-c91d-47e1-94f3-395c7de40523/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
      </article>
      <div className={styles.category_name}>Men</div>
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
