import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import QualityFeature from "./components/QualityFeature";
import Footer from "./components/Footer";
import LearningToday from "./components/LearningToday";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import FrequentQuetions from "./components/FrequentQuetions";
import PricePlan from "./components/PricePlan";
import Functions from "./components/Functions";
import Courses from "./components/Courses";
import CoreFeatures from "./components/CoreFeatures";

function App() {
  const scrollToNextSection = () => {
    const sections = [
      "header-section",
      "quality-feature",
      "core-features",
      "courses",
      "functions",
      "pricing-plan",
      "frequent-quetions",
      "learningToday",
      "footer",
    ];
    const currentScroll = window.scrollY;
    const offsets = sections.map((id) => ({
      id,
      offset: document.getElementById(id)?.offsetTop || 0,
    }));

    const next = offsets.find(
      (section) => section.offset > currentScroll + 100
    ); // 50 = buffer
    if (next) {
      document.getElementById(next.id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <button
        id="scrollButton"
        className="border-0"
        onClick={scrollToNextSection}
      >
        <FaLongArrowAltDown />
      </button>
      <Navbar />
      <Header />
      <QualityFeature />
      <CoreFeatures />
      <Courses />
      <Functions />
      <PricePlan />
      <FrequentQuetions />
      <LearningToday />
      <Footer />
    </>
  );
}

export default App;
