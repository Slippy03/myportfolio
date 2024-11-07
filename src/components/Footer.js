import { Container, Row, Col } from "react-bootstrap";
import github from "../assets/img/github.png"
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/ig.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <br/>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1 style={{color:"while"}}>TPP</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Slippy03"><img src={github} alt="Icon" /></a>
              <a href="https://www.facebook.com/TAOWY5678/"><img src={facebook} alt="Icon" /></a>
              <a href="https://www.instagram.com/taxwy03/"><img src={instagram} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
