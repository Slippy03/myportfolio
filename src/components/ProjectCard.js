import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} className="d-flex justify-content-center">
      <a href={url} target="_blank" rel="noopener noreferrer" className="project-card-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} className="img-fluid" />
          <div className="proj-txtx text-center">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
