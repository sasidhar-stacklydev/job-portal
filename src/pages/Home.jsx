import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const categories = [
    {
      icon: "💻",
      title: "IT & Software",
      jobs: "1,250+ Jobs",
    },
    {
      icon: "☁️",
      title: "DevOps & Cloud",
      jobs: "850+ Jobs",
    },
    {
      icon: "📊",
      title: "Data & Analytics",
      jobs: "720+ Jobs",
    },
    {
      icon: "🎨",
      title: "Design",
      jobs: "540+ Jobs",
    },
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "React Developer",
      company: "Tech Solutions",
      location: "Hyderabad",
      type: "Full Time",
      salary: "₹6 - 10 LPA",
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "Cloud Technologies",
      location: "Bangalore",
      type: "Full Time",
      salary: "₹7 - 12 LPA",
    },
    {
      id: 3,
      title: "Python Developer",
      company: "Innovate Labs",
      location: "Chennai",
      type: "Remote",
      salary: "₹5 - 9 LPA",
    },
  ];

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🚀 Find your next opportunity</span>

          <h1>
            Find a Job That
            <span> Fits Your Future</span>
          </h1>

          <p>
            Discover thousands of job opportunities from top companies
            and take the next step in your career.
          </p>

          {/* Search Box */}
          <div className="search-box">
            <div className="search-field">
              <span>🔍</span>
              <input
                type="text"
                placeholder="Job title, skills or keywords"
              />
            </div>

            <div className="search-field">
              <span>📍</span>
              <input
                type="text"
                placeholder="Location"
              />
            </div>

            <Link to="/jobs" className="search-btn">
              Search Jobs
            </Link>
          </div>

          <div className="popular-searches">
            <span>Popular:</span>
            <Link to="/jobs">React Developer</Link>
            <Link to="/jobs">DevOps Engineer</Link>
            <Link to="/jobs">Python Developer</Link>
            <Link to="/jobs">Data Analyst</Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="section-header">
          <div>
            <span className="section-label">EXPLORE OPPORTUNITIES</span>
            <h2>Popular Job Categories</h2>
          </div>

          <Link to="/jobs" className="view-link">
            View All Jobs →
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.title}>
              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.title}</h3>
              <p>{category.jobs}</p>

              <Link to="/jobs">Explore Jobs →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="section featured-section">
        <div className="section-header">
          <div>
            <span className="section-label">LATEST OPPORTUNITIES</span>
            <h2>Featured Jobs</h2>
          </div>

          <Link to="/jobs" className="view-link">
            View All →
          </Link>
        </div>

        <div className="jobs-grid">
          {featuredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-top">
                <div className="company-logo">
                  {job.company.charAt(0)}
                </div>

                <span className="job-type">
                  {job.type}
                </span>
              </div>

              <h3>{job.title}</h3>

              <p className="company-name">
                {job.company}
              </p>

              <p className="job-location">
                📍 {job.location}
              </p>

              <div className="job-bottom">
                <strong>{job.salary}</strong>

                <Link to={`/jobs/${job.id}`}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="why-content">
          <span className="section-label">WHY JOB PORTAL?</span>

          <h2>
            Everything You Need to
            <span> Build Your Career</span>
          </h2>

          <p>
            We make job searching easier by connecting talented
            professionals with companies looking for great people.
          </p>

          <div className="features">
            <div className="feature">
              <div>🔎</div>
              <section>
                <h3>Easy Job Search</h3>
                <p>
                  Find relevant jobs quickly using powerful search
                  and filters.
                </p>
              </section>
            </div>

            <div className="feature">
              <div>🏢</div>
              <section>
                <h3>Top Companies</h3>
                <p>
                  Discover opportunities from leading companies.
                </p>
              </section>
            </div>

            <div className="feature">
              <div>⚡</div>
              <section>
                <h3>Simple Application</h3>
                <p>
                  Apply for jobs with an easy and user-friendly process.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Find Your Next Job?</h2>

        <p>
          Explore thousands of opportunities and take the next
          step in your career.
        </p>

        <Link to="/jobs" className="cta-btn">
          Explore Jobs →
        </Link>
      </section>

    </div>
  );
}

export default Home;