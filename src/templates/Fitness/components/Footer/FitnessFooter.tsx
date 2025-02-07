import styles from "./FitnessFooter.module.scss";

const FitnessFooter = () => {
  return (
    <div className={styles["fitness-footer"]}>
      Copyright © All rights reserved | This template was made by Radu Padurariu
      inspired from
      <span>
        <a
          target="_blank"
          href="https://www.dropbox.com/scl/fo/foqrcjt5gdnfelvkvoujt/ADhPpSu49B5ItUpG0eNy82w?rlkey=otpo9j8622cmi7b51yncx94or&e=1&dl=0"
        >
          {" "}
          Taversity
        </a>
      </span>
    </div>
  );
};

export default FitnessFooter;
