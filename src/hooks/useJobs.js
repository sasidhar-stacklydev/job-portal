import { useEffect, useState } from "react";
import { fetchJobs } from "../services/jobApi";

function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadJobs() {
      try {
        setLoading(true);
        setError("");

        const data = await fetchJobs();

        if (isMounted) {
          setJobs(data);
        }
      } catch (err) {
        if (isMounted) {
          setError("Unable to load jobs. Please try again.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadJobs();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    jobs,
    loading,
    error,
  };
}

export default useJobs;