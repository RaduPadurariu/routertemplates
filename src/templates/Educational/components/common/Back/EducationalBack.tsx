import { Link, useLocation } from "react-router-dom";
import styles from "./EducationalBack.module.scss";

interface Back {
  title: string;
}

const EducationalBack: React.FC<Back> = ({ title }) => {
  const location = useLocation();

  return (
    <>
      <section className={styles["educational-back"]}>
        <h2>
          {" "}
          <Link to="/educational">Home / </Link>
          <span>{location.pathname.split("/")[2]}</span>
        </h2>
        <h1>{title}</h1>
      </section>
    </>
  );
};

export default EducationalBack;
