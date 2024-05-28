import React from "react";
import { Col, Row } from "react-bootstrap";
import MenuAdmin from "../components/MenuAdmin";
import "./styles/sessionAdmin.css"


export default function SesionAdmin(){

  return(
    <Row>
        <Col xs = { 2 } className="menu">
          <MenuAdmin />
        </Col>
        
      </Row>
  )
}