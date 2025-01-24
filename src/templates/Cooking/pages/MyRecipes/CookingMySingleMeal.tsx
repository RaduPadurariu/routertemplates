import styles from "./CookingMyRecipesPage.module.scss";

import { CookingPersonalSingleMeal } from "../../types/types";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineCheckSquare } from "react-icons/ai";
import { BiChevronsRight } from "react-icons/bi";
import { FaUtensilSpoon } from "react-icons/fa";

const CookingMySingleMeal = ({ meal }: { meal: CookingPersonalSingleMeal }) => {
  return (
    <div className={styles["cooking-singleMeal"]}>
      <div className="cooking-container">
        <div className={styles["cooking-singleMeal__breadCrumb"]}>
          <ul className={styles["cooking-singleMeal__breadCrumb_ul"]}>
            <li className={styles["cooking-singleMeal__breadCrumb_ul_li-link"]}>
              <Link to="/cooking/myRecipes">
                <AiFillHome size={22} />
              </Link>
            </li>
            <li className={styles["cooking-singleMeal__breadCrumb_ul_li-icon"]}>
              <BiChevronsRight size={23} />
            </li>
            <li className={styles["cooking-singleMeal__breadCrumb_ul_li-span"]}>
              <span>{meal?.title}</span>
            </li>
          </ul>
        </div>

        <div className={styles["cooking-singleMeal__title"]}>Meal Details</div>
        <section className={styles["cooking-singleMeal__section"]}>
          <div className={styles["cooking-singleMeal__section_grid"]}>
            <div className={styles["cooking-singleMeal__section_grid_details"]}>
              <img src={meal?.thumbnail} alt="no-img" />
            </div>

            <div className={styles["cooking-singleMeal__section_grid_intro"]}>
              <h3>{meal?.title}</h3>
              <div
                className={styles["cooking-singleMeal__section_grid_intro_cat"]}
              >
                <div
                  className={
                    styles["cooking-singleMeal__section_grid_intro_cat_spans"]
                  }
                >
                  <span
                    className={
                      styles["cooking-singleMeal__section_grid_intro_cat_span1"]
                    }
                  >
                    meal type: &nbsp;
                  </span>
                  <span
                    className={
                      styles["cooking-singleMeal__section_grid_intro_cat_span2"]
                    }
                  >
                    {meal?.mealCategory}
                  </span>
                </div>

                <div
                  className={
                    styles["cooking-singleMeal__section_grid_intro_cat_source"]
                  }
                >
                  <span>Dietary Category: &nbsp;</span>
                  {meal.nutritionalCategory}
                </div>

                <div
                  className={
                    styles["cooking-singleMeal__section_grid_intro_cat_source"]
                  }
                >
                  <span>Source: &nbsp;</span>
                  {meal.source ? (
                    <a href={meal.source}>
                      (meal?.source).substring(0, 40) + "..."
                    </a>
                  ) : (
                    "Not found"
                  )}
                </div>

                <div
                  className={
                    styles["cooking-singleMeal__section_grid_intro_cat_source"]
                  }
                >
                  <span>Estimated Time: &nbsp;</span>
                  {meal.time}
                </div>
              </div>

              <div
                className={
                  styles["cooking-singleMeal__section_grid_intro_tags"]
                }
              >
                <h6>Tags:</h6>
                <ul>
                  {meal.tags?.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                  ))}
                </ul>
              </div>

              <div
                className={
                  styles["cooking-singleMeal__section_grid_intro_ingredients"]
                }
              >
                <h6>Ingredients</h6>
                <ul>
                  {meal?.ingredients?.map((ingredient, idx) => (
                    <li key={idx}>
                      <span
                        className={
                          styles[
                            "cooking-singleMeal__section_grid_intro_ingredients-span1"
                          ]
                        }
                      >
                        {idx + 1}
                      </span>
                      <span
                        className={
                          styles[
                            "cooking-singleMeal__section_grid_intro_ingredients-span2"
                          ]
                        }
                      >
                        {ingredient[0]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles["cooking-singleMeal__section_body"]}>
            <div className={styles["cooking-singleMeal__section_body_measure"]}>
              <h6>Measure ({meal?.servings}): </h6>
              <ul>
                {meal?.ingredients?.map((ingredient, idx) => (
                  <li key={idx}>
                    <span
                      className={
                        styles["cooking-singleMeal__section_body_measure-span1"]
                      }
                    >
                      <FaUtensilSpoon />
                    </span>
                    <span
                      className={
                        styles["cooking-singleMeal__section_body_measure-span2"]
                      }
                    >
                      {ingredient[0]} : {ingredient[1]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles["cooking-singleMeal__section_body_inst"]}>
              <h6>Instructions:</h6>
              <ul>
                {meal?.instructions?.map((instruction, idx) => (
                  <li key={idx}>
                    <AiOutlineCheckSquare
                      size={18}
                      className={
                        styles["cooking-singleMeal__section_body_inst_icon"]
                      }
                    />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookingMySingleMeal;
