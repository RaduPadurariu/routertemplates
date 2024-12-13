import { price } from "../../../../data/educationalData";
import styles from "./EducationalPricing.module.scss";

const EducationalPriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className={styles["educational-price__items"]}>
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className="educational-outlineBtn">GET STARTED</button>
        </div>
      ))}
    </>
  );
};

export default EducationalPriceCard;
