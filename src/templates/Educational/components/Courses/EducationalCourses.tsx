import EducationalBack from "../common/Back/EducationalBack";
import EducationalCoursesCard from "./EducationalCoursesCard";
import EducationalOnlineCourses from "./EducationalOnlineCourses";

const EducationalCourses = () => {
  return (
    <>
      <EducationalBack title="Explore Courses" />
      <EducationalCoursesCard />
      <EducationalOnlineCourses />
    </>
  );
};

export default EducationalCourses;
