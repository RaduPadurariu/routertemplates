import { useLoaderData } from "react-router-dom";
import CookingCategoryList from "../../components/Category/CookingCategoryList";
import CookingLoader from "../../components/Loader/CookingLoader";
import CookingMealSingle from "../../components/Meal/CookingMealSingle";
import CookingNotFound from "../../components/NotFound/CookingNotFound";
import styles from "./CookingMealDetails.module.scss";
import { CookingSingleFetchMeal, CookingSingleMeal } from "../../types/types";
import { useCookingMealContext } from "../../context/Meal/useCookingMealContext";

const CookingMealDetailsPage = () => {
  const { categories, categoryLoading, categoryError } =
    useCookingMealContext();

  const meal = useLoaderData() as CookingSingleFetchMeal[];

  const ingredientsArr: string[] = [];
  const measuresArr: string[] = [];
  let singleMeal: CookingSingleMeal = {
    id: "",
    title: "",
    category: "",
    area: "",
    thumbnail: "",
    instructions: "",
    source: "",
    tags: "",
    youtube: "",
    ingredients: [],
    measures: [],
  };

  if (meal && meal.length > 0) {
    const mealData = meal[0] as Record<string, string | undefined>;

    for (const props in mealData) {
      if (props.includes("strIngredient") && mealData[props]) {
        ingredientsArr.push(mealData[props]);
      }

      if (props.includes("strMeasure") && mealData[props]) {
        if (mealData[props] !== " ") {
          measuresArr.push(mealData[props]);
        }
      }
    }

    singleMeal = {
      id: meal[0]?.idMeal,
      title: meal[0]?.strMeal,
      category: meal[0]?.strCategory,
      area: meal[0]?.strArea,
      thumbnail: meal[0]?.strMealThumb,
      instructions: meal[0]?.strInstructions,
      source: meal[0]?.strSource,
      tags: meal[0]?.strTags,
      youtube: meal[0]?.strYoutube,
      ingredients: ingredientsArr,
      measures: measuresArr,
    };
  }

  return (
    <main className={styles["cooking-main-content"]}>
      {!singleMeal ? (
        <CookingLoader />
      ) : (
        <CookingMealSingle meal={singleMeal} />
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

export default CookingMealDetailsPage;
