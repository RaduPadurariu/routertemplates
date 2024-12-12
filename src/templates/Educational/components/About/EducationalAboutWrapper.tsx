import { aboutWrapper } from "../../../../data/educationalData";
import styles from "./EducationalAbout.module.scss";

const EducationalAboutWrapper = () => {
  return (
    <>
      <section className={styles["educational-aboutWrapper"]}>
        <div
          className={`educational-container ${styles["educational-aboutWrapper__grid"]}`}
        >
          {aboutWrapper.map((val) => {
            return (
              <div className={styles["educational-aboutWrapper__box"]}>
                <div className={styles["educational-aboutWrapper__box_img"]}>
                  <img src={val.cover} alt="no-img" />
                </div>
                <div className={styles["educational-aboutWrapper__box_text"]}>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default EducationalAboutWrapper;
