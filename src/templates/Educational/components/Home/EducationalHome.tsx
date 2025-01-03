import EducationalAboutCard from "../About/EducationalAboutCard";
import EducationalHomeCourses from "./EducationalHomeCourses";
import EducationalHomeJournal from "./EducationalHomeJournal";
import EducationalHomePrice from "./EducationalHomePrice";
import EducationalHero from "./Hero/EducationalHero";
import EducationalTestimonials from "./Testimonial/EducationalTestimonials";

const EducationalHome = () => {
  return (
    <>
      <EducationalHero />
      <EducationalAboutCard />
      <EducationalHomeCourses />
      <EducationalTestimonials />
      <EducationalHomeJournal />
      <EducationalHomePrice />
    </>
  );
};

export default EducationalHome;
