import { NavLink } from "react-router-dom";
import EducationalHead from "./EducationalHead";
import styles from "./EducationalHeader.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { educationalNavLinks } from "../../../../../data/educationalData";

const EducationalHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // dispatch(getCartTotal);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  return (
    <>
      <EducationalHead />
      <header className={styles["educational-header"]}>
        <nav
          className={`${styles["educational-header__nav"]} ${
            isSticky ? styles["educational-header__nav__isSticky"] : ""
          }`}
        >
          <ul
            className={`${styles["educational-header__nav__links"]} ${
              isOpen ? styles["educational-header__nav__mobile"] : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {educationalNavLinks.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink to={link.link}>{link.text}</NavLink>
                </li>
              );
            })}
          </ul>
          <div className={styles["educational-header__nav__start"]}>
            <div
              className={styles["educational-header__nav__start-certificate"]}
            >
              GET CERTIFICATE
            </div>
          </div>
          <button
            className={styles["educational-header__nav__toggle"]}
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </nav>
      </header>
    </>
  );
};

export default EducationalHeader;
