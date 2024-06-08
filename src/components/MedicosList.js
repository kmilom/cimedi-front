import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import MenuAdmin from "./MenuAdmin";
import axios from "axios";

const MedicosList = () => {

    const [medicos, setMedicos] = useState([])

    useEffect(() => {
        const fetchMedicos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/medicos-info');
                setMedicos(response.data.Medicos);
              } catch (error) {
                console.error('Error:', error);
              }
        }

        fetchMedicos();
    }, [])

    return(
        <Row>
            <Col xs = { 2 } className="menu">
                <MenuAdmin />
            </Col>
            <Col>
            {medicos.length > 0 ? (
                    // Render the data here
                    <Table bordered striped hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Especialidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicos.map(item => (
                                <tr key={item.idMedico}>
                                    <td>{item.idMedico}</td>
                                    <td>{item.Nombre}</td>
                                    <td>{item.Apellido}</td>
                                    <td>{item.Especialidad}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p>Loading data...</p>
                )}
            </Col>
        </Row>
    )
}

export default MedicosList