import React from "react";
import shoeData from "./shoeData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./recommended.module.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1124, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 550, settings: { slidesToShow: 2 } },
    { breakpoint: 0, settings: { slidesToShow: 1 } },
  ],
};

export const ImageContainer = () => {
  return (
    <>
      <Slider {...settings}>
        {shoeData.map((shoe) => {
          return (
            <div
              className={styles.recommendedItem_section_singleItem}
              key={shoe.id}
            >
              <article>
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
      </Slider>
    </>
  );
};
