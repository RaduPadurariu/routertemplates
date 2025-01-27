import styles from "./FitnessHeader.module.scss";

const FitnessHeader = () => {
  return (
    <div className={styles["fitness-header"]}>
      <div className={styles["fitness-header__heading"]}>
        <h2>STEP UP YOUR</h2>
        <h1>
          <span className={styles["fitness-header__heading_text"]}>
            FITNESS
          </span>
          <span>WITH US</span>
        </h1>
        <p>Build Your Body And Fitness With Professional Touch</p>
        <div className={styles["fitness-header__heading_btns"]}>
          <a href="#">JOIN US</a>
        </div>
      </div>
    </div>
  );
};

export default FitnessHeader;
