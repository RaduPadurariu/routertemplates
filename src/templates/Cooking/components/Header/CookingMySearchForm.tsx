import { BsSearch } from "react-icons/bs";
import styles from "./CookingHeader.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myRecipesList } from "../../../../data/cookingData";
import { useCookingMyRecipesContext } from "../../context/ContextMyRecipesContext";

const CookingMySearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const { setFilterMeals } = useCookingMyRecipesContext();

  useEffect(() => {
    // Debouncing
    const delaySearch = setTimeout(() => {
      setFilterMeals(
        myRecipesList.filter((recipe) => {
          return (
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
          );
        })
      );
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, myRecipesList]);

  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const searchMenu = e.target.value.toLowerCase();
    setSearchTerm(searchMenu);
  };

  const handleSearchResult = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim().length === 0) {
      console.log(searchTerm.trim());
    } else {
      navigate(`/cooking/myRecipes`);
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
