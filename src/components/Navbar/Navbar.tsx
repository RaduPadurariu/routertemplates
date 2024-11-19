import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { navTemplates } from "../../data/portfolioData";

interface BurgerButtonProps {
  isOpen: boolean; //
  toggleMenu: () => void;
}
interface NavLinksProps {
  isOpen: boolean;
  toggleMenu: () => void;
  openTemplates: boolean;
  setOpenTemplates: (value: boolean) => void;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openTemplates, setOpenTemplates] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <header className="container">
        {/* Logo */}
        <Logo />
        {/* Navigation bar */}

        <NavLinks
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          openTemplates={openTemplates}
          setOpenTemplates={setOpenTemplates}
        />

        {/* Burger button */}
        <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </header>
    </nav>
  );
};

export default Navbar;

const Logo = () => (
  <div className={styles.logo}>
    <Link to="/">
      <img src="/images/logo.png" alt="Logo" />
    </Link>
  </div>
);

const NavLinks: React.FC<NavLinksProps> = ({
  isOpen,
  toggleMenu,
  openTemplates,
  setOpenTemplates,
}) => (
  <ul className={`${styles.navLinks} ${isOpen ? styles.sideMenu : ""}`}>
    <li className={styles.navLink} onClick={toggleMenu}>
      <Link to="/">Home</Link>
    </li>
    <li
      className={styles.navLink}
      onClick={() => setOpenTemplates(!openTemplates)}
    >
      <span>Templates</span>
      <i>{openTemplates ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</i>
      {openTemplates && <NavTemplates />}
    </li>
    <li className={styles.navLink} onClick={toggleMenu}>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
);

const NavTemplates = () => {
  return (
    <ul className={styles.navTemplates}>
      {navTemplates.map((el) => {
        return (
          <li key={el.id} className={styles.navTemplate}>
            <Link to={el.link}>{el.text}</Link>
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
