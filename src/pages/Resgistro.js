import React from "react";
import { Col, Row } from "react-bootstrap"
import Logo from "../components/Logo";
import FormPersona from "../components/FormPersona";
import "./styles/registro.css";

export default function Registro(){
    return(
        <div>
            <Row>
                <Col xs={12}  className = "header">
                    <Col xs = {{ span: 2, offset: 5 }} className = 'logo'>
                        <Logo />
                    </Col>
                </Col>
            </Row>
            <div className="registro">
                <div className="overlayregistro">
                    <div className="boxformregistro">
                        <FormPersona />
                    </div>
                </div>
            </div>
        </div>
    )
}