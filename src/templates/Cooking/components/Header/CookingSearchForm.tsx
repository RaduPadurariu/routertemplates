import { BsSearch } from "react-icons/bs";
import styles from "./CookingHeader.module.scss";

const CookingSearchForm = () => {
  return (
    <form
      className={styles["cooking-search-form"]}
      // onSubmit={(e) => handleSearchResult(e)}
    >
      <input
        type="text"
        className={styles["cooking-search-form__input"]}
        placeholder="Search recipes here ..."
        // onChange={(e) => handleSearchTerm(e)}
      />
      <button type="submit" className={styles["cooking-search-form__button"]}>
        <BsSearch
          className={styles["cooking-search-form__button_icon"]}
          size={20}
        />
      </button>
    </form>
  );
};

export default CookingSearchForm;
