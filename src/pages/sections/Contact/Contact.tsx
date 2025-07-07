import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../../../components/Heading/Heading";
import { contact } from "../../../data/portfolioData";
import styles from "./Contact.module.scss";
import { RefObject } from "react";

interface ContactProps {
  contactRef: RefObject<HTMLDivElement>;
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={styles.contact} ref={contactRef}>
        <div className="container">
          <Heading title="Keep In Touch" />
          <div className={styles.contact__content}>
            <div className={styles.contact__content__left}>
              <form action="#" onClick={(e) => handleSubmit(e)}>
                <div className="flex">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <input type="text" placeholder="Subject" />
                <textarea name="" id="" cols={30} rows={10}></textarea>
                <button>Submit</button>
              </form>
            </div>
            <div className={styles.contact__content__right}>
              {contact.map((item) => (
                <div
                  key={item.id}
                  className={styles.contact__content__right_item}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={styles.contact__social__icon}
                  />
                  <p>{item.text1}</p>
                  {/* <p>{item.text2}</p> */}
                </div>
              ))}
              <a href="https://radupadurariu2025.netlify.app" target="_blank">
                Visit Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
