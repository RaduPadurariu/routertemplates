import { useState } from "react";
import styles from "./FitnessNavbar.module.scss";
import { Link } from "react-scroll";
import { fitnessNavLinks } from "../../../../data/fitnessData";
import { NavLink } from "react-router-dom";

const FitnessNavbar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`${styles["fitness-nav"]} ${
        nav ? styles["fitness-nav__active"] : ""
      }`}
    >
      <Link to="/fitness" className={styles["fitness-nav__logo"]}>
        <img src="/images/Templates/Fitness/logo.png" alt="no-logo" />
      </Link>

      <input
        type="checkbox"
        className={styles["fitness-nav__menuBtn"]}
        id="fitness-nav__menuBtn"
      />
      <label
        htmlFor="fitness-nav__menuBtn"
        className={styles["fitness-nav__menuIcon"]}
      >
        <span className={styles["fitness-nav__menuIcon_navIcon"]}></span>
      </label>
      <ul className={styles["fitness-nav__menu"]}>
        {fitnessNavLinks.map((navLink) => {
          return (
            <li key={navLink.id}>
              <Link to={navLink.link}>{navLink.text}</Link>
            </li>
          );
        })}
        <li>
          <NavLink to="/">Templates</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default FitnessNavbar;
