import styles from "./CookingMeal.module.scss";
import { CookingMeal } from "../../types/types";
import { Link } from "react-router-dom";

interface CookingMealListProps {
  meals: CookingMeal[];
}

const CookingMealList: React.FC<CookingMealListProps> = ({ meals }) => {
  return (
    <div className={styles["cooking-mealList"]}>
      <div className="cooking-container">
        <div className={styles["cooking-mealList__title"]}>meals</div>
        <section className={styles["cooking-mealList__section"]}>
          {meals?.map((mealItem) => {
            const {
              idMeal: id,
              strMeal: meal,
              strMealThumb: thumbnail,
            } = mealItem;

            return (
              <Link
                to={`/cooking/meal/${id}`}
                className={styles["cooking-mealList__section_link"]}
                key={id}
              >
                <div className={styles["cooking-mealList__section_link_item"]}>
                  <img src={thumbnail} alt={meal} />
                  <div
                    className={
                      styles["cooking-mealList__section_link_item_cat"]
                    }
                  ></div>
                </div>

                <div
                  className={styles["cooking-mealList__section_link_container"]}
                >
                  <div
                    className={
                      styles["cooking-mealList__section_link_container_info"]
                    }
                  >
                    <div
                      className={
                        styles[
                          "cooking-mealList__section_link_container_info_area"
                        ]
                      }
                    ></div>
                    <div
                      className={
                        styles[
                          "cooking-mealList__section_link_container_info_meal"
                        ]
                      }
                    >
                      {meal}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default CookingMealList;
