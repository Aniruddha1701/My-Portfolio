import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import "./Home.css";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [viewCount, setViewCount] = useState(
    parseInt(localStorage.getItem("viewCount")) || 0
  );

  useEffect(() => {
    const updatedViewCount = viewCount + 1;
    setViewCount(updatedViewCount);
    localStorage.setItem("viewCount", updatedViewCount.toString());
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#ffffff" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello, I'm Aniruddha Patil, <span className="purple">From Maharashtra, India.</span>
              I am fluent in classics like <span className="purple">C++ and Python</span>. 
              With a strong foundation in programming languages and technologies, 
              <span>I excel in both frontend and backend development</span>
              <span> My problem-solving 
              skills have earned me the following accolades:
              <ul>
                <li>LeetCode Contest Rating: 1460</li>
                <li>CodeChef Rank: 2-Star | Rating: 1470</li>
              </ul>
              </span>
              <br></br>

              <h3><strong>You can reach out to me at:</strong></h3>
              <br />
              <strong>Email:</strong> aniruddhap66@gmail.com
              <br />
              <strong>LeetCode:</strong> <a href="https://leetcode.com/anirudhpatil_" target="_blank" rel="noreferrer">leetcode.com/anirudhpatil_</a>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Aniruddha1701"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillTwitterCircle/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aniruddha-patil1701/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anirudhpatil_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="home-about-views">
            <h4 style={{ color: "#ffffff" }}>Happy Visits❤️</h4>
            <p style={{ color: "#ffffff" }}>Total views: {viewCount}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
