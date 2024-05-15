import React, { useState } from "react";
import user from "../assets/images/logouser.png"
import { Button, Col, Form, Image, Row } from "react-bootstrap";

const FormLogin = () => {

    const [username, setUsername] = useState('')
    const [password, serPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleLogin = async (event) => {
        try{

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
                <Form>
                    <Col xs = {{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="username" placeholder="Ingrese su usuario" />
                        </Form.Group>
                    </Col>
                    <Col xs = {{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                    </Col>
                    <Button variant="info" type="submit">
                        Ingresar
                    </Button>
                </Form>
            </Row>
        </div>
    )
}

export default FormLogin