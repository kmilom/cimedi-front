import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";

const FormPersona = () => {
    const [persona, setPersona] = useState({
        Nombre: "",
        Apellido: "",
        Correo: "",
        FechaNacimiento: "",
        idTipoDocumento: "",
        Documento: "",
        idGenero: ""
    });

    const [paciente, setPaciente] = useState({
        idPaciente: "",
        idEPS: ""
    })

    const [generos, setGeneros] = useState([]);
    const [tiposDocumentos, setTiposDocumentos] = useState([]);
    const [eps, setEps] = useState([])

    useEffect(() => {
        const fetchGeneros = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/generos');
                setGeneros(response.data.generos);
            } catch (error) {
                console.error("Error al obtener los géneros: ", error);
            }
        };

        const fetchTiposDocumentos = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/tipos-de-documento');
                setTiposDocumentos(response.data);
            } catch (error) {
                console.error("Error al obtener los tipos de documento: ", error);
            }
        };

        const fetchEPS = async () => {
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/eps')
                setEps(response.data.eps)
            } catch (error) {
                console.error("Error al obtener los tipos de documento: ", error);
            }
        }

        fetchEPS();
        fetchGeneros();
        fetchTiposDocumentos();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "Documento") {
            // Permitir solo números
            const regex = /^[0-9\b]+$/;
            if (value === "" || regex.test(value)) {
                setPersona(prevState => ({
                    ...prevState,
                    [name]: value
                }));
            }
        } else if (name === "idEPS"){
            setPaciente(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else {
            setPersona(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleForm = async (event) => {
        event.preventDefault();
        console.log('Persona', persona);
        try {
            const responsePersona = await axios.post('http://127.0.0.1:8000/api/crear-persona', persona);

            // Obtener el id de la persona creada
            const idPersona = responsePersona.data.idPersona;
            console.log(idPersona)
            console.log(paciente)

            // Crear usuario con el id de la persona y el id de EPS
            const newPaciente = {
                idPaciente: idPersona,
                idEPS: paciente.idEPS
            };
            console.log('Nuevo Usuario:', newPaciente);

            const usuario = {
                idUsuario: idPersona,
                User: persona.Documento,
                Password: persona.Documento,
                idRol: 3
            }

            // Enviar datos del usuario al backend
            const responsePaciente = await axios.post('http://127.0.0.1:8000/api/crear-paciente', newPaciente);
            console.log('ID Paciente:', responsePaciente.data.idPaciente);

            const responseUsuario = await axios.post('http://127.0.0.1:8000/api/crear-usuario', usuario)
            console.log('Usuario', responseUsuario.data.idUsuario)
        } catch (error) {
            console.error("Login Error: ", error);
        }
    };

    return (
        <Form onSubmit={handleForm}>
            <Row className="mb-3">
                <Form.Group as={Col} md={{ span: 4, offset: 1 }}>
                    <Form.Label htmlFor="nombre">Nombre:</Form.Label>
                    <Form.Control
                        type="text"
                        id="nombre"
                        name="Nombre"
                        value={persona.Nombre}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} md={{ span: 4, offset: 1 }}>
                    <Form.Label htmlFor="apellido">Apellido:</Form.Label>
                    <Form.Control
                        type="text"
                        id="apellido"
                        name="Apellido"
                        value={persona.Apellido}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md={{ span: 4, offset: 1 }}>
                    <Form.Label htmlFor="email">Correo:</Form.Label>
                    <Form.Control
                        type="email"
                        id="email"
                        name="Correo"
                        value={persona.Correo}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group as={Col} md={{ span: 4, offset: 1 }}>
                    <Form.Label htmlFor="fechaNacimiento">Fecha de Nacimiento:</Form.Label>
                    <Form.Control
                        type="date"
                        id="fechaNacimiento"
                        name="FechaNacimiento"
                        value={persona.FechaNacimiento}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md={{ span: 4, offset: 1 }}>
                    <Form.Label htmlFor="idTipoDocumento">Tipo de Documento:</Form.Label>
                    <Form.Control
                        as="select"
                        id="idTipoDocumento"
                        name="idTipoDocumento"
                        value={persona.idTipoDocumento}
                        onChange={handleChange}
                    >
                        <option value="">Seleccione un tipo de documento</option>
                        {tiposDocumentos.map((tipo) => (
                            <option key={tipo.idTipoDocumento} value={tipo.idTipoDocumento}>
                                {tipo.Tipo}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md={{ span: 4, offset: 1 }}>
                    <Form.Label htmlFor="Documento">Número de Documento:</Form.Label>
                    <Form.Control
                        type="text"
                        id="Documento"
                        name="Documento"
                        value={persona.Documento}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md={{ span: 4, offset: 1 }}>
                    <Form.Label htmlFor="idGenero">Género:</Form.Label>
                    <Form.Control
                        as="select"
                        id="idGenero"
                        name="idGenero"
                        value={persona.idGenero}
                        onChange={handleChange}
                    >
                        <option value="">Seleccione un género</option>
                        {generos.map((genero) => (
                            <option key={genero.idGenero} value={genero.idGenero}>
                                {genero.Genero}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md={{ span: 4, offset: 1 }}>
                    <Form.Label htmlFor="idEPS">EPS:</Form.Label>
                    <Form.Control
                        as="select"
                        id="idEPS"
                        name="idEPS"
                        value={paciente.idEPS}
                        onChange={handleChange}
                    >
                        <option value="">Seleccione una EPS</option>
                        {eps.map((item) => (
                            <option key={item.idEPS} value={item.idEPS}>
                                {item.Nombre}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Col md={{ span: 2, offset: 5 }}>
                    <Button variant="primary" type="submit">Registrar</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default FormPersona;
