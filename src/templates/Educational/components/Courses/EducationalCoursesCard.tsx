import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { coursesCard } from "../../../../data/educationalData";
import styles from "./EducationalCourses.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const EducationalCoursesCard = () => {
  return (
    <>
      <section className={styles["educational-coursesCard"]}>
        <div
          className={`educational-container ${styles["educational-coursesCard__grid"]}`}
        >
          {coursesCard.map((val) => (
            <div className={styles["educational-coursesCard__items"]}>
              <div className={styles["educational-coursesCard__items_content"]}>
                <div
                  className={
                    styles["educational-coursesCard__items_content_left"]
                  }
                >
                  <div
                    className={
                      styles["educational-coursesCard__items_content_left_img"]
                    }
                  >
                    <img src={val.cover} alt="no-img" />
                  </div>
                </div>
                <div
                  className={
                    styles["educational-coursesCard__items_content_text"]
                  }
                >
                  <h1>{val.coursesName}</h1>
                  <div
                    className={
                      styles["educational-coursesCard__items_content_text_rate"]
                    }
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles[
                          "educational-coursesCard__items_content_text_rate_icon"
                        ]
                      }
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles[
                          "educational-coursesCard__items_content_text_rate_icon"
                        ]
                      }
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles[
                          "educational-coursesCard__items_content_text_rate_icon"
                        ]
                      }
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles[
                          "educational-coursesCard__items_content_text_rate_icon"
                        ]
                      }
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        styles[
                          "educational-coursesCard__items_content_text_rate_icon"
                        ]
                      }
                    />

                    <label htmlFor="">(5.0)</label>
                  </div>
                  <div
                    className={
                      styles[
                        "educational-coursesCard__items_content_text_details"
                      ]
                    }
                  >
                    {val.courseTeacher.map((details) => (
                      <>
                        <div
                          className={
                            styles[
                              "educational-coursesCard__items_content_text_details_box"
                            ]
                          }
                        >
                          <div
                            className={
                              styles[
                                "educational-coursesCard__items_content_text_details_box_img"
                              ]
                            }
                          >
                            <img src={details.dcover} alt="no-img" />
                          </div>
                          <div
                            className={
                              styles[
                                "educational-coursesCard__items_content_text_details_box_para"
                              ]
                            }
                          >
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles["educational-coursesCard__price"]}>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className="educational-outlineBtn">ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EducationalCoursesCard;
