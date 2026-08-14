import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <span className="section-label">
          ABOUT JOB PORTAL
        </span>

        <h1>
          Connecting Talent With
          <span> Opportunity</span>
        </h1>

        <p>
          JobPortal is a modern job search platform designed
          to help job seekers discover opportunities and
          connect with companies.
        </p>
      </section>

      <section className="about-content">

        <div className="about-card">
          <h2>Our Mission</h2>

          <p>
            Our mission is to make job searching simple,
            accessible and efficient. We connect talented
            professionals with companies looking for skilled
            people.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Offer</h2>

          <p>
            Job seekers can search jobs, filter opportunities,
            save interesting positions and submit applications
            through a simple and user-friendly platform.
          </p>
        </div>

      </section>

      <section className="stats">

        <div>
          <strong>10K+</strong>
          <span>Active Jobs</span>
        </div>

        <div>
          <strong>2K+</strong>
          <span>Companies</span>
        </div>

        <div>
          <strong>25K+</strong>
          <span>Job Seekers</span>
        </div>

        <div>
          <strong>95%</strong>
          <span>User Satisfaction</span>
        </div>

      </section>

    </div>
  );
}

export default About;