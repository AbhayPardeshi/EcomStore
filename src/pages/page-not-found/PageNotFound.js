import styles from "./pageNotFound.module.css";
export const PageNotFound = () => {
  return (
    <div className={styles.error__text}>
      <h1 className={styles.text_danger}>Error 404</h1>
      <h2 className={styles.text_warning}>Page Not Found!</h2>
      <h3>You are on wrong page address.</h3>
      <button className={styles.btn}>Go to Home</button>
    </div>
  );
};
