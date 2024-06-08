import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const SessionPaciente = () => {
    const { idPaciente } = useParams();
    const [paciente, setPaciente] = useState(null);
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
                <Col>
                    <Card>
                        <Card.Header>
                            <h2>Paciente: {paciente[1]} {paciente[2]}</h2>
                        </Card.Header>
                        <Card.Body>
                            <p><strong>ID:</strong> {paciente[0]}</p>
                            <p><strong>Nombre:</strong> {paciente[1]}</p>
                            <p><strong>Apellido:</strong> {paciente[2]}</p>
                            <p><strong>Email:</strong> {paciente[3]}</p>
                            <p><strong>Fecha de Nacimiento:</strong> {paciente[4]}</p>
                            <p><strong>Tipo de Documento:</strong> {paciente[5]}</p>
                            <p><strong>Número de Documento:</strong> {paciente[6]}</p>
                            <p><strong>Género:</strong> {paciente[7]}</p>
                            <p><strong>EPS:</strong> {paciente[8]}</p>
                            <Button variant="primary" onClick={handleApartarCita}>Apartar cita</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SessionPaciente;


