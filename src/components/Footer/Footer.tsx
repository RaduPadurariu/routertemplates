import { social } from "../../data/portfolioData";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        {" "}
        <ul>
          {social.map((el) => {
            return (
              <li key={el.id}>
                <FontAwesomeIcon
                  icon={el.icon}
                  className={styles.footer__social__icon}
                />
              </li>
            );
          })}
        </ul>
        <p>
          © 2024 Radu Padurariu &{" "}
          <a
            style={{ color: "white" }}
            href="https://www.youtube.com/watch?v=gkj2Fk6k4Qk"
            target="_blank"
          >
            GorkCoder.&nbsp;
          </a>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
