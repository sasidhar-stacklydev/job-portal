import { Link } from "react-router-dom";
import { useJobContext } from "../context/JobContext";
import "./SavedJobs.css";

function SavedJobs() {
  const {
    savedJobs,
    toggleSaveJob,
  } = useJobContext();

  return (
    <div className="saved-jobs-page">

      <div className="saved-header">
        <span className="section-label">
          YOUR COLLECTION
        </span>

        <h1>Saved Jobs</h1>

        <p>
          Jobs you saved for later.
        </p>
      </div>

      {savedJobs.length === 0 ? (
        <div className="empty-saved">

          <div className="empty-icon">
            ♡
          </div>

          <h2>No Saved Jobs</h2>

          <p>
            Save jobs you're interested in and
            find them here later.
          </p>

          <Link to="/jobs">
            Browse Jobs
          </Link>

        </div>
      ) : (
        <div className="saved-grid">

          {savedJobs.map((job) => (
            <div
              className="saved-job-card"
              key={job.id}
            >

              <div className="saved-job-top">

                <div className="api-job-icon">
                  💼
                </div>

                <button
                  onClick={() => toggleSaveJob(job)}
                  className="remove-save"
                >
                  ♥
                </button>

              </div>

              <h3>{job.title}</h3>

              <p>
                {job.description.slice(0, 120)}...
              </p>

              <Link to={`/jobs/${job.id}`}>
                View Job →
              </Link>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default SavedJobs;