import { Link } from "react-router-dom";
import styles from "./WellnessHero.module.scss";

const WellnessHero = () => {
  return (
    <>
      <section className={styles["wellness-hero"]}>
        <div className={styles["wellness-hero__container"]}>
          <div className={styles["wellness-hero__bannerContent"]}>
            <h1>
              Find Your Ultimate <br />
              Daily Routine and Make it Stick
            </h1>
            <p>
              Fabulous is an accountability partner in your pocket. Born at Duke
              University, we use behavioral science to help you make smart
              changes and build healthy habits. Ready to take your life to the
              next level?
            </p>
            <div className={styles["wellness-hero__bannerContent_btns"]}>
              <div
                className={styles["wellness-hero__bannerContent_btns_primary"]}
              >
                <Link to="#">Start your journey</Link>
              </div>
              <div
                className={
                  styles["wellness-hero__bannerContent_btns_secondary"]
                }
              >
                <Link to="#">Try for free</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WellnessHero;
