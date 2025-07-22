import CookingCategoryList from "../../components/Category/CookingCategoryList";
import CookingLoader from "../../components/Loader/CookingLoader";
import CookingNotFound from "../../components/NotFound/CookingNotFound";
import { useCookingMealContext } from "../../context/Meal/useCookingMealContext";
import styles from "./CookingHomePage.module.scss";

const CookingHomePage = () => {
  const { categories, categoryLoading, categoryError } =
    useCookingMealContext();
  return (
    <main className={styles["cooking-main-content"]}>
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

export default CookingHomePage;
