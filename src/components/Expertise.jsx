import { Code2, Layers, Database, BarChart3 } from "lucide-react";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import "../styles/expertise.css";

const Expertise = () => {
  const { isDark } = useContext(DarkModeContext);

  return (
    <section className={`expertise-section ${isDark ? 'dark' : 'light'}`}>
      <div className="expertise-grid">

        {/* HEADER (LEFT TOP) */}
        <div className="expertise-header">
          <span className="expertise-tag">EXPERTISE</span>
          <h2>Engineering Scalable Digital Experiences</h2>
          <p>
            Combining strong technical foundations with modern frameworks and
            data-driven insights to build impactful solutions.
          </p>
        </div>

        {/* CODE PANEL (RIGHT – FULL HEIGHT) */}
        <div className="code-window">
          <div className="code-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="file-name">expertise.ts</span>
          </div>

          <pre className="code-body">
{`const developer = {
  name: "Abhinav Wandhe",
  role: "Full Stack Developer",

  skills: [
    "React",
    "Node.js",
    "PostgreSQL",
    "ASP.NET",
    "PowerBI"
  ],

  principles: [
    "Clean Architecture",
    "Performance",
    "Scalability"
  ],

  availableForFreelance: true,
};

export default developer;`}
          </pre>
        </div>

        {/* CARDS (LEFT BOTTOM) */}
        <div className="expertise-cards">
          <div className="expertise-card bg-code" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80)'}}>
            <div className="overlay" />
            <div className="content">
              <Code2 size={32} />
              <h3>Programming & Languages</h3>
              <p>Efficient, scalable, and maintainable software solutions.</p>
              <ul>
                <li>C++, C#, Python</li>
                <li>JavaScript (ES6+)</li>
                <li>SQL & Data Structures</li>
              </ul>
            </div>
          </div>

          <div className="expertise-card bg-frameworks" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80)'}}>
            <div className="overlay" />
            <div className="content">
              <Layers size={32} />
              <h3>Frameworks & Libraries</h3>
              <p>Modern stacks built for performance and scalability.</p>
              <ul>
                <li>React.js & Node.js</li>
                <li>ASP.NET Core</li>
                <li>Entity Framework Core</li>
              </ul>
            </div>
          </div>

          <div className="expertise-card bg-database" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80)'}}>
            <div className="overlay" />
            <div className="content">
              <Database size={32} />
              <h3>Database Systems</h3>
              <p>Reliable, optimized, and secure data management.</p>
              <ul>
                <li>PostgreSQL, MySQL</li>
                <li>SQL Server (SSMS)</li>
                <li>OracleDB</li>
              </ul>
            </div>
          </div>

          <div className="expertise-card bg-analytics" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80)'}}>
            <div className="overlay" />
            <div className="content">
              <BarChart3 size={32} />
              <h3>Analytics & BI</h3>
              <p>Transforming data into actionable insights.</p>
              <ul>
                <li>PowerBI Dashboards</li>
                <li>KPI Monitoring</li>
                <li>Business Intelligence</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;