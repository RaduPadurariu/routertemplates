import styles from "./EducationalHeading.module.scss";

interface EducationalHeading {
  subtitle: string;
  title: string;
  className: string;
}
const EducationalHeading: React.FC<EducationalHeading> = ({
  subtitle,
  title,
  className,
}) => {
  return (
    <>
      <div className={`${styles["educational-heading"]} ${className}`}>
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
      </div>
    </>
  );
};

export default EducationalHeading;
