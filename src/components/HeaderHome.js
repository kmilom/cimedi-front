import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const HeaderHome = () => {
    return(
        <Row>
            <Col className = "head py-3">
                <Row>
                    <Col xs = {{ span: 1 }} className = "image">
                        <Logo />
                    </Col>
                    <Col xs = {{ span: 4, offset: 7 }} md = {{ span: 3, offset: 8 }} className = "py-3">
                        <Link to = "/login">
                            <Button variant = "info">&nbsp;&nbsp;&nbsp;&nbsp;Sign In&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                        </Link>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HeaderHome;