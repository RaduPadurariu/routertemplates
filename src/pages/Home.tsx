import { RefObject } from "react";
import Contact from "./sections/Contact/Contact";
import HeroPage from "./sections/HeroPage/HeroPage";

interface ContactProps {
  contactRef: RefObject<HTMLDivElement>;
}

const Home: React.FC<ContactProps> = ({ contactRef }) => {
  return (
    <>
      <HeroPage />
      <Contact contactRef={contactRef} />
    </>
  );
};

export default Home;
