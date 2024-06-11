import React from "react";
import "./styles/login.css";
import { Col, Row } from "react-bootstrap";
import Logo from "../components/Logo";
import FormLogin from "../components/FormLogin";

export default function Login() {

  return(
    <Row className="box">
      <Col>
        <Row  id="soy?">
          <Col lg = {{ span: 4, offset: 4 }} xs = {{span: 10, offset: 1 }} className = "py-4"><Logo /></Col>
        </Row>
        <Row >
          <Col lg = {{span: 4, offset: 4}} xs = {{span: 10, offset: 1 }} className = "boxform"><FormLogin /></Col>
        </Row>
      </Col>
    </Row>
  )
}
