import {
  blog,
  footerExplore,
  footerQuestions,
  footerQuickLinks,
  footerSocial,
} from "../../../../../data/educationalData";
import styles from "./EducationalFooter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faHeart,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const EducationalFooter = () => {
  return (
    <>
      {/* Newsletter */}
      <section className={styles["educational-newsLetter"]}>
        <div
          className={`educational-container ${styles["educational-newsLetter__boxes"]}`}
        >
          <div className={styles["educational-newsLetter__boxes__left"]}>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className={styles["educational-newsLetter__boxes__right"]}>
            <input type="text" placeholder="Enter email address" />
            <FontAwesomeIcon
              icon={faPaperPlane}
              className={styles["educational-newsLetter__icon"]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles["educational-footer-mainContainer"]}>
        <div
          className={`educational-container ${styles["educational-footer"]}`}
        >
          <div
            className={`${styles["educational-footer__box"]} ${styles["educational-footer__logo"]}`}
          >
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <ul className={styles["educational-footer__logo_iconList"]}>
              {footerSocial.map((el) => {
                return (
                  <li
                    key={el.id}
                    className={
                      styles["educational-footer__logo_iconList_icons"]
                    }
                  >
                    <FontAwesomeIcon
                      icon={el.icon}
                      className={
                        styles["educational-footer__logo_iconList_icons_icon"]
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={`${styles["educational-footer__box"]} ${styles["educational-footer__link"]}`}
          >
            <h3>Explore</h3>
            <ul>
              {footerExplore.map((el) => {
                return (
                  <li key={el.id}>
                    <span>{el.link}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={`${styles["educational-footer__box"]} ${styles["educational-footer__link"]}`}
          >
            <h3>Quick Links</h3>
            <ul>
              {footerQuickLinks.map((el) => {
                return (
                  <li key={el.id}>
                    <span>{el.link}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles["educational-footer__box"]}>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div key={val.id} className={styles["educational-footer__items"]}>
                <div className="img">
                  <img src={val.cover} alt="no-img" />
                </div>
                <div className="text">
                  <span>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className={styles["educational-footer__items__icon"]}
                    />
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faUser}
                      className={styles["educational-footer__items__icon"]}
                    />
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`${styles["educational-footer__box"]} ${styles["educational-footer__last"]}`}
          >
            <h3>Have a Questions?</h3>
            <ul>
              {footerQuestions.map((q) => {
                return (
                  <li key={q.id}>
                    <FontAwesomeIcon
                      icon={q.icon}
                      className={styles["educational-footer__last__icon"]}
                    />
                    {q.item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>

      {/* Legal rights */}
      <div className={styles["educational-legal"]}>
        <p>
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <FontAwesomeIcon
            icon={faHeart}
            className={styles["educational-legal__icon"]}
          />{" "}
          by Radu Padurariu & GorkCoder
        </p>
      </div>
    </>
  );
};

export default EducationalFooter;
