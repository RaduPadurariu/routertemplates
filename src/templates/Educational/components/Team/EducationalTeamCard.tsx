import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { team, teamSocial } from "../../../../data/educationalData";
import styles from "./EducationalTeam.module.scss";

const EducationalTeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div key={val.id} className={styles["educational-team__items"]}>
          <div className={styles["educational-team__items_img"]}>
            <img src={val.cover} alt="no-img" />
            <ul className={styles["educational-team__items_img_overlay"]}>
              {teamSocial.map((el) => {
                return (
                  <li key={el.id}>
                    <FontAwesomeIcon
                      icon={el.icon}
                      className={
                        styles["educational-team__items_img_overlay_icon"]
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles["educational-team__items_details"]}>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default EducationalTeamCard;
