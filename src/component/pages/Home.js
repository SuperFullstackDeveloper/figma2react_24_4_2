import React from "react";
import { Button, Row, Col, Container, Form, InputGroup } from "react-bootstrap"
import "../../assets/css/home.scss"

const Home = () => {
  return (
    <>
      <div className="home">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="home_content">
                <div className="home_title">Quick and Easy Loans for Your Financial Needs.</div>
                <div className="home_text">Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.</div>
                <Button variant="outline-danger">Sign In</Button>
              </div>
            </Col>
            <Col lg={5}>
              <div className="home_img">
                <img className="img-fluid" src="./home.png" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="about_content">
                <div className="about_title">About Us</div>
                <div className="about_text">QuickFunds- Your trusted financial partner for loans. Quick approvals, competitive rates, and personalized solutions to meet your unique needs. Empowering you to achieve your financial goals. Apply online today!</div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="form">
                <div className="form-input">
                  <div className="form-label">Your Name</div>
                  <InputGroup>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </div>
                <div className="form-input">
                  <div className="form-label">Phone number</div>
                  <InputGroup>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </div>
                <div className="form-input">
                  <div className="form-label">Email address</div>
                  <InputGroup>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </div>
                <div className="send_btn">
                  <Button variant="outline-danger">SEND</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;