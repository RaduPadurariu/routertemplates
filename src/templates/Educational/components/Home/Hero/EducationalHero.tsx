import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EducationalHeading from "../../common/Heading/EducationalHeading";
import styles from "./EducationalHero.module.scss";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const EducationalHero = () => {
  return (
    <>
      <section className={styles["educational-hero"]}>
        <div className="educational-container">
          <div className="educational-row">
            <EducationalHeading
              subtitle="WELCOME TO ACADEMIA"
              title="Best Online Education Expertise"
              className={styles["custom-headingClass"]}
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="educational-button">
              <button className="educational-primary-btn">
                GET STARTED NOW{" "}
                <FontAwesomeIcon
                  icon={faLongArrowAltRight}
                  className={styles["educational-hero__arrowIcon"]}
                />{" "}
              </button>
              <button className={styles["educational-hero__courseBtn"]}>
                VIEW COURSE{" "}
                <FontAwesomeIcon
                  icon={faLongArrowAltRight}
                  className={styles["educational-hero__arrowIcon"]}
                />{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationalHero;
