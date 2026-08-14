import { useEffect, useRef } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useJobContext } from "../context/JobContext";
import useJobs from "../hooks/useJobs";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import "./Jobs.css";

function Jobs() {
  const searchInputRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const search = searchParams.get("search") || "";
  const location = searchParams.get("location") || "";

  const { jobs, loading, error } = useJobs();
  const { toggleSaveJob, isJobSaved, } = useJobContext();

  const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const searchValue = formData.get("search");
    const locationValue = formData.get("location");

    const params = {};

    if (searchValue) {
      params.search = searchValue;
    }

    if (locationValue) {
      params.location = locationValue;
    }

    setSearchParams(params);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs-page">

      <section className="jobs-header">
        <h1>Find Your Dream Job</h1>

        <p>
          Search and explore opportunities from top companies.
        </p>

        <form className="job-search-form" onSubmit={handleSearch}>
          <input
            ref={searchInputRef}
            name="search"
            type="text"
            placeholder="Job title or keyword"
            defaultValue={search}
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            defaultValue={location}
          />

          <button type="submit">
            Search
          </button>
        </form>
      </section>

      <div className="jobs-layout">

        <aside className="category-sidebar">
          <h3>Job Categories</h3>

          <Link to="/jobs/categories">
            All Categories
          </Link>

          <Link to="/jobs/categories/frontend">
            Frontend
          </Link>

          <Link to="/jobs/categories/backend">
            Backend
          </Link>

          <Link to="/jobs/categories/devops">
            DevOps
          </Link>
        </aside>

        <section className="jobs-content">

          <div className="search-result">
            {search || location ? (
              <p>
                Showing results for{" "}
                <strong>{search || "all jobs"}</strong>
                {location && ` in ${location}`}
              </p>
            ) : (
              <p>
                Explore our latest job opportunities.
              </p>
            )}
          </div>

          {loading && <Loading />}

          {error && <ErrorMessage message={error} />}

          {!loading && !error && (
            <div className="api-jobs-grid">

              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div className="api-job-card" key={job.id}>

                    <div className="api-job-icon">
                      💼
                    </div>

                    <h3>{job.title}</h3>

                    <p>
                      {job.description.slice(0, 100)}...
                    </p>

                    <div className="api-job-price">
                      ₹{Math.round(job.price * 1000)} / month
                    </div>

                <div className="job-card-actions">

                     <Link to={`/jobs/${job.id}`}>
                        View Details
                    </Link>

                    <button
                        onClick={() => toggleSaveJob(job)}
                        className={
                            isJobSaved(job.id)
                              ? "save-button saved"
                              : "save-button"
                        }
                    >
                        {isJobSaved(job.id) ? "♥ Saved" : "♡ Save"}
                    </button>

                </div>   

                </div>
                ))
              ) : (
                <div className="no-results">
                  <h3>No jobs found</h3>
                  <p>
                    Try a different search keyword.
                  </p>
                </div>
              )}

            </div>
          )}

          <Outlet />

        </section>

      </div>

    </div>
  );
}

export default Jobs;