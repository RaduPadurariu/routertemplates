import styles from "./CookingHeader.module.scss";
import CookingNavbar from "./CookingNavbar";
import CookingSearchForm from "./CookingSearchForm";

const CookingHeader = () => {
  return (
    <header className={styles["cooking-header"]}>
      <CookingNavbar />
      <div className={styles["cooking-header__content"]}>
        <CookingSearchForm />
        <h1>What are your favorite cuisines?</h1>
        <p>personalize your experience</p>
      </div>
    </header>
  );
};

export default CookingHeader;
