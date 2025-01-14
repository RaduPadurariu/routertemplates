import styles from "./CookingLoader.module.scss";

const CookingLoader = () => {
  return (
    <div className={styles["cooking-loader"]}>
      <div
        className={`cooking-container ${styles["cooking-loader__container"]}`}
      >
        <img
          src="/images/Templates/Cooking/Cooking-loader.svg"
          alt="no-loader"
        />
      </div>
    </div>
  );
};

export default CookingLoader;
