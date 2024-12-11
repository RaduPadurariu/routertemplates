import styles from "./EducationalHeading.module.scss";

interface EducationalHeading {
  subtitle: string;
  title: string;
}
const EducationalHeading: React.FC<EducationalHeading> = ({
  subtitle,
  title,
}) => {
  return (
    <>
      <div id={styles["educational-heading"]}>
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
      </div>
    </>
  );
};

export default EducationalHeading;
