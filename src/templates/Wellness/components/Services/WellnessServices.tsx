import { Link } from "react-router-dom";
import { wellnessServices } from "../../../../data/wellnessData";
import styles from "./WellnessServices.module.scss";

const WellnessServices = () => {
  return (
    <>
      <section>
        <div className={styles["wellness-services"]}>
          <ul className={styles["wellness-services__items"]}>
            {wellnessServices.map((service) => {
              return (
                <li
                  key={service.id}
                  className={styles["wellness-services__items_item"]}
                >
                  <div className={styles["wellness-services__items_item_info"]}>
                    <h1>{service.title}</h1>
                    <p>
                      Mindfulness training isn’t limited to meditation, but it’s
                      a great place to start. Meditation is both a skill and an
                      experience that can positively impact your overall health
                      and happiness.
                    </p>
                    <div
                      className={
                        styles["wellness-services__items_item_info_btn"]
                      }
                    >
                      <Link to="#">Start your journey</Link>
                    </div>
                  </div>
                  <div className={styles["wellness-services__items_item_img"]}>
                    <img src={service.src} alt="" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default WellnessServices;
