import EducationalAboutWrapper from "../About/EducationalAboutWrapper";
import EducationalBack from "../common/Back/EducationalBack";
import EducationalTeamCard from "./EducationalTeamCard";

import styles from "./EducationalTeam.module.scss";

const EducationalTeam = () => {
  return (
    <>
      <EducationalBack title="Team" />
      <section className={styles["educational-team"]}>
        <div
          className={`educational-container ${styles["educational-team__grid"]}`}
        >
          <EducationalTeamCard />
        </div>
      </section>
      <EducationalAboutWrapper />
    </>
  );
};

export default EducationalTeam;
