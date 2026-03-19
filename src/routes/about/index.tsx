import { createFileRoute, Link } from "@tanstack/react-router";
import "./about.css";
import { Swords, BookMarked, Gamepad2, Spool } from "lucide-react";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

const interests = [
  { label: "Dungeons & Dragons", icon: <Swords /> },
  { label: "Reading", icon: <BookMarked /> },
  { label: "Gaming", icon: <Gamepad2 /> },
  { label: "Sewing", icon: <Spool /> },
];

function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-header">
        <div className="about-header__text">
          <p className="header-label">About</p>
          <h1 className="about-title">
            A tailor <em>turned</em>
            <br />
            developer.
          </h1>
        </div>
      </header>
      <Link to="/" className="back-link-arrow">
        Back
      </Link>

      <section className="about-intro">
        <div className="about-photo-wrap">
          <img
            src="/profile-pic.jpg"
            alt="Andrea Bleckert"
            className="about-photo"
          />
          <div className="about-photo-caption">
            <span>Andrea Bleckert</span>
            <span>Frontend Developer · Sweden</span>
          </div>
        </div>

        <div className="about-intro__text">
          <p className="section-label">The story</p>
          <p className="about-body">
            I didn't plan to become a developer. For years I worked in tailoring
            and retail — fitting rooms, pattern cutting, the particular
            satisfaction of a seam that lies perfectly flat. Then circumstances
            changed, and I found myself at a crossroads. I signed up for a
            frontend development programme mostly out of curiosity, and
            somewhere between my first JavaScript function and my third
            all-nighter debugging CSS, I realised I'd accidentally found the
            other thing I was meant to do.
          </p>
          <p className="about-body">
            The transition felt stranger from the outside than it did from the
            inside. Tailoring and coding turn out to have a lot in common — both
            reward precision, both punish shortcuts, and in both disciplines the
            best work is the kind nobody notices. A well-sewn seam and a
            well-written component have the same quiet quality: they just work,
            and they keep working.
          </p>
        </div>
      </section>

      <section className="about-statement">
        <div className="about-statement__inner">
          <p
            className="section-label"
            style={{ color: "rgba(244,245,242,0.35)" }}
          >
            What drives me
          </p>
          <blockquote className="about-statement__quote">
            Frontend development lets me use all of my brain at once. There's
            logic and problem-solving — the part that likes puzzles and hates
            loose ends — but there's also{" "}
            <em>
              taste, judgment, and the question of how something feels to use.
            </em>{" "}
            I'm happiest when those two things are in tension and I have to find
            the answer that satisfies both.
          </blockquote>
        </div>
      </section>

      <section className="about-bottom">
        <div className="about-looking">
          <p className="section-label">What I'm looking for</p>
          <h2 className="about-section-title">
            Open to <em>LIA placement</em>
            <br />
            and first roles.
          </h2>
          <p className="about-body">
            I'm currently studying frontend development in Stockholm, Sweden,
            and I am looking for both LIA placement and my first developer role.
            I'm particularly drawn to work that sits close to design — products
            where the interface is the product, where the details matter, and
            where someone will notice if you get them wrong. But I will also
            happily explore the world of Fullstack and learn more about the
            Backend of programming.
          </p>
          <Link
            to="/contact"
            className="btn-primary"
            style={{ marginTop: "1.5rem", display: "inline-block" }}
          >
            Get in touch
          </Link>
        </div>

        <div className="about-interests">
          <p className="section-label">Outside of work</p>
          <h2 className="about-section-title">
            A few things
            <br />
            <em>I can't put down.</em>
          </h2>
          <ul className="interests-list">
            {interests.map((item) => (
              <li key={item.label} className="interests-pill">
                <span className="interests-icon">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
          <p className="about-body" style={{ marginTop: "1.5rem" }}>
            I roll dice in Dungeons & Dragons campaigns, read whatever fantasy
            books I can get my hands on, game when I should probably be
            sleeping, and still sew — because some habits are too good to give
            up.
          </p>
        </div>
      </section>
    </main>
  );
}
