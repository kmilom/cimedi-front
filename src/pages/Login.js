import React from "react";
import "./styles/login.css";
import { Col, Row } from "react-bootstrap";
import Logo from "../components/Logo";
import FormLogin from "../components/FormLogin";

export default function Login() {
  return (
    <div className="login">
      <div className="overlay">
        <div className="boxform">
          <FormLogin />
        </div>
      </div>
      <Row>
        <Col xs={12}  className = "header">
            <Col xs = {{ span: 2, offset: 5 }} className = 'logo'>
                <Logo />
            </Col>
        </Col>
      </Row>
    </div>
  );
}
