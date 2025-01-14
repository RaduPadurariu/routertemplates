import styles from "./CookingSidebar.module.scss";
import { ImCancelCircle } from "react-icons/im";
import { useCookingSidebarContext } from "../../context/CookingSideBarContext";
import { Link } from "react-router-dom";
import { useCookingMealContext } from "../../context/CookingMealContext";

const CookingSidebar = () => {
  const { isSidebarOpen, closeSidebar } = useCookingSidebarContext();
  const { categories } = useCookingMealContext();
  return (
    <nav
      className={`${styles["cooking-sidebar"]} ${
        isSidebarOpen ? styles["cooking-sidebar-visible"] : ""
      }`}
    >
      <button
        type="button"
        className={styles["cooking-sidebar__hideBtn"]}
        onClick={() => closeSidebar()}
      >
        <ImCancelCircle size={24} />
      </button>

      <div className={styles["cooking-sidebar__content"]}>
        <ul className={styles["cooking-sidebar__content_ul"]}>
          {categories.map((category) => (
            <li
              className={styles["cooking-sidebar__content_ul_item"]}
              key={category.idCategory}
            >
              <Link
                to={`/cooking/meal/category/${category.strCategory}`}
                className={styles["cooking-sidebar__content_ul_item_link"]}
                onClick={() => closeSidebar()}
              >
                {category.strCategory}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CookingSidebar;
