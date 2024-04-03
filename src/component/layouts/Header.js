import React from "react";
import "../../assets/css/header.scss";
import { Button, Container, Col, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <div className="header">
        <Container>
          <Row>
            <Col className="logo_contain" lg={5}>
              <div className="logo">Quick<span className="logo_color">Funds</span></div>
            </Col>
            <Col lg={7} className="btn_group menu_contain">
              <div>
                <div className="menu">
                  <Button className="h_home menu" as="a" variant="menu_item">Home</Button>
                  <Button className="h_about" as="a" variant="menu_item">About Us</Button>
                </div>
              </div>
              <div className="sign_btn"><Button variant="outline-danger">Sign In</Button></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Header;