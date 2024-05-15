import React from "react";
import { Col, Row } from "react-bootstrap";

const LandingPage = () => {
    return(
        <Row id = 'box' className="border">
            <Col style={{ backgroundColor: "white" }} >
                <Row>
                    <Col xs = { 12 } md = { 6 } className = "imagen-landing" style={{ minHeight: '70vh' }}>
                        
                    </Col>
                    <Col xs = { 12 } md = { 6 }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default LandingPage