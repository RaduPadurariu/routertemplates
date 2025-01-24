import { useParams } from "react-router-dom";
import { CookingPersonalSingleMeal } from "../../types/types";

import { myRecipesList } from "../../../../data/cookingData";
import CookingMySingleMeal from "./CookingMySingleMeal";

const CookingMyMealPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <p>Invalid meal ID.</p>;
  }

  const meal = myRecipesList.find((el) => el.id === id);

  if (!meal) {
    return <p>Meal not found.</p>;
  }

  const singleMeal: CookingPersonalSingleMeal = {
    ...meal,
  };

  return <CookingMySingleMeal meal={singleMeal} />;
};

export default CookingMyMealPage;
