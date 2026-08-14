import { useId, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import applicationReducer, {
  initialState,
} from "../reducers/applicationReducer";
import "./ApplyJob.css";

function ApplyJob() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(
    applicationReducer,
    initialState
  );

  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const resumeId = useId();
  const coverLetterId = useId();

  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch({
      type: "UPDATE_FIELD",
      field: name,
      value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!state.name.trim()) {
      errors.name = "Full name is required";
    }

    if (!state.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Enter a valid email address";
    }

    if (!state.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(state.phone)) {
      errors.phone = "Enter a valid 10-digit phone number";
    }

    if (!state.resume.trim()) {
      errors.resume = "Resume information is required";
    }

    if (!state.coverLetter.trim()) {
      errors.coverLetter = "Cover letter is required";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      dispatch({
        type: "SET_ERRORS",
        errors,
      });

      return;
    }

    dispatch({
      type: "SUBMIT_SUCCESS",
    });
  };

  if (state.submitted) {
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="success-icon">✓</div>

          <h1>Application Submitted!</h1>

          <p>
            Your application for Job ID #{jobId} has been
            submitted successfully.
          </p>

          <button onClick={() => navigate("/jobs")}>
            Browse More Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-page">
      <div className="apply-header">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back to Job
        </button>

        <h1>Apply for This Job</h1>

        <p>
          Complete the form below to submit your application.
        </p>
      </div>

      <form
        className="application-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor={nameId}>
            Full Name
          </label>

          <input
            id={nameId}
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={state.name}
            onChange={handleChange}
          />

          {state.errors.name && (
            <span className="form-error">
              {state.errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor={emailId}>
            Email Address
          </label>

          <input
            id={emailId}
            name="email"
            type="email"
            placeholder="Enter your email"
            value={state.email}
            onChange={handleChange}
          />

          {state.errors.email && (
            <span className="form-error">
              {state.errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor={phoneId}>
            Phone Number
          </label>

          <input
            id={phoneId}
            name="phone"
            type="text"
            placeholder="Enter 10-digit phone number"
            value={state.phone}
            onChange={handleChange}
          />

          {state.errors.phone && (
            <span className="form-error">
              {state.errors.phone}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor={resumeId}>
            Resume
          </label>

          <input
            id={resumeId}
            name="resume"
            type="text"
            placeholder="Enter resume file name or link"
            value={state.resume}
            onChange={handleChange}
          />

          {state.errors.resume && (
            <span className="form-error">
              {state.errors.resume}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor={coverLetterId}>
            Cover Letter
          </label>

          <textarea
            id={coverLetterId}
            name="coverLetter"
            rows="6"
            placeholder="Write a short cover letter"
            value={state.coverLetter}
            onChange={handleChange}
          />

          {state.errors.coverLetter && (
            <span className="form-error">
              {state.errors.coverLetter}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="submit-button"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ApplyJob;