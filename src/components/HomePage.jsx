import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { aboutParagraphs, projectFilters, projects, techStackGroups } from "../data/content";

function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animationSeed, setAnimationSeed] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const onFilterClick = (nextFilter) => {
    if (nextFilter === activeFilter) {
      return;
    }

    setActiveFilter(nextFilter);
    setAnimationSeed((current) => current + 1);
  };

  return (
    <>
      <Navbar />

      <header id="hero" className="hero anchor-section">
        <div className="hero-content reveal">
          <h1 className="hero-name">Ananya Saggi</h1>
          <p className="hero-tagline">Data Engineer & AI Developer</p>
          <p className="hero-description">
            I build clean pipelines, automation workflows, and AI systems that support business
            outcomes, not just demos.
          </p>
          <div className="hero-cta-row">
            <Link className="hero-btn hero-btn-primary" to="/#projects">
              Explore Projects
            </Link>
            <Link className="hero-btn hero-btn-secondary" to="/resume">
              View Resume
            </Link>
          </div>
          <div className="hero-metrics">
            <div className="metric-chip">
              <strong>8+</strong>
              <span>Portfolio Projects</span>
            </div>
            <div className="metric-chip">
              <strong>3</strong>
              <span>Data + AI Co-op Roles</span>
            </div>
            <div className="metric-chip">
              <strong>1M+</strong>
              <span>Records Integrated</span>
            </div>
          </div>
        </div>

        <aside className="hero-highlight reveal">
          <p className="hero-highlight-label">Current Focus</p>
          <h2>Production-ready data and AI systems</h2>
          <ul className="hero-focus-list">
            <li>
              <i className="fas fa-diagram-project" />
              Designing resilient ETL and reverse ETL workflows
            </li>
            <li>
              <i className="fas fa-brain" />
              Building LLM monitoring and evaluation pipelines
            </li>
            <li>
              <i className="fas fa-magnifying-glass-chart" />
              Automating competitor intelligence at scale
            </li>
          </ul>
        </aside>
      </header>

      <section id="tech" className="tech-section anchor-section">
        <div className="container">
          <div className="section-heading centered reveal">
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-intro">
              Languages, frameworks, and cloud tools used to ship analytics and AI solutions.
            </p>
            <div className="section-divider" />
          </div>
          <div className="tech-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="terminal-title">ananya@portfolio ~ /tech-stack</span>
            </div>

            <div className="terminal-body">
              {techStackGroups.map((group) => (
                <div key={group.command}>
                  <div className="terminal-line">
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-cmd">{group.command}</span>
                  </div>
                  <div className="terminal-output">
                    {group.tags.map((tag) => (
                      <span className="tech-tag" key={`${group.command}-${tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-cursor">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section anchor-section">
        <div className="container">
          <div className="section-heading centered reveal">
            <h2 className="section-title">Projects</h2>
            <p className="section-intro">
              A mix of data engineering, AI automation, and analytics implementations.
            </p>
            <div className="section-divider" />
          </div>

          <div className="filter-tabs reveal">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
                onClick={() => onFilterClick(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <article
                className="project-card project-card-enter"
                key={`${animationSeed}-${project.id}`}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="project-thumb">
                  <div className="project-visual">
                    <div className="project-icon">
                      <i className={project.icon} />
                    </div>
                  </div>
                  <div className="project-hover-desc">
                    <p>{project.hoverDescription}</p>
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section anchor-section">
        <div className="container about-container reveal">
          <div className="about-image">
            <div className="about-image-placeholder">
              <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="300" rx="16" fill="#F0E6D8" />
                <circle cx="150" cy="120" r="50" fill="#D97757" opacity="0.3" />
                <rect x="100" y="180" width="100" height="60" rx="8" fill="#D97757" opacity="0.2" />
                <text x="150" y="270" textAnchor="middle" fill="#3D3229" fontSize="12" opacity="0.5">
                  Profile Placeholder
                </text>
              </svg>
            </div>
          </div>

          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <div className="section-divider" />
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
