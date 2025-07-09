import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import Contact from "./components/ContactForm";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main className="px-8 min-h-screen">
        <HeroSection />
        <SkillSection />
        <AboutSection />
        <ProjectSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
