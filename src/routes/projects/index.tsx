import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, ExternalLink, X } from "lucide-react";
import { projects } from "@/data/projects";
import "./projects.css";
import { useState } from "react";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <main className="work-page">
      <header className="work-header">
        <p className="section-label">Portfolio</p>
        <h1 className="work-title">
          Selected <em>Works</em>
        </h1>
        <p className="work-subtitle">A few things, made carefully.</p>
      </header>
      <Link to="/" className="back-link-arrow">
        Back
      </Link>

      <section className="work-list">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;
          return (
            <article
              key={project.id}
              className={`project-row ${isEven ? "project-row--reverse" : ""}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="section-label" style={{ marginBottom: 0 }}>
                    {project.year}
                  </span>
                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="gallery-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="project-link project-link--primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={15} />
                      Live demo
                    </a>
                  )}
                </div>
                <div className="project-gallery">
                  {project.galleryImages?.map((img, imgIndex) => (
                    <button
                      key={imgIndex}
                      className="gallery-item"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        className="gallery-img"
                      />
                    </button>
                  ))}
                </div>
              </div>
              {selectedImage && (
                <button
                  className="modal"
                  onClick={() => setSelectedImage(null)}
                >
                  <button className="modal-close">
                    <X />
                  </button>
                  <img src={selectedImage} alt="" className="modal-img" />
                </button>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}
