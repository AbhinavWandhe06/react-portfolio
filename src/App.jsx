import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import AnimatedBackground from "./components/AnimatedBackground";
import { DarkModeProvider } from "./context/DarkModeContext";
import "./styles/global.css";
import "./styles/animations.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/expertise.css";
import "./styles/responsive.css";
import CustomCursor from "./components/CustomCursor";
import ThingsICanDo from "./components/ThingsICanDo";
import Projects3D from "./components/Projects3D"; // ✅ ADD
import SmoothScroll from "./components/SmoothScroll";
import Experience from "./components/Experience";
import ContactSection from "./components/ContactSection";
import ProjectsAtmosphere from "./components/Projects3D";
function App() {
  return (
    <DarkModeProvider>
      <SmoothScroll>
      <CustomCursor />
      <AnimatedBackground />

      <Navbar />
      <Hero />
      <section id="expertise">
        <Expertise />
      </section>
      <ThingsICanDo />
      {/* 🔥 3D PROJECTS SCENE */}
      <section id="projects">
        <ProjectsAtmosphere/>
      </section>
      <section id="experience">
        <Experience/>
      </section>
      <section id="contact">
        <ContactSection/>
      </section>
      </SmoothScroll>

    </DarkModeProvider>
  );
}

export default App;
