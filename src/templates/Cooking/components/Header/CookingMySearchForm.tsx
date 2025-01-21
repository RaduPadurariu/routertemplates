import { BsSearch } from "react-icons/bs";
import styles from "./CookingHeader.module.scss";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const CookingMySearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    let value = e.target.value.trimStart();
    value = value.replace(/[^a-zA-Z0-9\s]/g, "");

    if (value.length === 0) {
      setSearchTerm("");
    } else {
      setSearchTerm(value);
    }
  };

  const handleSearchResult = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim().length === 0) {
      console.log(searchTerm.trim());
    } else {
      navigate(`/cooking/meals/${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <form
      className={styles["cooking-search-form"]}
      onSubmit={(e) => handleSearchResult(e)}
    >
      <input
        type="text"
        className={styles["cooking-search-form__input"]}
        placeholder="Search recipes here ..."
        onChange={(e) => handleSearchTerm(e)}
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

export default CookingMySearchForm;
