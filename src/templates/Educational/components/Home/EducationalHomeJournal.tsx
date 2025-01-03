import EducationalHeading from "../common/Heading/EducationalHeading";
import styles from "./EducationalHome.module.scss";
import bloggingStyles from "../Journal/EducationalJournal.module.scss";
import EducationalJournalCard from "../Journal/EducationalJournalCard";
const EducationalHomeJournal = () => {
  return (
    <>
      <section className={bloggingStyles["educational-blog"]}>
        <div
          className={`educational-container ${styles["educational-homeJournal"]}`}
        >
          <EducationalHeading
            subtitle="OUR BLOG"
            title="Recent From Blog"
            className={styles["custom-headingClass"]}
          />
          <div className={bloggingStyles["educational-blog__grid"]}>
            <EducationalJournalCard slice={3} />
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationalHomeJournal;
