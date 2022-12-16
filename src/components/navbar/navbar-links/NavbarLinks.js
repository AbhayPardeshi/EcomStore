import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./navbar-links.module.css";
import { useFilter } from "../../../contexts/filter/FilterProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { useSidebar } from "../../../contexts/sidebar/SidebarProvider";

export const NavbarLinks = () => {
  const navigate = useNavigate();
  const { openSidebar, isSidebarOpen } = useSidebar();
  return (
    <>
      <div className="nav_links_div">
        <ul className={styles.nav_links}>
          <li>
            <NavLink to="/new" className={styles.link_btn}>
              new
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/men" className={styles.link_btn}>
              men
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/women" className={styles.link_btn}>
              women
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/kids" className={styles.link_btn}>
              kids
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/brands" className={styles.link_btn}>
              brands
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"} className={styles.link_btn}>
              releases
            </NavLink>
          </li>
          <li>
            <NavLink to={"#"} className={styles.link_btn}>
              sales
            </NavLink>
          </li>
        </ul>
        <span role="button" onClick={openSidebar} className={styles.nav_menu}>
          <AiOutlineMenu />
        </span>
      </div>
    </>
  );
};
