import { online } from "../../../../data/educationalData";
import EducationalHeading from "../common/Heading/EducationalHeading";
import styles from "./EducationalCourses.module.scss";

const EducationalOnlineCourses = () => {
  return (
    <>
      <section className={styles["educational-online"]}>
        <div className="educational-container">
          <EducationalHeading
            subtitle="COURSES"
            title="Browse Our Online Courses"
            className={styles["custom-headingClass"]}
          />
          <div
            className={`${styles["educational-online__content"]} ${styles["educational-online__grid"]}`}
          >
            {online.map((val) => (
              <div className={styles["educational-online__content_box"]}>
                <div className={styles["educational-online__content_box_img"]}>
                  <img src={val.cover} />
                  <img
                    src={val.hoverCover}
                    alt="no-img"
                    className={
                      styles["educational-online__content_box_img_show"]
                    }
                  />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationalOnlineCourses;
