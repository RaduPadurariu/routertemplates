import { useEffect, useRef } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-template">
      <Navbar scrollToContact={scrollToContact} />
      <Home contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
