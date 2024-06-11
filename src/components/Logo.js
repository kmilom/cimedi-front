import React from "react"
import logo from "../assets/images/logocimedi.png"
import { Col, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Logo = () => {
    return(
        <Row>
            <Col xs = {{ span: 4, offset: 4}}>
                <Link to = "/">
                    <Image src={ logo } roundedCircle style={{ width: '80px', height: '80px'}}/>
                </Link>
            </Col>
        </Row>
    )
}

export default Logo