import { homeAbout } from "../../../../data/educationalData";
import EducationalHeading from "../common/Heading/EducationalHeading";
import EducationalAboutWrapper from "./EducationalAboutWrapper";
import styles from "./EducationalAbout.module.scss";

const EducationalAboutCard = () => {
  return (
    <>
      <section className={styles["educational-aboutHome"]}>
        <div className="educational-container flex-justify-between">
          <div
            className={`${styles["educational-aboutHome__left"]} educational-row`}
          >
            <img
              src="/images/Templates/Educational/HomeAbout/about.jpg"
              alt="no-img"
            />
          </div>
          <div
            className={`${styles["educational-aboutHome__right"]} educational-row`}
          >
            <EducationalHeading
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning Expertise"
              className={styles["custom-headingClass"]}
            />
            <div className={styles["educational-aboutHome__items"]}>
              {homeAbout.map((val) => {
                return (
                  <div
                    key={val.id}
                    className={styles["educational-aboutHome__items__item"]}
                  >
                    <div
                      className={styles["educational-aboutHome__items__img"]}
                    >
                      <img src={val.cover} alt="no img" />
                    </div>
                    <div
                      className={styles["educational-aboutHome__items__text"]}
                    >
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <EducationalAboutWrapper />
    </>
  );
};

export default EducationalAboutCard;
