import React from "react";
import styles from "./authentication.module.css";

const SignupPage = () => {
  return (
    <>
      <section className={styles.signupPage_section}>
        <img
          className={styles.main_image}
          src="./assets/images/signup_image.jpg"
        />
        <article className={styles.signup_article}>
          <div className={styles.signup_heading}>
            Register & Join the Family
          </div>
          <div className={styles.signup_form}>
            <form action="#">
              <div className={styles.firstName_div}>
                <label htmlFor="">
                  First Name
                  <span className={styles.red}>*</span>
                </label>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.secondName_div}>
                <label htmlFor="">
                  Last Name
                  <span className={styles.red}>*</span>
                </label>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.email_div}>
                <label htmlFor="">
                  Email <span className={styles.red}>*</span>
                </label>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.password_div}>
                <label htmlFor="">
                  Password <span className={styles.red}>*</span>
                </label>
                <div>
                  <input type="text" />
                </div>
              </div>
            </form>
          </div>

          <button className={styles.btn}>Submit</button>
          <button className={styles.cancel_btn}>cancel</button>
        </article>
      </section>
    </>
  );
};

export default SignupPage;
