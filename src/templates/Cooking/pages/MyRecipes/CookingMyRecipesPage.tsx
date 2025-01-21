import styles from "./CookingMyRecipesPage.module.scss";

import { myRecipesList } from "../../../../data/cookingData";
import CookingMyMeals from "./CookingMyMeals";

const CookingMyRecipesPage = () => {
  return (
    <main className={styles["cooking-categoryPage"]}>
      <div className="cooking-container">
        <div className={styles["cooking-categoryPage__desc"]}>
          <h2>Retete Multicooker</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            possimus.
          </p>
        </div>
      </div>
      {myRecipesList?.length ? <CookingMyMeals meals={myRecipesList} /> : null}
    </main>
  );
};

export default CookingMyRecipesPage;
