import { Container, Row, Col, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "KMUNITY",
      description: "Library Mobile Application",
      imgUrl: projImg1,
      url: "https://github.com/Slippy03/KMUNITY" 
    },
    {
      title: "Flutter Coffee Shop App",
      description: "Design & Development",
      imgUrl: projImg2,
      url: "https://github.com/Slippy03/Project-Flutter-Clone-App" 
    },
    {
      title: "RiceGuard",
      description: "Farmer Helper App Thesis",
      imgUrl: projImg3,
      url: "https://github.com/Slippy03/Project_2024" 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Some of my projects while I'm studying</p>

                <Carousel controls={true} indicators={false} interval={null} className="project-carousel" slide={true}>
                  {projects.map((project, index) => (
                    <Carousel.Item key={index}>
                      <Row className="justify-content-center">
                        <Col md={8} className="d-flex justify-content-center"> 
                          <ProjectCard {...project} />
                        </Col>
                      </Row>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
