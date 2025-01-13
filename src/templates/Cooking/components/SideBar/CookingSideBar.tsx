import styles from "./CookingSidebar.module.scss";
import { ImCancelCircle } from "react-icons/im";
import { useCookingSidebarContext } from "../../context/CookingSideBarContext";

const CookingSidebar = () => {
  const { isSidebarOpen, closeSidebar } = useCookingSidebarContext();

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
        <ul className={styles["cooking-sidebar__content_ul"]}></ul>
      </div>
    </nav>
  );
};

export default CookingSidebar;
