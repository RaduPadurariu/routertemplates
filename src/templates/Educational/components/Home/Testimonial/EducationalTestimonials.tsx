import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { testimonals } from "../../../../../data/educationalData";
import EducationalHeading from "../../common/Heading/EducationalHeading";
import styles from "./EducationalTestimonial.module.scss";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const EducationalTestimonials = () => {
  return (
    <>
      <section className={styles["educational-testimonials"]}>
        <div
          className={`educational-container ${styles["educational-testimonials__main"]}`}
        >
          <EducationalHeading
            subtitle="TESTIMONIAL"
            title="Our Successful Students"
            className={styles["custom-headingClass"]}
          />

          <div className={styles["educational-testimonials__grid"]}>
            {testimonals.map((val) => (
              <div
                key={val.id}
                className={styles["educational-testimonials__grid_items"]}
              >
                <div
                  className={styles["educational-testimonials__grid_items_box"]}
                >
                  <div className={styles["educational-testimonials__img"]}>
                    <img src={val.cover} alt="no-testimonial-img" />
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className={styles["educational-testimonials__icon"]}
                    />
                  </div>
                  <div
                    className={
                      styles["educational-testimonials__grid_items_box_name"]
                    }
                  >
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationalTestimonials;
