import { useEffect, useState, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import "../styles/cursor.css";

const CustomCursor = () => {
  const { isDark } = useContext(DarkModeContext);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    document.querySelectorAll("a, button, .expertise-card").forEach(el => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${hover ? "hover" : ""} ${isDark ? "dark" : "light"}`}
        style={{ left: pos.x, top: pos.y }}
      />

      <div
        className={`cursor-ring ${hover ? "hover" : ""} ${isDark ? "dark" : "light"}`}
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
};

export default CustomCursor;
