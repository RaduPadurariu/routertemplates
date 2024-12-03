import { useRef } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar scrollToContact={scrollToContact} />
      <Home contactRef={contactRef} />
      <Footer />
    </>
  );
}

export default App;
