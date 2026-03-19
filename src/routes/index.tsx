import { createFileRoute } from "@tanstack/react-router";
import { useNavigate, Link } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero">
        <svg
          className="pattern-deco"
          viewBox="0 0 1600 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 420 C200 360, 500 260, 800 200 C1050 150, 1300 130, 1600 120"
            stroke="#f4f5f2"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />

          <path
            d="M0 360 C200 300, 500 200, 800 140 C1050 90, 1300 70, 1600 60"
            stroke="#f4f5f2"
            strokeWidth="1.4"
            strokeDasharray="18 10"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
        </svg>

        <div className="hero-container">
          <span className="hero-container__name">
            Andrea
            <br />
            Bleckert
          </span>
          <span className="hero-container__rule" />
          <span className="hero-container__title">Frontend Developer</span>
        </div>

        <div className="hero-body">
          <div className="hero-greeting">
            <h2>I tailor interfaces the way I once tailored garments.</h2>
            <p>
              The craft taught me that a great result isn't just about
              appearance — it's about fit, function, and the experience of
              wearing it. I bring that same mindset into development: every
              structure, interaction, and detail has a reason to exist.
            </p>
          </div>
          <div className="hero-cta">
            <Link to="/projects" className="btn-primary">
              See my work
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="hero-scroll">scroll down</div>
      </section>

      <section className="gallery">
        <div className="gallery-header">
          <h2 className="gallery-title">
            <em>Works &amp;</em>
            <br />
            Projects
          </h2>
          <p
            className="gallery-desc section-label"
            style={{
              opacity: 1,
              fontSize: "0.82rem",
              letterSpacing: "0.05em",
              textTransform: "none",
              fontFamily: "var(--font-body)",
            }}
          >
            A few things, made carefully.
          </p>
        </div>

        <Carousel className="gallery-carousel" opts={{ align: "start" }}>
          <CarouselContent>
            <CarouselItem className="gallery-carousel__item">
              <div className="gallery-card">
                <div className="gallery-card__thumb">
                  <img src="/FOLIO.png" alt="Folio" />
                </div>
                <div className="gallery-card__body">
                  <span className="gallery-card__label">
                    React Native· 2024
                  </span>
                  <h3 className="gallery-card__title">Folio</h3>
                  <p className="gallery-card__desc">
                    A mobile app for searching and saving books with a large
                    focus on accessibility.
                  </p>
                  <div className="gallery-card__tags">
                    <span className="gallery-tag">React Native</span>
                    <span className="gallery-tag">TypeScript</span>
                    <span className="gallery-tag">Expo</span>
                    <span className="gallery-tag">CSS</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="gallery-carousel__item">
              <div className="gallery-card">
                <div className="gallery-card__thumb">
                  <img src="/MindPop.png" alt="Mind Pop" />
                </div>
                <div className="gallery-card__body">
                  <span className="gallery-card__label">React · 2024</span>
                  <h3 className="gallery-card__title">Mind Pop</h3>
                  <p className="gallery-card__desc">
                    A quiz game that tests your knowledge of random facts, with
                    different modifiers and power-ups to utilize to give your
                    session an edge.
                  </p>
                  <div className="gallery-card__tags">
                    <span className="gallery-tag">React</span>
                    <span className="gallery-tag">TypeScript</span>
                    <span className="gallery-tag">CSS</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="gallery-carousel__item">
              <div className="gallery-card">
                <div className="gallery-card__thumb">
                  <img src="/brainlessfitness.png" alt="Brainless Fitness" />
                </div>
                <div className="gallery-card__body">
                  <span className="gallery-card__label">React · 2024</span>
                  <h3 className="gallery-card__title">Brainless Fitness</h3>
                  <p className="gallery-card__desc">
                    A playful fitness app that encourages movement through the
                    feeding of brains to a little zombie pet. Built for Chas
                    Hack II.
                  </p>
                  <div className="gallery-card__tags">
                    <span className="gallery-tag">React</span>
                    <span className="gallery-tag">TypeScript</span>
                    <span className="gallery-tag">CSS</span>
                    <span className="gallery-tag">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="gallery-carousel__item">
              <div className="gallery-card">
                <div className="gallery-card__thumb">
                  <img src="/Panik.png" alt="P-anik" />
                </div>
                <div className="gallery-card__body">
                  <span className="gallery-card__label">React · 2024</span>
                  <h3 className="gallery-card__title">P-anik</h3>
                  <p className="gallery-card__desc">
                    An app to help nagivate the panic of parking in Stockholm.
                    Winner of the Innovation category at the first ever Chas
                    Hack Hackathon.
                  </p>
                  <div className="gallery-card__tags">
                    <span className="gallery-tag">React</span>
                    <span className="gallery-tag">TypeScript</span>
                    <span className="gallery-tag">CSS</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="gallery-carousel__item">
              <div className="gallery-card">
                <div className="gallery-card__thumb">
                  <img src="/tictactoe.png" alt="Tic Tac Toe" />
                </div>
                <div className="gallery-card__body">
                  <span className="gallery-card__label">React · 2024</span>
                  <h3 className="gallery-card__title">Tic Tac Toe</h3>
                  <p className="gallery-card__desc">
                    A classic game of tic tac toe with a scifi twist.
                  </p>
                  <div className="gallery-card__tags">
                    <span className="gallery-tag">React</span>
                    <span className="gallery-tag">TypeScript</span>
                    <span className="gallery-tag">CSS</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="gallery-carousel__item">
              <div className="gallery-card">
                <div className="gallery-card__thumb">
                  <img src="/adventureshop.png" alt="Adventure Shop" />
                </div>
                <div className="gallery-card__body">
                  <span className="gallery-card__label">React · 2024</span>
                  <h3 className="gallery-card__title">Adventure Shop</h3>
                  <p className="gallery-card__desc">
                    A fantasy-themed shop UI with an shopkeeper, inventory
                    system, and in-game currency.
                  </p>
                  <div className="gallery-card__tags">
                    <span className="gallery-tag">React</span>
                    <span className="gallery-tag">TypeScript</span>
                    <span className="gallery-tag">CSS</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="gallery-carousel__prev" />
          <CarouselNext className="gallery-carousel__next" />
        </Carousel>

        <div className="gallery-footer">
          <Link to="/projects" className="link-arrow">
            View all projects
          </Link>
        </div>
      </section>

      <section className="statement">
        <div className="statement-quote">
          <blockquote>
            Nobody notices the stitching
            <br />
            until it comes <em>undone</em>
            <br />
            That's exactly why it matters.
          </blockquote>
          <cite>— On craftsmanship, in any medium</cite>
        </div>

        <div className="statement-aside">
          <p
            className="section-label"
            style={{ color: "rgba(244,245,242,0.3)" }}
          >
            Approach
          </p>
          <p>
            Just as a well-made corset supports without constraining, I build
            interfaces that guide without frustrating. Every micro-interaction,
            every transition, every pixel has a reason to exist.
          </p>

          <Link
            to="/about"
            className="btn-primary"
            style={{ marginTop: "0.5rem" }}
          >
            Read more about me
          </Link>
        </div>
      </section>

      <section className="bio">
        <div className="bio-skills">
          <p className="section-label">Technical Stack</p>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            Tools &amp;{" "}
            <em style={{ fontStyle: "italic", color: "var(--green-mid)" }}>
              Technologies
            </em>
          </h3>

          <div className="skills-grid">
            <span className="skill-category">Languages</span>
            <div className="skill-pill skill-pill--accent">TypeScript</div>
            <div className="skill-pill">JavaScript</div>
            <div className="skill-pill">HTML</div>
            <div className="skill-pill">CSS</div>

            <span className="skill-category">Frameworks</span>
            <div className="skill-pill skill-pill--accent">React</div>
            <div className="skill-pill">TanStack Router</div>
            <div className="skill-pill">React Native</div>
            <div className="skill-pill">Node.js</div>

            <span className="skill-category">Design &amp; Tools</span>
            <div className="skill-pill">Figma</div>
            <div className="skill-pill skill-pill--accent">Tailwind</div>
            <div className="skill-pill">Motion</div>
            <div className="skill-pill">Git / GitHub</div>

            <span className="skill-category">Other</span>
            <div className="skill-pill">REST APIs</div>
          </div>
        </div>

        <div className="bio-about">
          <p className="section-label">About Me</p>
          <h2 className="bio-title">
            Crafting <em>interfaces</em>
            <br />
            that fit just right.
          </h2>
          <p className="bio-text">
            I'm a frontend developer with a background in garment construction —
            an unlikely pairing that turns out to have everything in common.
            Both disciplines demand precision, empathy for the person using the
            final product, and a deep respect for the details others won't
            notice but will absolutely feel.
          </p>
          <p className="bio-text">
            Currently based in Bålsta, open to remote work and currently looking
            for LIA, internship, beginning fall of 2026.
          </p>

          <div className="timeline">
            <p className="section-label" style={{ marginBottom: "1.5rem" }}>
              Experience
            </p>

            <div className="timeline-item">
              <span className="timeline-year">
                2024 –<br />
                Present
              </span>
              <div className="timeline-content">
                <strong>Frontend Developer Student</strong>
                <span>Chas Academy</span>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">
                2022 –<br />
                2024
              </span>
              <div className="timeline-content">
                <strong>Visual Merchandiser</strong>
                <span>Retail</span>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-year">
                2012 –<br />
                2022
              </span>
              <div className="timeline-content">
                <strong>Corsetiere</strong>
                <span>Viola Lahger, Stockholm</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
