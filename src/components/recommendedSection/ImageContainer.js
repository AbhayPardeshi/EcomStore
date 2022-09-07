import React from "react";
import shoeData from "./shoeData";
import styles from "./recommended.module.css";

export const ImageContainer = () => {
  console.log(shoeData);
  return (
    <>
      {shoeData.map((shoe) => {
        return (
          <article key={shoe.id}>
            <a href="#">
              <img src={shoe.image} alt={shoe.name} />
              <div className={styles.shoe_info}>
                <div>
                  <p className={styles.shoe_name}>
                    {`${shoe.name.substring(0, 20)}...`}
                  </p>
                  <p className={styles.pale_color_heading}>{shoe.type}</p>
                  <p className={styles.pale_color_heading}>{shoe.category}</p>
                </div>
                <div className={styles.price}>
                  <p>${shoe.price}.00</p>
                </div>
              </div>
            </a>
          </article>
        );
      })}
    </>
  );
};
