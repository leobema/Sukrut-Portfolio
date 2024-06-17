import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import avatar from "../../Assets/avatar.png";
import Projects from "./Projects";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          My  <strong className="purple">Projects </strong>
        </h1>
        <Projects />

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ 
              
              display: "flex",
              justifyContent: "center",
              alignItems: "center", 
              overflow: "hidden", 
              paddingTop: "30px", 
              paddingBottom: "30px" }}
            
            className="about-img circular-image"
          >
            <Tilt>
            <img src={avatar} alt="about" className="img-fluid rounded-circle" />
            </Tilt>
          </Col>
        </Row>
        

      </Container>
    </Container>
  );
}

export default About;
