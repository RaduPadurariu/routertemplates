import { Link } from "react-router-dom";
import styles from "./CookingCategoryList.module.scss";
import { CookingCategory } from "../../types/types";

const CookingCategoryList = ({
  categories,
}: {
  categories: CookingCategory[];
}) => {
  return (
    <div className={styles["cooking-categoryList"]}>
      <div className="cooking-container">
        <div className={styles["cooking-categoryList__title"]}>categories</div>
        <section className={styles["cooking-categoryList__section"]}>
          {categories.map((category) => {
            const {
              idCategory: id,
              strCategory: title,
              strCategoryThumb: thumbnail,
            } = category;

            return (
              <Link
                to={`/cooking/meal/category/${title}`}
                className={styles["cooking-categoryList__item"]}
                key={id}
              >
                <div className={styles["cooking-categoryList__item_img"]}>
                  <img src={thumbnail} alt={title} />
                  <div
                    className={styles["cooking-categoryList__item_img_title"]}
                  >
                    <h3>{title}</h3>
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

export default CookingCategoryList;
