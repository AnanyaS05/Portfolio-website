import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { resumeTabs, sharedResumeData } from "../data/content";

function ResumePage() {
  const [activeTab, setActiveTab] = useState("data-eng");

  const activeResume = useMemo(
    () => resumeTabs.find((tab) => tab.id === activeTab) ?? resumeTabs[0],
    [activeTab],
  );

  return (
    <>
      <Navbar />

      <main className="resume-page anchor-section">
        <div className="resume-top reveal">
          <Link to="/" className="back-link">
            <i className="fas fa-arrow-left" /> Back to Portfolio
          </Link>
          <h2 className="section-title">My Resumes</h2>
          <p className="section-intro resume-intro">
            Select the version aligned with the role and download it directly.
          </p>
          <div className="section-divider" />
        </div>

        <div className="resume-tabs">
          {resumeTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`resume-tab ${tab.id === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={tab.icon} /> {tab.label}
            </button>
          ))}
        </div>

        <div className="resume-panel active reveal">
          <div className="resume-doc">
            <div className="resume-doc-header">
              <h2>Ananya Saggi</h2>
              <div className="resume-contact-row">
                <span>
                  <i className="fas fa-map-marker-alt" /> {sharedResumeData.contact.location}
                </span>
                <span>
                  <i className="fas fa-phone" /> {sharedResumeData.contact.phone}
                </span>
                <span>
                  <i className="fas fa-envelope" />{" "}
                  <a href={`mailto:${sharedResumeData.contact.email}`}>Email</a>
                </span>
                <span>
                  <i className="fab fa-github" />{" "}
                  <a href={sharedResumeData.contact.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </span>
                <span>
                  <i className="fab fa-linkedin" />{" "}
                  <a href={sharedResumeData.contact.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </span>
              </div>
            </div>

            <div className="resume-doc-body">
              <section className="resume-section">
                <div className="resume-section-title">Education</div>
                {sharedResumeData.education.map((item) => (
                  <article className="resume-entry" key={`${item.institution}-${item.date}`}>
                    <div className="resume-entry-header">
                      <span className="resume-entry-title">{item.institution}</span>
                      <span className="resume-entry-date">{item.date}</span>
                    </div>
                    <div className="resume-entry-sub">{item.subtitle}</div>
                    {item.details.map((detail) => (
                      <div className="resume-entry-detail" key={detail}>
                        {detail}
                      </div>
                    ))}
                  </article>
                ))}
              </section>

              <section className="resume-section">
                <div className="resume-section-title">Skills</div>

                <div className="resume-skills-group">
                  <div className="resume-skills-label">Proficient in</div>
                  <div className="resume-skills-list">
                    {activeResume.skills.proficient.map((skill) => (
                      <span className="resume-skill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="resume-skills-group">
                  <div className="resume-skills-label">Familiar with</div>
                  <div className="resume-skills-list">
                    {activeResume.skills.familiar.map((skill) => (
                      <span className="resume-skill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              <section className="resume-section">
                <div className="resume-section-title">Experience</div>
                {sharedResumeData.experience.map((role) => (
                  <article className="resume-entry" key={`${role.title}-${role.date}`}>
                    <div className="resume-entry-header">
                      <span className="resume-entry-title">{role.title}</span>
                      <span className="resume-entry-date">{role.date}</span>
                    </div>
                    <div className="resume-entry-sub">{role.location}</div>
                    <ul className="resume-bullets">
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </section>

              <section className="resume-section">
                <div className="resume-section-title">Projects</div>
                {activeResume.projects.map((project) => (
                  <article className="resume-entry" key={`${project.title}-${project.date}`}>
                    <div className="resume-entry-header">
                      <span className="resume-entry-title">{project.title}</span>
                      <span className="resume-entry-date">{project.date}</span>
                    </div>
                    <div className="resume-project-tech">
                      {project.tech.map((tech) => (
                        <span key={`${project.title}-${tech}`}>{tech}</span>
                      ))}
                    </div>
                    <ul className="resume-bullets">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </section>
            </div>

            <div className="resume-download-bar">
              <a href={activeResume.downloadHref} download className="resume-btn resume-btn-primary">
                <i className="fas fa-download" /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ResumePage;
