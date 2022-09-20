import React from "react";
import shoeData from "./shoeData";
import Carousel from "react-elastic-carousel";
import styles from "./recommended.module.css";

const breakPoints = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 550,
    itemsToShow: 2,
  },
  {
    width: 768,
    itemsToShow: 3,
  },
  {
    width: 1124,
    itemsToShow: 4,
  },
];

export const ImageContainer = () => {
  console.log(shoeData);
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        {shoeData.map((shoe) => {
          return (
            <div className={styles.recommendedItem_section_singleItem}>
              <article key={shoe.id}>
                <a href="#">
                  <img src={shoe.image} alt={shoe.name} />
                  <div className={styles.shoe_info}>
                    <div>
                      <p className={styles.shoe_name}>
                        {`${shoe.name.substring(0, 20)}...`}
                      </p>
                      <p className={styles.pale_color_heading}>{shoe.type}</p>
                      <p className={styles.pale_color_heading}>
                        {shoe.category}
                      </p>
                    </div>
                    <div className={styles.price}>
                      <p>${shoe.price}.00</p>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};
