import styles from "./FitnessFooter.module.scss";

const FitnessFooter = () => {
  return (
    <div className={styles["fitness-footer"]}>
      Copyright © All rights reserved | Radu Padurariu inspired by
      <span>
        <a
          target="_blank"
          href="https://www.dropbox.com/scl/fo/foqrcjt5gdnfelvkvoujt/ADhPpSu49B5ItUpG0eNy82w?rlkey=otpo9j8622cmi7b51yncx94or&e=1&dl=0"
        >
          {" "}
          Taversity
        </a>
      </span>
      &nbsp;and
      <span>
        <a target="_blank" href="https://www.youtube.com/watch?v=KBpoBc98BwM">
          {" "}
          JavaScript Mastery
        </a>
      </span>
    </div>
  );
};

export default FitnessFooter;
