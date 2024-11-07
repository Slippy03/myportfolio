import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => (
  <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <img
                className={isVisible ? "animate__animated animate__shakeX" : ""}
                src={contactImg}
                alt="Contact Us"
              />
            }
          </TrackVisibility>
        </Col>
        <Col md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact Me</h2>
                <div>
                  <a href="https://github.com/Slippy03">Github : Slippy03</a><br />
                  <a href="mailto:phattharaphon.p03@gmail.com">Email : phattharaphon.p03@gmail.com</a><br />
                  <a href="https://www.instagram.com/taxwy03/">Instagram : taxwy03</a><br />
                  <a href="https://www.facebook.com/TAOWY5678/">Facebook : Phattharaphon Puangngam</a><br />
                  <a href="https://drive.google.com/file/d/1XQpXgcf_B0fuEYXzlSGyDNzV6s4tGlmg/view?usp=drive_link">My Resume</a>
                </div>
              </div>
            }
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
);
