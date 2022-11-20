import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-header">
              
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻 
                </span>
              </h1>

              <h1 className="heading-name">
                Nice to
                <strong className="main-name"> meet you</strong>
              </h1>
            </Col>

            <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
