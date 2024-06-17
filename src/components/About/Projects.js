import React from 'react'
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import pj01 from '../../Assets/pj-01.png'
import pj02 from '../../Assets/pj-02.png'

function Projects() {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xl={3} lg={1} className="tech-projects">
            <div className="card-body">
                    <img
                        src={pj01}
                        alt="project-01"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                    />
                    <h5 className="card-title h4"
                    style={{ 
                        paddingBottom: "15px" }}
                    >Blog Todo Regalo</h5>
                    <p className="card-text h6">With supporting text below as a natural lead-in to additional content.</p>
                    <div style={{ justifyContent: "center"}}>
                        <button as={Link} to="https://github.com/leobema/blog-regalo-online" className="btn btn-light btn-sm" style={{ marginRight: "10px" }}>Git</button>
                        <button href="https://blog-regalo-online-fl9tefb04-leobemas-projects.vercel.app/" className="btn btn-info btn-sm">Live</button>
                    </div>
            </div>
        </Col>
        <Col xl={3} lg={1} className="tech-projects">
            <div className="card-body">
                    <img
                        src={pj02}
                        alt="project-01"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                    />
                    <h5 className="card-title h4"
                    style={{ 
                        paddingBottom: "15px" }}
                    >Ecommerce</h5>
                    <p className="card-text h6">With supporting text below as a natural lead-in to additional content.</p>
                    <div style={{ justifyContent: "center"}}>
                        <button href="https://github.com/leobema/store-ecommerce-todoregalo" className="btn btn-light btn-sm" style={{ marginRight: "10px" }}>Git</button>
                        <button href="https://store-seven-rosy.vercel.app/" className="btn btn-info btn-sm">Live</button>
                    </div>
            </div>
        </Col>
        <Col xl={3} lg={1} className="tech-projects">
            <div className="card-body">
                    <img
                        src={pj01}
                        alt="project-01"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                    />
                    <h5 className="card-title h4"
                    style={{ 
                        paddingBottom: "15px" }}
                    >Sales & Expense Control</h5>
                    <p className="card-text h6">With supporting text below as a natural lead-in to additional content.</p>
                    <div style={{ justifyContent: "center"}}>
                        <button href="https://github.com/leobema/control-ventas-laravel" className="btn btn-light btn-sm" style={{ marginRight: "10px" }}>Git</button>
                    </div>
            </div>
        </Col>
    </Row>
    </div>
  )
}

export default Projects
