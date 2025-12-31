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

function App() {
  return (
    <DarkModeProvider>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Expertise />
    </DarkModeProvider>
  );
}

export default App;