import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-flex">
          <div className="contact-box">
            <h3>Connect</h3>
            <p>
              <a
                href="https://in.linkedin.com/in/yash-darji"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — in/yash-darji
              </a>
            </p>
            <h3>Education</h3>
            <p>
              B.Tech Computer Science &amp; Engineering, Nirma University,
              Ahmedabad — 2019–2023 (CPI: 8.4/10)
            </p>
          </div>
          <div className="contact-box">
            <h3>Social</h3>
            <a
              href="https://github.com/yshraj"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://in.linkedin.com/in/yash-darji"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:yash.darji.coder@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <p className="footer-credit">
              Designed and Developed <br /> by <span>Yash Darji</span>
            </p>
            <p className="footer-copyright">
              <MdCopyright /> 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
