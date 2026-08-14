import { createContext, useContext, useState } from "react";

const JobContext = createContext();

export function JobProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState([]);

  const toggleSaveJob = (job) => {
    setSavedJobs((currentJobs) => {
      const alreadySaved = currentJobs.some(
        (savedJob) => savedJob.id === job.id
      );

      if (alreadySaved) {
        return currentJobs.filter(
          (savedJob) => savedJob.id !== job.id
        );
      }

      return [...currentJobs, job];
    });
  };

  const isJobSaved = (jobId) => {
    return savedJobs.some(
      (job) => job.id === jobId
    );
  };

  return (
    <JobContext.Provider
      value={{
        savedJobs,
        toggleSaveJob,
        isJobSaved,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export function useJobContext() {
  return useContext(JobContext);
}