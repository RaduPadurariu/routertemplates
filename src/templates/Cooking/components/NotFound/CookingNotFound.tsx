import styles from "./CookingNotFound.module.scss";

const CookingNotFound = () => {
  return (
    <div className={styles["cooking-notFound"]}>
      <div
        className={`cooking-container ${styles["cooking-notFound__container"]}`}
      >
        No any food found.
      </div>
    </div>
  );
};

export default CookingNotFound;
