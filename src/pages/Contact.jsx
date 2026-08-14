import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <div className="contact-page">

      <section className="contact-header">
        <span className="section-label">
          GET IN TOUCH
        </span>

        <h1>Contact Us</h1>

        <p>
          Have a question or need help? Our team is here
          to help you.
        </p>
      </section>

      <div className="contact-layout">

        <div className="contact-info">

          <h2>Let's Talk</h2>

          <p>
            Whether you have a question about jobs,
            applications or your account, feel free
            to contact us.
          </p>

          <div className="contact-item">
            <strong>📧 Email</strong>
            <span>support@jobportal.com</span>
          </div>

          <div className="contact-item">
            <strong>📞 Phone</strong>
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <strong>📍 Location</strong>
            <span>Hyderabad, India</span>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="contact-field">
            <label>Name</label>

            <input
              type="text"
              required
              placeholder="Your name"
            />
          </div>

          <div className="contact-field">
            <label>Email</label>

            <input
              type="email"
              required
              placeholder="Your email"
            />
          </div>

          <div className="contact-field">
            <label>Message</label>

            <textarea
              rows="6"
              required
              placeholder="Write your message"
            />
          </div>

          <button type="submit">
            Send Message
          </button>

          {submitted && (
            <p className="contact-success">
              Message sent successfully!
            </p>
          )}

        </form>

      </div>

    </div>
  );
}

export default Contact;