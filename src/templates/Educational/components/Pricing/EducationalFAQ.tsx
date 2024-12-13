import { useState } from "react";
import { faq } from "../../../../data/educationalData";
import EducationalHeading from "../common/Heading/EducationalHeading";
import styles from "./EducationalPricing.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const EducationalFAQ = () => {
  const [click, setClick] = useState<number | null>(null);

  const toggle = (index: number): void => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <>
      <EducationalHeading
        subtitle="FAQS"
        title="Frequesntly Ask Question"
        className={styles["custom-headingClass"]}
      />
      <section className={styles["educational-faq"]}>
        <div className="educational-container">
          {faq.map((val, index) => (
            <div className={styles["educational-faq__box"]}>
              <button
                className={styles["educational-faq__box_accordion"]}
                onClick={() => toggle(index)}
                key={index}
              >
                <h2>{val.title}</h2>
                <span>
                  {click === index ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronRight} />
                  )}
                </span>
              </button>
              {click === index ? (
                <div className={styles["educational-faq__box_text"]}>
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EducationalFAQ;
