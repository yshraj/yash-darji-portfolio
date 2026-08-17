import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const EMAIL = "yash.darji.coder@gmail.com";

const ELSEWHERE = [
  { label: "GitHub", href: "https://github.com/yshraj" },
  { label: "LinkedIn", href: "https://in.linkedin.com/in/yash-darji" },
  { label: "Résumé", href: "/Yash-Darji_Resume.pdf" },
];

const Contact = () => {
  return (
    <footer className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-container">
        <div className="section-head" data-reveal>
          <p className="section-label">Contact</p>
          <h2 className="section-title" id="contact-title">
            Got something that has to <em>hold up</em> in production?
          </h2>
        </div>

        <a className="contact-email" data-reveal href={`mailto:${EMAIL}`} data-cursor="disable">
          <span>{EMAIL}</span>
          <MdArrowOutward aria-hidden="true" />
        </a>

        <div className="contact-meta" data-reveal>
          <div className="contact-col">
            <h3>Elsewhere</h3>
            <ul>
              {ELSEWHERE.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                  >
                    {label}
                    <MdArrowOutward aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-col">
            <h3>Currently</h3>
            <p>
              Senior AI Engineer at WebileApps,
              <br />
              on a client engagement with Celigo.
            </p>
          </div>

          <div className="contact-col contact-colophon">
            <h3>Colophon</h3>
            <p>
              Designed and built by <span>Yash Darji</span>.
              <br />
              React, three.js, and GSAP.
            </p>
            <p className="contact-copyright">© 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
