import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { social } from "../../../../../data/educationalData";
import styles from "./EducationalHeader.module.scss";
import { Link } from "react-router-dom";

const EducationalHead = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section className={styles["educational-head"]}>
        <div className="educational-container">
          <Link
            to="/educational"
            onClick={scrollToTop}
            className={styles["educational-logo"]}
          >
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </Link>

          <div className={styles["educational-social"]}>
            <ul>
              {social.map((el) => {
                return (
                  <li key={el.id} className="educational-icon-container">
                    <FontAwesomeIcon
                      icon={el.icon}
                      className="educational-icon"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationalHead;
