import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
    return(
        <Row className = "footer">
            <Col xs = { 12 }>
                <Row>
                    <Col className="py-2"><h2>Informaci&oacute;n de contacto</h2></Col>
                </Row>
                <Row>
                    <Col>Linea gratuita: 123 456 7890</Col>
                </Row>
                <Row>
                    <Col>Direcci&oacute;n: calle 123 #45 - 678</Col>
                </Row>
                <Row>
                    <Col className="py-3">T&eacute;rminos y condiciones</Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Footer