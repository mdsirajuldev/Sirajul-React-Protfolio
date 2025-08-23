import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const contactInfo = [
  {
    icon: <MdEmail className="icon" />,
    label: "Email",
    value: "mdsirajul.dev7@gmail.com",
    link: "mailto:mdsirajul.dev7@gmail.com",
    color: "primary",
  },
  {
    icon: <FaGithub className="icon" />,
    label: "GitHub",
    value: "mdsirajuldev",
    link: "https://github.com/mdsirajuldev",
    color: "secondary",
  },
  {
    icon: <FaLinkedinIn className="icon" />,
    label: "LinkedIn",
    value: "md-sirajul-islam-dev7",
    link: "https://www.linkedin.com/in/md-sirajul-islam-dev7/",
    color: "blue",
  },
  {
    icon: <FaPhoneAlt className="icon" />,
    label: "Phone",
    value: "01759452730",
    link: null,
    color: "accent",
  },
];

function Contact() {
  return (
    <div id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="sectionTitle-wrap">
          <h2 className="section-title text-center mb-12">Contact</h2>
        </div>
        <div className="contact-grid">

          <div className="contact-container">
            <h3 className="form-title">Let's Connect</h3>
            <p className="contact-description">
              I'm currently available for freelance work and full-time
              opportunities. Feel free to reach out if you have any questions or
              just want to say hi!
            </p>

            <div className="contact-links">
              {contactInfo.map((item, idx) => {
                const Wrapper = item.link ? "a" : "div";
                const props = item.link
                  ? {
                      href: item.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "contact-link",
                    }
                  : { className: "contact-link" };

                return (
                  <Wrapper {...props} key={idx}>
                    <div className={`icon-circle ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="label">{item.label}</div>
                      <div className="value">{item.value}</div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
