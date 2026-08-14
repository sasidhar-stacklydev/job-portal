import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            Job<span>Portal</span>
          </h2>

          <p>
            Find your dream job and build the career
            you've always wanted.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/companies">Companies</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-column">
          <h3>For Job Seekers</h3>

          <Link to="/jobs">Browse Jobs</Link>
          <Link to="/saved-jobs">Saved Jobs</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>📧 support@jobportal.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Hyderabad, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 JobPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;