import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi, I am an <span className="purple">Industrial Engineer</span> passionate about technology
            <br />
             and web development, from <span className="purple">Argentina</span> with experience
            <br />
             in Quality Management Systems (QMS) ISO 9001. 
            <br />
            My focus is on creating comprehensive web solutions, 
            <br />
            combining strong knowledge in frontend development 
            <br />
            with React and backend development with Laravel Inertia.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
