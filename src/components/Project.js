import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import ProjectCard from "./ProjectCard";
import { FaHeart } from "react-icons/fa";

function Project() {
  const [likes, setLikes] = useState(100);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", paddingTop: "30px" }}>
              <strong className="purple">My Projects</strong>
            </h1>
            <ProjectCard />
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <button onClick={handleLike} style={heartButtonStyle}>
                <FaHeart style={{ marginRight: "5px" }} /> Like
              </button>
              <div style={{ marginTop: "10px", fontSize: "1.2rem",color:"white" }}>
                <strong>{likes >= 100 ? "100+" : likes}</strong> people liked this project
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

const heartButtonStyle = {
  backgroundColor: "#ff5252",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "1.2rem",
  borderRadius: "25px",
};

export default Project;
