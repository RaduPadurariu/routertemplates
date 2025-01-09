import EducationalBack from "../common/Back/EducationalBack";
import styles from "./EducationalMyEducation.module.scss";
const EducationalMyEducation = () => {
  return (
    <>
      <EducationalBack title="My Courses" />
      <section className={styles["educational-myCourses"]}>
        <div className="educational-container">
          <div className={styles["educational-myCourses__w3"]}>
            <iframe
              src="/data/websites/w3practice/index.html"
              title="w3 school notes"
              className={styles["educational-myCourses__w3_iframe"]}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationalMyEducation;
