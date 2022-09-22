import React from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/auth/AuthProvider";
import styles from "./authentication.module.css";

const SignupPage = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signupHandler } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    signupHandler({ firstName, lastName, email, password });
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };
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
          <form onSubmit={submitHandler}>
            <div className={styles.signup_form}>
              <div className={styles.firstName_div}>
                <label htmlFor="">
                  First Name
                  <span className={styles.red}>*</span>
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter firstname."
                    name="firstname"
                    value={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.secondName_div}>
                <label htmlFor="">
                  Last Name
                  <span className={styles.red}>*</span>
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter lastname."
                    name="lastname"
                    value={lastName}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.email_div}>
                <label htmlFor="">
                  Email <span className={styles.red}>*</span>
                </label>
                <div>
                  <input
                    type="email"
                    placeholder="Enter email."
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.password_div}>
                <label htmlFor="">
                  Password <span className={styles.red}>*</span>
                </label>
                <div>
                  <input
                    type="password"
                    placeholder="Enter password."
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className={styles.btn}>
              Submit
            </button>
            <button className={styles.cancel_btn}>cancel</button>
          </form>
        </article>
      </section>
    </>
  );
};

export default SignupPage;
