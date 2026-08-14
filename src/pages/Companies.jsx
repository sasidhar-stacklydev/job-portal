import { Link } from "react-router-dom";
import "./Companies.css";

function Companies() {
  const companies = [
    {
      id: 1,
      name: "Tech Solutions",
      industry: "Information Technology",
      location: "Hyderabad",
      jobs: 120,
    },
    {
      id: 2,
      name: "Cloud Technologies",
      industry: "Cloud & DevOps",
      location: "Bangalore",
      jobs: 85,
    },
    {
      id: 3,
      name: "Innovate Labs",
      industry: "Software Development",
      location: "Chennai",
      jobs: 65,
    },
    {
      id: 4,
      name: "Digital Systems",
      industry: "Technology",
      location: "Pune",
      jobs: 95,
    },
  ];

  return (
    <div className="companies-page">

      <section className="companies-header">
        <span className="section-label">
          TOP EMPLOYERS
        </span>

        <h1>Explore Top Companies</h1>

        <p>
          Discover companies hiring talented professionals
          across different industries.
        </p>
      </section>

      <div className="companies-grid">

        {companies.map((company) => (
          <div
            className="company-card"
            key={company.id}
          >

            <div className="company-logo-large">
              {company.name.charAt(0)}
            </div>

            <h2>{company.name}</h2>

            <p>{company.industry}</p>

            <div className="company-info">
              <span>📍 {company.location}</span>
              <span>💼 {company.jobs} Jobs</span>
            </div>

            <Link to="/jobs">
              View Jobs →
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Companies;