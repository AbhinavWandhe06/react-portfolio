import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import ProjectCard from "../components/ProjectsCard.jsx";
import { projects } from "../data/projects.js";
import "../styles/projects.css";

/* =======================
   RESPONSIVE SPHERES
======================= */
function Sphere({ position, color, scale }) {
  const ref = useRef();
  // useThree gives us the current viewport size in 3D units
  const { viewport } = useThree();
  
  // Adjust position slightly based on screen width
  const responsivePosition = useMemo(() => {
    const multiplier = viewport.width < 10 ? 0.5 : 1;
    return [position[0] * multiplier, position[1], position[2]];
  }, [viewport.width, position]);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.12;
  });

  return (
    <Float speed={2} floatIntensity={2}>
      <mesh ref={ref} position={responsivePosition} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.4}
          roughness={0.25}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

export default function ProjectsAtmosphere() {
  return (
    <section className="projects-atmosphere">
      <div className="three-bg">
        {/* Added dpr (device pixel ratio) for sharpness on retina screens */}
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[6, 6, 6]} intensity={1.1} />

          <Sphere position={[-4, 2, -2]} color="#6366f1" scale={1.2} />
          <Sphere position={[3, 1.5, -3]} color="#8b5cf6" scale={0.9} />
          <Sphere position={[-2, -2, -4]} color="#a5b4fc" scale={1.3} />
          <Sphere position={[4, -2.5, -5]} color="#c7d2fe" scale={1.0} />
        </Canvas>
      </div>

      <div className="projects-content">
        <header className="projects-header">
          <span className="pill">PROJECTS</span>
          <h2>Systems Built with <span>Intent</span></h2>
          <p>Real-world applications where performance, scalability, and user experience matter.</p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}