import { useLocation } from "react-router-dom";
import styles from "./CookingHeader.module.scss";
import CookingNavbar from "./CookingNavbar";
import CookingSearchForm from "./CookingSearchForm";
import CookingMySearchForm from "./CookingMySearchForm";

const CookingHeader = () => {
  const location = useLocation();

  return (
    <header className={styles["cooking-header"]}>
      <CookingNavbar />

      {location.pathname.includes("/cooking/myRecipes") ? (
        <div
          className={`${styles["cooking-header__content"]} ${styles["cooking-header__myImage"]}`}
        >
          <CookingMySearchForm />
          <h1>Philips Multicooker</h1>
          <p>my favorite recipes</p>
        </div>
      ) : (
        <div
          className={`${styles["cooking-header__content"]} ${styles["cooking-header__image"]}`}
        >
          <CookingSearchForm />
          <h1>What are your favorite cuisines?</h1>
          <p>personalize your experience</p>
        </div>
      )}
    </header>
  );
};

export default CookingHeader;
