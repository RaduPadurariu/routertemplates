import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { navTemplates } from "../../data/portfolioData";

interface ScrollToTop {
  scrollToTop: () => void;
}
interface BurgerButtonProps {
  isOpen: boolean; //
  toggleMenu: () => void;
}
interface NavLinksProps extends ScrollToTop {
  isOpen: boolean;
  toggleMenu: () => void;
  openTemplates: boolean;
  setOpenTemplates: (value: boolean) => void;
  scrollToContact: () => void;
}

interface NavbarProps {
  scrollToContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openTemplates, setOpenTemplates] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={styles.navbar}>
      <header className="container">
        {/* Logo */}
        <Logo scrollToTop={scrollToTop} />
        {/* Navigation bar */}

        <NavLinks
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          openTemplates={openTemplates}
          setOpenTemplates={setOpenTemplates}
          scrollToContact={scrollToContact}
          scrollToTop={scrollToTop}
        />

        {/* Burger button */}
        <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </header>
    </nav>
  );
};

export default Navbar;

const Logo: React.FC<ScrollToTop> = ({ scrollToTop }) => {
  return (
    <div className={styles.logo}>
      <Link to="/" onClick={scrollToTop}>
        <img src="/images/logo.png" alt="Logo" />
      </Link>
    </div>
  );
};

const NavLinks: React.FC<NavLinksProps> = ({
  isOpen,
  toggleMenu,
  openTemplates,
  setOpenTemplates,
  scrollToContact,
  scrollToTop,
}) => {
  return (
    <ul className={`${styles.navLinks} ${isOpen ? styles.sideMenu : ""}`}>
      <li className={styles.navLink} onClick={toggleMenu}>
        <Link to="/" onClick={scrollToTop}>
          Home
        </Link>
      </li>
      <li
        className={styles.navLink}
        onClick={() => setOpenTemplates(!openTemplates)}
      >
        <span>Templates</span>
        <i>{openTemplates ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</i>
        {openTemplates && <NavTemplates />}
      </li>
      <li
        className={styles.navLink}
        onClick={() => {
          toggleMenu();
          scrollToContact();
        }}
      >
        <Link to="">Contact</Link>
      </li>
    </ul>
  );
};

const NavTemplates = () => {
  return (
    <ul className={styles.navTemplates}>
      {navTemplates.map((el) => {
        return (
          <li key={el.id} className={styles.navTemplate}>
            <Link to={el.link}>
              <span>{el.text}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, toggleMenu }) => (
  <button
    onClick={toggleMenu}
    className={styles.burgerBtn}
    aria-expanded={isOpen}
  >
    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
  </button>
);
