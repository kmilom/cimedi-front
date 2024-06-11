import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';

const SessionPaciente = () => {
    const { idPaciente } = useParams();
    const [paciente, setPaciente] = useState(null);
    const [citas, setCitas] = useState([])
    const navigate = useNavigate(); // Asegúrate de que esto está dentro del cuerpo del componente

    useEffect(() => {
        const fetchPaciente = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/pacientes/${idPaciente}`);
                console.log('Paciente data received:', response.data); // Validar el objeto recibido
                if (response.data.paciente && response.data.paciente.length > 0) {
                    setPaciente(response.data.paciente); // Asumiendo que se recibe un array con los datos del paciente
                }
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        };

        const fetchCitas = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/citas-por-paciente/${idPaciente}`);
                console.log("Citas del paciente:", response.data.Citas);
                setCitas(response.data.Citas);
                console.log("Vector citas:", citas)
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        }

        fetchCitas();
        fetchPaciente();
    }, [idPaciente]);

    if (!paciente) {
        return <p>Loading patient data...</p>;
    }

    const handleApartarCita = () => {
        navigate('/apartar-cita', { state: { idPaciente } });
    };

    return (
        <Container>
            <Row>
                <Col className='py-3'>
                    <Card>
                        <Card.Header>
                            <h2>Paciente: {paciente[1]} {paciente[2]}</h2>
                        </Card.Header>
                        <Card.Body>
                            <Col className='py-1'><strong>ID:</strong> {paciente[0]}</Col>
                            <Col className='py-1'><strong>Nombre:</strong> {paciente[1]}</Col>
                            <Col className='py-1'><strong>Apellido:</strong> {paciente[2]}</Col>
                            <Col className='py-1'><strong>Género:</strong> {paciente[7]}</Col>
                            <Col className='py-1'><strong>EPS:</strong> {paciente[8]}</Col>
                            <Col className='py-1'><strong>Email:</strong> {paciente[3]}</Col>
                            <Col className='py-1'><strong>Fecha de Nacimiento:</strong> {paciente[4]}</Col>
                            <Col className='py-1'><strong>Tipo de Documento:</strong> {paciente[5]}</Col>
                            <Col className='py-1'><strong>Número de Documento:</strong> {paciente[6]}</Col>
                            <Col className='py-1'><Button variant="primary" onClick={handleApartarCita}>Apartar cita</Button></Col>
                            <Col><h3>Citas médicas pendientes</h3></Col>
                            <Col lg = {{ span: 8, offset: 2 }}>
                                {citas.length > 0 ? (
                                    <Table bordered striped hover>
                                        <thead>
                                            <tr>
                                                <th>Médico</th>
                                                <th>Fecha y hora</th>
                                                <th>Especialidad</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {citas.map(cita => (
                                                <tr key={cita.idCitas}>
                                                    <td>{cita.Nombre} {cita.Apellido}</td>
                                                    <td>{cita.Fecha} {cita.Hora}</td>
                                                    <td>{cita.Especialidad}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                )
                                : (
                                    <Col>Ninguna cita pendiente</Col>
                                )}
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SessionPaciente;


