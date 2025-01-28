import { FormEvent } from "react";
import styles from "./FitnessContact.module.scss";

const FitnessContact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div id={styles["fitness-contact"]} className={styles["fitness-contact"]}>
      <h1>CONTACT US</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Type Your E-Mail" required />
        <textarea placeholder="Write Here ......" name="message"></textarea>
        <input
          className={styles["fitness-contact__submit"]}
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default FitnessContact;
