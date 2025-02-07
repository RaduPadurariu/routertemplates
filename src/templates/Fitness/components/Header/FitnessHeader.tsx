import { Link } from "react-router-dom";
import styles from "./FitnessHeader.module.scss";
import { FitnessHeaderProps } from "../../types/fitnessTypes";

const FitnessHeader: React.FC<FitnessHeaderProps> = ({
  text,
  title1,
  title2,
  description,
  button,
  classHeight,
  link,
}) => {
  return (
    <div
      className={styles["fitness-header"]}
      style={{ height: `${classHeight}` }}
    >
      <div className={styles["fitness-header__heading"]}>
        <h2>{text}</h2>
        <h1>
          <span className={styles["fitness-header__heading_text"]}>
            {title1}
          </span>
          <span>{title2}</span>
        </h1>
        <p>{description}</p>
        <div className={styles["fitness-header__heading_btns"]}>
          <Link to={link}>{button}</Link>
        </div>
      </div>
    </div>
  );
};

export default FitnessHeader;
