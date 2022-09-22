import React, { useState } from "react";
import styles from "./authentication.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth/AuthProvider";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginHandler } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler({ email, password });
    setEmail("");
    setPassword("");
  };

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
          <form onSubmit={submitHandler}>
            <div className={styles.login_form}>
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
              <div>
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
              Log In
            </button>
          </form>
          <div className={styles.signup_redirect}>
            <h4>
              Don't have an account ? <Link to="/signup">Join The Family</Link>
            </h4>
          </div>
        </article>
      </section>
    </>
  );
};

export default LoginPage;
