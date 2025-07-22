import { useLoaderData } from "react-router-dom";
import styles from "./CookingCategoryPage.module.scss";
import CookingMealList from "../../components/Meal/CookingMealList";
import { MealsLoaderData } from "../../types/types";
import { useCookingMealContext } from "../../context/Meal/useCookingMealContext";

const CookingCategoryPage = () => {
  const { meals, categoryName } = useLoaderData() as MealsLoaderData;

  const { categories } = useCookingMealContext();
  let catDescription = "";

  if (categories) {
    const category = categories.find(
      (cat) => cat?.strCategory === categoryName
    );
    if (category) {
      catDescription = category.strCategoryDescription || "";
    }
  }

  return (
    <main className={styles["cooking-categoryPage"]}>
      <div className="cooking-container">
        <div className={styles["cooking-categoryPage__desc"]}>
          <h2>{categoryName}</h2>
          <p>{catDescription}</p>
        </div>
      </div>
      {meals?.length ? <CookingMealList meals={meals} /> : null}
    </main>
  );
};

export default CookingCategoryPage;
