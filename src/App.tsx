
import { Routes, Route } from "react-router";
import Home from './Home';
import Navbar from "./utils/Navbar";
import Footer from "./utils/Footer";
import Services from "./Services";
import ProductsPage from "./Products";
import CoursesPage from "./Courses";
import Contact from "./Contact";
import EventsPage from "./Events";
import InternPage from "./Interns";
import Career from "./Careers";
import GetaQuote from "./GetaQuote";
import { useEffect } from "react";
import { useLocation } from "react-router";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);
  return (
    <>
      <div className="bg-white dark:bg-white  mt-4">
        <Navbar />
      </div>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/abd" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/interns" element={<InternPage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/get-a-quote" element={<GetaQuote />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App