import { useParams } from "react-router-dom";
import { CookingSingleMeal } from "../../types/types";
import CookingMySingleMeal from "./CookingMySingleMeal";

import { myRecipesList } from "../../../../data/cookingData";

const CookingMyMealPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <p>Invalid meal ID.</p>;
  }

  const meal = myRecipesList.find((el) => el.id === id);

  if (!meal) {
    return <p>Meal not found.</p>;
  }

  const singleMeal: CookingSingleMeal = {
    ...meal,
    ingredients: meal.ingredients || [],
    measures: meal.measures || [],
  };

  return <CookingMySingleMeal meal={singleMeal} />;
};

export default CookingMyMealPage;
