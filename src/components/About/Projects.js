import React from 'react'
import { Col, Row } from "react-bootstrap";
import pj01 from '../../Assets/pj-01.png'
import pj02 from '../../Assets/pj-02.png'
import pj03 from '../../Assets/pj-03.png'


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
                    <p className="card-text h6">Tech: Astro, JS, TailwindCss</p>
                    <div style={{ justifyContent: "center"}}>
                        <a 
                            href="https://github.com/leobema/blog-regalo-online" 
                            className="btn btn-light btn-sm" 
                            style={{ marginRight: "10px" }}
                            target="_blank"
                            rel='noreferrer'
                            >
                            Git
                        </a>
                        <a 
                            href="https://blog-regalo-online-fl9tefb04-leobemas-projects.vercel.app/" 
                            className="btn btn-info btn-sm"
                            target="_blank"
                            rel='noreferrer'
                            >
                                Live
                        </a>
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
                    <p className="card-text h6">Tech: Angular, JS, TailwindCss</p>
                    <div style={{ justifyContent: "center"}}>
                        <a 
                            href="https://github.com/leobema/store-ecommerce-todoregalo" 
                            className="btn btn-light btn-sm" 
                            style={{ marginRight: "10px" }}
                            target="_blank"
                            rel='noreferrer'
                            >
                            Git
                        </a>
                        <a 
                            href="https://store-seven-rosy.vercel.app/" 
                            className="btn btn-info btn-sm"
                            target="_blank"
                            rel='noreferrer'
                            >
                                Live
                        </a>
                    </div>
            </div>
        </Col>
        <Col xl={3} lg={1} className="tech-projects">
            <div className="card-body">
                    <img
                        src={pj03}
                        alt="project-01"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                    />
                    <h5 className="card-title h4"
                    style={{ 
                        paddingBottom: "15px" }}
                    >Sales & Expense Control</h5>
                    <p className="card-text h6">Tech: Laravel, JS, Inertia, ReactJs, TailwindCss</p>
                    <div style={{ justifyContent: "center"}}>
                        <a 
                            href="https://github.com/leobema/control-ventas-laravel" 
                            className="btn btn-light btn-sm" 
                            style={{ marginRight: "10px" }}
                            target="_blank"
                            rel='noreferrer'
                            >
                                Git
                        </a>
                    </div>
            </div>
        </Col>
    </Row>
    </div>
  )
}

export default Projects
