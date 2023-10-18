import React from "react";
import { Card } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = () => {
  const openProjectLink = () => {
    window.open("https://aniruddha1701.github.io/Annystore.github.io/", "_blank");
  };

  return (
    <Card className="project-card-view" onClick={openProjectLink}>
      <Card.Body>
        <Card.Title className="project-title">E-commerce Website and Login Page</Card.Title>
        <Card.Text className="project-description">
          Developed an e-commerce website using HTML, CSS, JavaScript, and MySQL. Implemented Java Servlet for secure user authentication, ensuring a seamless and secure online ordering platform. Collaborated with front-end developers to enhance the user experience.
        </Card.Text>
        <Card.Text className="project-tech">
          <strong>Technologies Used:</strong> HTML, CSS, JavaScript, MySQL, Java Servlets
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Completed in March 2023</small>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
