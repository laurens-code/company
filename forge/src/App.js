import ScholarForgeLayout from "./ScholarForgeLayout";
import "./ScholarForgeLayout.css";

export default function Home() {
  return (
    <ScholarForgeLayout>

      {/* HERO */}
      <section className="hero">
        <h2>Forging the Future of Learning & Technology</h2>
        <p>ScholarForge unites education, mentorship, and coding mastery into one powerful ecosystem.</p>
        <button className="cta">Explore ScholarForge</button>
      </section>

      {/* OVERVIEW */}
      <section id="about" className="overview">
        <h3>Our Mission</h3>
        <p>
          We build pathways for learners, mentors, and developers to grow through structured guidance,
          modern tools, and community-driven innovation.
        </p>
      </section>

      {/* SUB‑BRANDS */}
      <section id="brands" className="brands">
        <div className="brand-card">
          <h4>MentorBridge</h4>
          <p>Connecting learners with expert mentors for real-world growth.</p>
          <button>Learn More</button>
        </div>

        <div className="brand-card">
          <h4>CodeClimb</h4>
          <p>Helping developers climb from fundamentals to advanced mastery.</p>
          <button>Start Coding</button>
        </div>
      </section>

    </ScholarForgeLayout>
  );
}
