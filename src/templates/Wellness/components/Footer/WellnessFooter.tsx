import styles from "./WellnessFooter.module.scss";

const WellnessFooter = () => {
  return (
    <>
      <section className={styles["wellness-footer"]}>
        <div className={styles["wellness-footer__container"]}>
          <div className={styles["wellness-footer__container_img"]}>
            <img src="/images/Templates/Wellness/llogo.png" alt="no-img" />
          </div>
          <div className={styles["wellness-footer__container_line"]}></div>
          <p>Make every day happier</p>
        </div>
      </section>
    </>
  );
};

export default WellnessFooter;
