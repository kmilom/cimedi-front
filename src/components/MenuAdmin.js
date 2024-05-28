import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuAdmin = () => {
    return(
        <Row>
            <Col xs = { 12 }>
                Dashboard
            </Col>
            <Col xs = { 12 }>
                <Link to = "/dashboard/usuarios" className="text-decoration-none">Usuarios</Link>
            </Col>
            <Col xs = { 12 }>
                <Link to = "/dashboard/medicos" className="text-decoration-none">Médicos</Link>
            </Col>
        </Row>
    )
}

export default MenuAdmin