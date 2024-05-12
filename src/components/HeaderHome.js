import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import logo from "../assets/images/logocimedi.png"

const HeaderHome = () => {
    return(
        <Row>
            <Col className = "head py-3">
                <Row>
                    <Col xs = {{ span: 1 }} className = "image">
                        <Image src={ logo } roundedCircle style={{ width: '50px', height: '50px' }} />
                    </Col>
                    <Col xs = {{ span: 2, offset: 9 }}>
                        <Button variant = "info">&nbsp;&nbsp;&nbsp;&nbsp;Sign In&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HeaderHome;