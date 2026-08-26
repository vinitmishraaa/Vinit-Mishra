import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight
} from "lucide-react";

import personal from "../data/personal";

const contacts = [
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: personal.links.linkedin,
    icon: Linkedin
  },
  {
    label: "GitHub",
    value: "View my repositories",
    href: personal.links.github,
    icon: Github
  },
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    icon: Phone
  },
  {
    label: "Instagram",
    value: "Follow me",
    href: personal.links.instagram,
    icon: Instagram
  }
];

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">06 — Contact</span>

          <h2 className="section-title">
            Let's <span className="gradient-text">connect.</span>
          </h2>

          <p className="section-description">
            Whether you want to talk about a project, technology, or just
            connect, you can find me here.
          </p>
        </div>

        <div className="contact-wrapper glass-card">
          <div className="contact-intro">
            <span className="section-label">
              GET IN TOUCH
            </span>

            <h3 className="contact-title">
              Have an idea?
              <br />
              Let's build{" "}
              <span className="gradient-text">
                something.
              </span>
            </h3>

            <p>
              I'm always interested in learning, building new projects,
              exploring technologies, and connecting with people.
            </p>

            <a
              href={`mailto:${personal.email}`}
              className="btn btn-primary contact-email"
            >
              Send me an email
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="contact-links">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.label === "Email" ||
                    contact.label === "Phone"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    contact.label === "Email" ||
                    contact.label === "Phone"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="contact-card"
                >
                  <div className="contact-card-icon">
                    <Icon size={19} />
                  </div>

                  <div className="contact-card-content">
                    <span>{contact.label}</span>
                    <strong>{contact.value}</strong>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="contact-card-arrow"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;