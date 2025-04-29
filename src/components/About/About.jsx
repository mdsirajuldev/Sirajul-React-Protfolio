import React from "react";
import { FaUser, FaBriefcase, FaCode } from "react-icons/fa";
import "./About.css";

const aboutItems = [
  {
    title: "Who I Am",
    description:
      "A motivated and creative Frontend Developer with growing expertise in web development.",
    icon: <FaUser className="icon" />,
    bgClass: "bg-purple",
    delay: "delay-1",
  },
  {
    title: "What I Do",
    description:
      "I build responsive, user-friendly websites and web applications with modern technologies.",
    icon: <FaBriefcase className="icon" />,
    bgClass: "bg-red",
    delay: "delay-2",
  },
  {
    title: "My Passion",
    description:
      "Creating intuitive, user-focused web designs and innovating with modern technologies.",
    icon: <FaCode className="icon" />,
    bgClass: "bg-green",
    delay: "delay-3",
  },
];

const aboutData = {
  sections: [
    {
      heading: "Introduction",
      paragraph:
        "I am a motivated and creative Web Design Intern with a growing expertise in web development. Passionate about building user-friendly and visually appealing websites, I thrive in collaborative environments and excel under pressure. With strong problem-solving skills, I am eager to contribute to innovative digital experiences.",
    },
  ],
  contactDetails: [
    {
      label: "Address",
      value:
        "Mohammodpur, Bosila Road, 40 feet Road, Real Estate Mosjid, Mun Garden, Bangladesh",
    },
    { label: "Phone", value: "01759452730" },
    { label: "Email", value: "mdsirajul.dev7@gmail.com" },
  ],
  personalDetails: [
    { label: "Full Name", value: "Md: Sirajul Islam" },
    { label: "Languages", value: "Bengali (Native), English (Proficient)" },
    {
      label: "Social",
      value: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/md-sirajul-islam-dev7/",
        },
        { name: "Github", url: "https://github.com/mdsirajuldev" },
      ],
    },
  ],
};

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="sectionTitle-wrap">
          <h2 className="section-title text-center mb-12">About Me</h2>
        </div>
        <div className="about-grid-wrap">
          {aboutItems.map((item, index) => (
            <div className={`card-item ${item.delay}`} key={index}>
              <div className="card-content">
                <div className={`icon-wrapper ${item.bgClass}`}>
                  {item.icon}
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="about-details-wrapper">
          <div className="about-details-inner">
            {/* Dynamic Intro Sections */}
            {aboutData.sections.map((section, index) => (
              <div key={index}>
                <h3 className="about-details-heading">{section.heading}</h3>
                <p className="about-details-paragraph">{section.paragraph}</p>
              </div>
            ))}

            {/* Contact and Personal Info */}
            <div className="about-details-grid">
              {/* Contact Details */}
              <div>
                <h4 className="about-details-subheading">Contact Details</h4>
                <ul className="about-details-list">
                  {aboutData.contactDetails.map((item, index) => (
                    <li key={index}>
                      <span className="about-details-label">{item.label}:</span>{" "}
                      {item.value}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personal Details */}
              <div>
                <h4 className="about-details-subheading">Personal Details</h4>
                <ul className="about-details-list">
                  {aboutData.personalDetails.map((item, index) => (
                    <li key={index}>
                      <span className="about-details-label">{item.label}:</span>{" "}
                      {Array.isArray(item.value)
                        ? item.value.map((link, linkIndex) => (
                            <span key={linkIndex}>
                              <a
                                className="about-details-link"
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {link.name}
                              </a>
                              {linkIndex < item.value.length - 1 && ", "}
                            </span>
                          ))
                        : item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
