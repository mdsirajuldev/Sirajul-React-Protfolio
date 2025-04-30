import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="sectionTitle-wrap">
          <h2 className="section-title text-center mb-12">Experience</h2>
        </div>
        <div className="contact-grid">
          <div className="card">
            <div className="card-content">
              <h3 className="form-title">Send Me a Message</h3>
              <form className="form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Subject
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Subject"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="form-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="contact-container">
            <h3 className="form-title">Let's Connect</h3>
            <p className="contact-description">
              I'm currently available for freelance work and full-time
              opportunities. Feel free to reach out if you have any questions or
              just want to say hi!
            </p>
            <div className="contact-links">
              <a
                href="mailto:mdsirajul.dev7@gmail.com"
                className="contact-link"
              >
                <div className="icon-circle primary">
                  <MdEmail className="icon" />
                </div>
                <div>
                  <div className="label">Email</div>
                  <div className="value">mdsirajul.dev7@gmail.com</div>
                </div>
              </a>

              <a
                href="https://github.com/mdsirajuldev"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="icon-circle secondary">
                  <FaGithub className="icon" />
                </div>
                <div>
                  <div className="label">GitHub</div>
                  <div className="value">mdsirajuldev</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/md-sirajul-islam-dev7/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="icon-circle blue">
                  <FaLinkedinIn className="icon" />
                </div>
                <div>
                  <div className="label">LinkedIn</div>
                  <div className="value">md-sirajul-islam-dev7</div>
                </div>
              </a>

              <div className="contact-link">
                <div className="icon-circle accent">
                  <FaPhoneAlt className="icon" />
                </div>
                <div>
                  <div className="label">Phone</div>
                  <div className="value">01759452730</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
