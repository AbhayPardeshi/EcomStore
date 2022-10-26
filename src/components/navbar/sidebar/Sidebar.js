import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../../../contexts/sidebar/SidebarProvider";
export const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useSidebar();
  return (
    <>
      <main className={styles.sidebar_overlay}>
        <aside
          className={`${isSidebarOpen ? styles.sidebar : styles.hide_sidebar}`}
        >
          <div className={styles.sidebar_header}>
            <h3>Shoe palace</h3>
            <button className={styles.close_sidebar} onClick={closeSidebar}>
              <AiOutlineClose />
            </button>
          </div>

          <div className={styles.sidebar_body}>
            <ul className={styles.sidebar_links}>
              <li className={styles.links}>
                <NavLink
                  to="/category/new"
                  onClick={closeSidebar}
                  className={styles.link_btn}
                >
                  new
                </NavLink>
              </li>
              <li className={styles.links}>
                <NavLink
                  to="/category/men"
                  onClick={closeSidebar}
                  className={styles.link_btn}
                >
                  men
                </NavLink>
              </li>
              <li className={styles.links}>
                <NavLink
                  to="/category/women"
                  onClick={closeSidebar}
                  className={styles.link_btn}
                >
                  women
                </NavLink>
              </li>
              <li className={styles.links}>
                <NavLink
                  to="/category/kids"
                  onClick={closeSidebar}
                  className={styles.link_btn}
                >
                  kids
                </NavLink>
              </li>
              <li className={styles.links}>
                <NavLink
                  to="/category/brands"
                  onClick={closeSidebar}
                  className={styles.link_btn}
                >
                  brands
                </NavLink>
              </li>
              <li className={styles.links}>
                <NavLink
                  to={"#"}
                  onClick={closeSidebar}
                  className={styles.link_btn}
                >
                  releases
                </NavLink>
              </li>
              <li className={styles.links}>
                <NavLink
                  to={"#"}
                  onClick={closeSidebar}
                  className={styles.link_btn}
                >
                  sales
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.sidebar_footer_div}>
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
        </aside>
      </main>
    </>
  );
};
