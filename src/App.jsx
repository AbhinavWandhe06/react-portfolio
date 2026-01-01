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
// import CustomCursor from "./components/CustomCursor";
function App() {
  return (
    <DarkModeProvider>
      <CustomCursor/>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Expertise />
    </DarkModeProvider>
  );
}

export default App;