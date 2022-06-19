import React from "react";
import styles from "./footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footer_sec}>
      <div className={styles.footer_div1}>
        <ul>
          <li className={styles.footer_link}>
            <a href="#">About Us</a>
          </li>
          <li className={styles.footer_link}>
            <a href="#">Contact Us</a>
          </li>
          <li className={styles.footer_link}>
            <a href="#">Careers</a>
          </li>
          <li className={styles.footer_link}>
            <a href="#">Shipping</a>
          </li>
          <li className={styles.footer_link}>
            <a href="#">Returns and Exchanges</a>
          </li>
          <li className={styles.footer_link}>
            <a href="#">AfterPay</a>
          </li>
          <li className={styles.footer_link}>
            <a href="#">Terms and Conditions</a>
          </li>
          <li className={styles.footer_link}>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <div className={styles.footer_payment_div}>
          <img src="./assets/images/icons8-afterpay.svg" alt="after-pay" />
          <img
            src="./assets/images/icons8-american-express.svg"
            alt="american-express"
          />
          <img src="./assets/images/icons8-apple-pay.svg" alt="apple-pay" />
          <img src="./assets/images/icons8-mastercard.svg" alt="mastercard" />
          <img src="./assets/images/icons8-paypal.svg" alt="paypal" />
          <img src="./assets/images/icons8-venmo.svg" alt="venmo" />
          <img src="./assets/images/icons8-visa.svg" alt="visa" />
          <p>© 2022, Shoe Palace</p>
        </div>
      </div>

      <div className={styles.footer_div2}>
        <p className={styles.footer_subheading}>
          <strong>Shoe Palace</strong>
        </p>
        <p>
          Born in San Jose, CA.,
          <br />
          Shoe Palace has been family owned
          <br />
          and operated since 1993.
        </p>
      </div>

      <div className={styles.footer_div3}>
        <div>
          <p className={styles.footer_subheading}>
            <strong>Join the Family</strong>
          </p>
          <p>
            Sign up to get sneaker news,
            <br />
            exclusive deals, and content.
          </p>
          <p>
            <a href="#">Subscribe or Update Profile</a>
          </p>
        </div>
        <div className={styles.footer_socials}>
          <a href="#">
            <img src="./assets/images/icons8-twitter.svg" alt="twitter" />
          </a>

          <a href="#">
            <img src="./assets/images/icons8-facebook.svg" alt="facebook" />
          </a>

          <a href="#">
            <img src="./assets/images/icons8-instagram.svg" alt="instagram" />
          </a>

          <a href="#">
            <img
              src="./assets/images/icons8-pinterest (1).svg"
              alt="pinterest"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
