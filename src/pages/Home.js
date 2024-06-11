import React from "react";
import "./styles/Home.css";
import { Col, Row } from "react-bootstrap";
import HeaderHome from "../components/HeaderHome";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <Row className = "home">
            <Col xs = { 12 } >
                <HeaderHome />
            </Col>
            <Col xs = { 12 } className = "py-1" >
                <LandingPage/>
            </Col>
            <Col xs = { 12 } style = {{ paddingTop: '20px' }} id = "footer">
                <Footer />
            </Col>
        </Row>
    )
}
