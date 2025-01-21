import { useLoaderData } from "react-router-dom";
import CookingCategoryList from "../../components/Category/CookingCategoryList";
import CookingLoader from "../../components/Loader/CookingLoader";
import CookingMealList from "../../components/Meal/CookingMealList";
import CookingNotFound from "../../components/NotFound/CookingNotFound";
import { useCookingMealContext } from "../../context/CookingMealContext";
import styles from "./CookingHomePage.module.scss";
import { MealsLoaderBySearch } from "../../types/types";

const CookingHomeSearch = () => {
  const { categories, categoryLoading, categoryError } =
    useCookingMealContext();

  const { searchedMeals } = useLoaderData() as MealsLoaderBySearch;
  return (
    <main className={styles["cooking-main-content"]}>
      {searchedMeals.length > 0 ? (
        <CookingMealList meals={searchedMeals} />
      ) : (
        <p className={styles["cooking-homeError"]}>
          No meals found for your search. Please try again with different
          keywords.
        </p>
      )}

      {categoryLoading ? (
        <CookingLoader />
      ) : categoryError ? (
        <CookingNotFound />
      ) : (
        <CookingCategoryList categories={categories} />
      )}
    </main>
  );
};

export default CookingHomeSearch;
