import { Link, useNavigate, useParams } from "react-router-dom";

function JobDetails() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const jobs = {
    1: {
      title: "React Developer",
      company: "Tech Solutions",
      location: "Hyderabad",
      type: "Full Time",
      salary: "₹6 - 10 LPA",
      description:
        "We are looking for a React Developer to build modern and responsive web applications.",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Git",
      ],
    },

    2: {
      title: "DevOps Engineer",
      company: "Cloud Technologies",
      location: "Bangalore",
      type: "Full Time",
      salary: "₹7 - 12 LPA",
      description:
        "Join our DevOps team and work with cloud infrastructure, CI/CD and container technologies.",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Terraform",
      ],
    },

    3: {
      title: "Python Developer",
      company: "Innovate Labs",
      location: "Chennai",
      type: "Remote",
      salary: "₹5 - 9 LPA",
      description:
        "Build scalable Python applications and work with modern backend technologies.",
      skills: [
        "Python",
        "Django",
        "REST API",
        "SQL",
        "Git",
      ],
    },
  };

  const job = jobs[jobId];

  if (!job) {
    return (
      <div>
        <h1>Job Not Found</h1>
        <p>The requested job does not exist.</p>

        <Link to="/jobs">
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="job-details">

      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="job-details-card">

        <div className="job-details-header">
          <div>
            <h1>{job.title}</h1>
            <p>{job.company}</p>
          </div>

          <span>{job.type}</span>
        </div>

        <div className="job-info">
          <p>📍 {job.location}</p>
          <p>💰 {job.salary}</p>
        </div>

        <hr />

        <h2>Job Description</h2>

        <p className="description">
          {job.description}
        </p>

        <h2>Required Skills</h2>

        <div className="skills">
          {job.skills.map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}
        </div>

        <button
          className="apply-button"
          onClick={() => navigate(`/jobs/${jobId}/apply`)}
        >
          Apply Now
        </button>

      </div>

    </div>
  );
}

export default JobDetails;