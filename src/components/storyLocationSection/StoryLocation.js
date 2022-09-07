import React from "react";
import styles from "./story-location.module.css";
export const StoryLocation = () => {
  return (
    <section className={styles.storyLocation_section}>
      <div className={styles.story_div}>
        <p className={styles.heading}>SHOE PALACE | SINCE 1993</p>
        <p className={styles.sub_heading}> OUR STORY</p>
        <p>
          Shoe Palace prides itself on offering its customers the
          <strong> Ultimate Experience</strong> when it comes to their shoe and
          apparel shopping.
        </p>
        <p>
          Its locations, staff, and products are all the very best imaginable.
          Shoe Palace carries only elite shoe and apparel brands.
        </p>
        <p>
          Its chic and loyal clientele reflect that commitment to retail
          excellence.
        </p>
      </div>
      <div className={styles.location_div}>
        <button className={styles.btn}>OUR LOCATIONS</button>
      </div>
    </section>
  );
};
