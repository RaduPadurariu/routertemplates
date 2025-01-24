import { Link } from "react-router-dom";
import styles from "./CookingMyRecipesPage.module.scss";

interface MyCookingMeals {
  id: string;
  title: string;
  thumbnail: string;
}

interface MyCookingMealsProps {
  meals: MyCookingMeals[];
}

const CookingMyMeals: React.FC<MyCookingMealsProps> = ({ meals }) => {
  return (
    <div className={styles["cooking-mealList"]}>
      <div className="cooking-container">
        <div className={styles["cooking-mealList__title"]}>meals</div>
        <section className={styles["cooking-mealList__section"]}>
          {meals?.map((mealItem) => {
            const { id, title, thumbnail } = mealItem;

            return (
              <Link
                to={`/cooking/myRecipes/${id}`}
                className={styles["cooking-mealList__section_link"]}
                key={id}
              >
                <div className={styles["cooking-mealList__section_link_item"]}>
                  <img src={thumbnail} alt={title} />
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
                      {title}
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

export default CookingMyMeals;
