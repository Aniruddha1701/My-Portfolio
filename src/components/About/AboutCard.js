import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aniruddha Patil </span>
         <span> from</span> <span className="purple"> Maharashtra, India.</span>
            <br /> I am a third-year student pursuing B.Tech
            @ VIT.
            <br />
            Additionally, I am enthusiastic about Web Development.
            <br />
            <br />
            Some of my hobbies include: 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Flute 
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
