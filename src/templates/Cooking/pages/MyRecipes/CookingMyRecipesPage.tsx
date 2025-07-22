import styles from "./CookingMyRecipesPage.module.scss";

import CookingMyMeals from "./CookingMyMeals";

import CookingNotFound from "../../components/NotFound/CookingNotFound";
import { useCookingMyRecipesContext } from "../../context/MyRecipes/useCookingMyRecipesContext";

const CookingMyRecipesPage = () => {
  const { filterMeals } = useCookingMyRecipesContext();

  return (
    <main className={styles["cooking-categoryPage"]}>
      <div className="cooking-container">
        <div className={styles["cooking-categoryPage__desc"]}>
          <h2>Retete la Multicooker</h2>
          <ul>
            <li>
              {" "}
              Multicooker-ul Philips HD 3037/70 prepară supe delicioase, carne,
              paste și prăjituri.
            </li>
            <li>
              {" "}
              Programe de gătit inteligente și automate pentru cel mai bun
              rezultat.
            </li>
            <li>Recipient interior compatibil cu mașina de spălat vase.</li>
            <li>Exterior din oțel inoxidabil pentru o curățare ușoară.</li>
          </ul>
        </div>
      </div>
      {filterMeals?.length ? (
        <CookingMyMeals meals={filterMeals} />
      ) : (
        <CookingNotFound />
      )}
    </main>
  );
};

export default CookingMyRecipesPage;
