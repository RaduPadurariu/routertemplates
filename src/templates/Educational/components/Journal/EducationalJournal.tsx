import EducationalBack from "../common/Back/EducationalBack";
import EducationalJournalCard from "./EducationalJournalCard";
import styles from "./EducationalJournal.module.scss";

const EducationalJournal = () => {
  return (
    <>
      <EducationalBack title="Blog Posts" />
      <section className={styles["educational-blog"]}>
        <div
          className={`educational-container ${styles["educational-blog__grid"]}`}
        >
          <EducationalJournalCard />
        </div>
      </section>
    </>
  );
};

export default EducationalJournal;
