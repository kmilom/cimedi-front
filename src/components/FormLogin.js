import React, { useState } from "react";
import user from "../assets/images/logouser.png"
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const FormLogin = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //const [errorMessage, setErrorMessage] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log('username', username)
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/usuarios', {
            username,
            password,
      });
        }catch(error){
            console.error("Login Error: ", error);
        } 
    }

    return(
        <div>
            <Row>
                <Col className = "py-3">
                    <Image src = { user } roundedCircle style={{ width: '80px', height: '80px' }}/>
                </Col>
            </Row>
            <Row>
            <Form onSubmit={handleLogin}>
                    <Row className="label">
                        <Col md = {{ span: 2, offset: 3 }}><label htmlFor="username">Usuario:</label></Col>
                        <Col md = {{ span: 4 }}><input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        /></Col>
                    </Row>
                    <Row className="label">
                        <Col md = {{ span: 2, offset: 3 }}><label htmlFor="password">Contraseña:</label></Col>
                        <Col md = {{ span: 4 }}><input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        /></Col>
                    </Row>
                    <Row className="label"><Col xs = {{ span: 2, offset: 5 }}><Button variant="primary" type="submit">Ingresar</Button></Col></Row>
                    <Row className="label">
                        <Col xs = {{ span: 8, offset: 2 }}>¿A&uacute;n no tienes un usuario? <Link className="text-decoration-none" to="/registro">Reg&iacute;strate aqu&iacute;</Link></Col>
                    </Row>
                </Form>
            </Row>
        </div>
    )
}

export default FormLogin