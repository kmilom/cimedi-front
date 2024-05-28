import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import MenuAdmin from "./MenuAdmin";
import axios from "axios";

const UserList = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const fetchUsuarios = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/usuarios');
            setUsuarios(response.data.Usuarios);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchUsuarios();
      }, []);

    return(
        <Row>
            <Col xs = { 2 } className="menu">
                <MenuAdmin />
            </Col>
            <Col>
                {usuarios.length > 0 ? (
                    // Render the data here
                    <Table bordered striped hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Usuario</th>
                                <th>Contraseña</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map(item => (
                                <tr key={item.idUsuario}>
                                    <td>{item.idUsuario}</td>
                                    <td>{item.User}</td>
                                    <td>{item.Password}</td>
                                    <td>{item.idRol}</td>
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

export default UserList