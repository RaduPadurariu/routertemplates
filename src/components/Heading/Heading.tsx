import styles from "./Heading.module.scss";

interface Heading {
  title: string;
}

const Heading: React.FC<Heading> = ({ title }) => {
  return (
    <>
      <h2 className={styles.heading}>{title}</h2>
    </>
  );
};

export default Heading;
