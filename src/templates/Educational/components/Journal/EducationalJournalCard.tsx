import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { journal } from "../../../../data/educationalData";
import styles from "./EducationalJournal.module.scss";
import {
  faCalendarAlt,
  faComments,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const EducationalJournalCard = () => {
  return (
    <>
      {journal.map((val) => {
        return (
          <div key={val.id} className={styles["educational-blog__items"]}>
            <div className="img">
              <img src={val.cover} alt="no-blog-img" />
            </div>
            <div className={styles["educational-blog__items_text"]}>
              <div className={styles["educational-blog__items_text_admin"]}>
                <span>
                  <FontAwesomeIcon icon={faUser} />
                  <label htmlFor="">{val.type}</label>
                </span>
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <label htmlFor="">{val.date}</label>
                </span>
                <span>
                  <FontAwesomeIcon icon={faComments} />
                  <label htmlFor="">{val.com}</label>
                </span>
              </div>
              <h1>{val.title}</h1>
              <p>{val.desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EducationalJournalCard;
