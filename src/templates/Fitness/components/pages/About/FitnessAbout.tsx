import styles from "./FitnessAbout.module.scss";

const FitnessAbout = () => {
  return (
    <div id={styles["fitness-about"]} className={styles["fitness-about"]}>
      <div className={styles["fitness-about__image"]}>
        <img src="/images/Templates/Fitness/about.png" alt="no-about-img" />
      </div>

      <div className={styles["fitness-about__text"]}>
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          animi in eveniet voluptas enim minus consectetur repellendus
          voluptatibus doloremque vitae laudantium accusantium.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default FitnessAbout;
