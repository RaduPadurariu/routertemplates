import EducationalBack from "../common/Back/EducationalBack";
import styles from "./EducationalContact.module.scss";

const EducationalContact = () => {
  const map = `
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1652535615693!5m2!1sen!2sro"
    width="100%"
    height="100%"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <EducationalBack title="Contact Us" />
      <section className={styles["educational-contact"]}>
        <div
          className={`educational-container ${styles["educational-contact__main"]}`}
        >
          <div
            className={`educational-row ${styles["educational-contact__main_left"]}`}
          >
            <div
              className={styles["educational-contact__iframe"]}
              dangerouslySetInnerHTML={{ __html: map }}
            ></div>
            ;
          </div>
          <div
            className={`educational-row ${styles["educational-contact__main_right"]}`}
          >
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className={styles["educational-contact__main_right_items"]}>
              <div
                className={styles["educational-contact__main_right_items_box"]}
              >
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div
                className={styles["educational-contact__main_right_items_box"]}
              >
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div
                className={styles["educational-contact__main_right_items_box"]}
              >
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form action="" onSubmit={handleSubmit}>
              <div className={styles["educational-contact__form"]}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea
                cols={30}
                rows={10}
                defaultValue={"Create a message here..."}
              ></textarea>
              <button type="submit" className="educational-primary-btn">
                SEND MESSAGE
              </button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationalContact;
