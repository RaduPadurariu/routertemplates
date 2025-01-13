import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdFoodBank } from "react-icons/md";
import { Link } from "react-router-dom";

import styles from "./CookingHeader.module.scss";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useCookingSidebarContext } from "../../context/CookingSideBarContext";

const CookingNavbar = () => {
  const { openSidebar } = useCookingSidebarContext();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`${styles["cooking-navbar"]} ${
        scrolled ? styles["cooking-scrolled"] : ""
      }`}
    >
      <div className="cooking-container cooking-w-100">
        <div className={styles["cooking-navbar__content"]}>
          <div className={styles["cooking-brand-and-toggler"]}>
            <Link
              to="/cooking"
              className={styles["cooking-navbar-brand"]}
              onClick={scrollToTop}
            >
              <MdFoodBank />
              <span className={styles["cooking-navbar-brand__text"]}>
                FastEat.
              </span>
            </Link>
            <div className={styles["cooking-navbar__btns"]}>
              <ul
                className={isOpen ? styles["cooking-navbar__btns_openNav"] : ""}
              >
                <li>
                  <Link
                    to="/cooking"
                    onClick={() => {
                      scrollToTop();
                      toggleMenu();
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="#"
                    onClick={() => {
                      setOpenCategories(!openCategories);
                      openSidebar();
                    }}
                  >
                    <span>Categories</span>
                    <i>
                      {openCategories ? (
                        <TiArrowSortedUp />
                      ) : (
                        <TiArrowSortedDown />
                      )}
                    </i>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/cooking/myRecipes"
                    onClick={() => {
                      scrollToTop();
                      toggleMenu();
                    }}
                  >
                    Personal
                  </Link>
                </li>
                <li>
                  <Link to="/">Templates</Link>
                </li>
              </ul>
              <button
                type="button"
                className={styles["cooking-navbar__btns_show"]}
                onClick={toggleMenu}
              >
                <IoMdMenu
                  size={27}
                  className={styles["cooking-navbar__btns_show_icon"]}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CookingNavbar;
