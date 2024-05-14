import React from "react";
import HeaderHome from "../components/HeaderHome";
import LandingPage from "../components/LandingPage";
import "./styles/Home.css"
import { Col, Row } from "react-bootstrap";

export default function Home(){
    return(
        <div className="home">
            <Row>
                <Col xs = { 12 } >
                    <HeaderHome />
                </Col>
            </Row>
            <Row>
                <Col xs = { 12 } className="py-1" id = "box">
                    <LandingPage/>
                </Col>
            </Row>
        </div>
    )
}
