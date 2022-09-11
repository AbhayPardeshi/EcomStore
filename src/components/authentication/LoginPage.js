import React from "react";
import styles from "./authentication.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  return (
    <>
      <section className={styles.loginPage_section}>
        <img
          className={styles.main_image}
          src="./assets/images/signup_image.jpg"
        />

        <article className={styles.login_article}>
          <div className={styles.login_heading}>Login</div>
          <h3>Please enter your e-mail and password:</h3>
          <div className={styles.login_form}>
            <form action="#">
              <div className={styles.email_div}>
                <label htmlFor="">
                  Email <span className={styles.red}>*</span>
                </label>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div>
                <label htmlFor="">
                  Password <span className={styles.red}>*</span>
                </label>
                <div>
                  <input type="text" />
                </div>
              </div>
            </form>
          </div>

          <button className={styles.btn}>Log In</button>
          <div className={styles.signup_redirect}>
            <h4>
              Don't have an account ? <a href="#">Join The Family</a>
            </h4>
          </div>
        </article>
      </section>
    </>
  );
};

export default LoginPage;
