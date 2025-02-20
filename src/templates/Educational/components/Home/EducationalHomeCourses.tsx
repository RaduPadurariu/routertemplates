import EducationalHeading from "../common/Heading/EducationalHeading";
import styles from "./EducationalHome.module.scss";
import EducationalCoursesCard from "../Courses/EducationalCoursesCard";
import EducationalOnlineCourses from "../Courses/EducationalOnlineCourses";

const EducationalHomeCourses = () => {
  return (
    <>
      <section className={styles["educational-homeCourses"]}>
        <div
          className={`educational-container ${styles["educational-homeCourses__main"]}`}
        >
          <EducationalHeading
            subtitle="our courses"
            title="explore our popular online courses"
            className={styles["custom-headingClass"]}
          />
          <EducationalCoursesCard slice={3} />
        </div>
        <EducationalOnlineCourses />
      </section>
    </>
  );
};

export default EducationalHomeCourses;
