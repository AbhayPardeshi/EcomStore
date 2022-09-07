import { React, useState } from "react";
// import { cardItems } from "./CardItemData";
import styles from "./displayItem.module.css";

const DisplayItem = () => {
  const [shoeSize, setSize] = useState(null);
  const sizeChangeHandler = (e) => {
    setSize(e.target.value);
  };
  return (
    <>
      <section className={styles.item_section}>
        <div className={styles.item_image_div}>
          <img src="./assets/images/recom1.webp" alt="name" />
        </div>
        <div className={styles.item_details_div}>
          <p className={styles.brand}>AIR JORDAN</p>
          <p className={styles.type}>MENS LIFESTYLE SHOES</p>
          <p className={styles.name}>1 MID GREEN YELLOW</p>
          <p className={styles.price}>$135.00</p>
          <div className={styles.shoe_size}>
            {[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11].map((size) => {
              return (
                <button
                  type="button"
                  value={size}
                  onClick={(e) => sizeChangeHandler(e)}
                  className={`${shoeSize == size ? styles.change_bg : ""}`}
                >
                  {size}
                </button>
              );
            })}
          </div>
          <button className={styles.btn}>ADD TO CART</button>
        </div>
      </section>
      ;
    </>
  );
};

export default DisplayItem;
