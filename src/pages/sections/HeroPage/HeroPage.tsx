import TypewriterComponent from "typewriter-effect";
import styles from "./HeroPage.module.scss";

const HeroPage = () => {
  return (
    <section className={styles.heroPage}>
      <div className={`container ${styles.heroPage__content}`}>
        <h3 className="fontSize">HELLO I'M</h3>
        <h1>
          <TypewriterComponent
            options={{
              strings: [
                "RADU PADURARIU",
                "FRONTEND DEVELOPER",
                "REACT DEVELOPER",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <button className="primaryBtn">Download CV</button>
      </div>
    </section>
  );
};

export default HeroPage;
