import { Link } from "react-router-dom";
import styles from "./WellnessHeader.module.scss";
import { wellnessNavLinks } from "../../../../data/wellnessData";
import { useState } from "react";

const WellnessHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className={styles["wellness-header"]}>
        <div className={styles["wellness-header__container"]}>
          <div className={styles["wellness-header__navbar"]}>
            <div className={styles["wellness-header__navbar_logo"]}>
              <Link to="/wellness">
                <img src="/images/Templates/Wellness/logo.png" alt="no-logo" />
              </Link>
            </div>
            <div className={styles["wellness-header__navbar_menu"]}>
              <ul className={`${isOpen ? styles.sideMenu : ""}`}>
                {wellnessNavLinks.map((navlink) => {
                  return (
                    <li key={navlink.id}>
                      <Link to={navlink.link}>{navlink.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles["wellness-header__navbar_tryBtn"]}>
              <Link to="#">Try for free</Link>
            </div>
            <div
              onClick={toggleMenu}
              className={styles["wellness-header__navbar_burgerBtn"]}
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default WellnessHeader;
