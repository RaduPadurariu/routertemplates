import TypewriterComponent from "typewriter-effect";
import styles from "./HeroPage.module.scss";

const HeroPage = () => {
  return (
    <section className={`portfolio-section ${styles.heroPage}`}>
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
          In this project, I built a website that manages five different
          templates using React Router 6.4. The main template serves as a portal
          that provides access to the other four. Each of these four templates
          includes an extra Personal page where I implemented a custom tool that
          I find useful in daily life.
        </p>
        <button className="primaryBtn">Download CV</button>
      </div>
    </section>
  );
};

export default HeroPage;
