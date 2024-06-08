import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import MenuAdmin from "./MenuAdmin";
import axios from "axios";

const UserList = () => {

    const [usuarios, setUsuarios] = useState([])
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedUsuario, setSelectedUsuario] = useState(null);


    useEffect(() => {
        const fetchUsuarios = async () => {
          try {
            const response = await axios.get('http://localhost:8000/api/usuarios-info');
            setUsuarios(response.data.Usuarios);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchUsuarios();
      }, []);

      const handleEliminar = async (idUsuario) => {
        try {
            await axios.delete(`http://localhost:8000/api/eliminar-usuario/${idUsuario}`);
            // Actualizar el estado para reflejar la eliminación
            setUsuarios(usuarios.filter(usuario => usuario.idUsuario !== idUsuario));
        } catch (error) {
            console.error('Error eliminando usuario:', error);
        }
    };

    const handleEdit = (usuario) => {
        setSelectedUsuario(usuario);
        setShowEditModal(true);
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:8000/api/editar-usuario/${selectedUsuario.idUsuario}`, selectedUsuario);
            setUsuarios(usuarios.map(usuario => (usuario.idUsuario === selectedUsuario.idUsuario ? selectedUsuario : usuario)));
            setShowEditModal(false);
        } catch (error) {
            console.error('Error actualizando usuario:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedUsuario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

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
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map(item => (
                                <tr key={item.idUsuario}>
                                    <td>{item.idUsuario}</td>
                                    <td>{item.User}</td>
                                    <td>{item.Password}</td>
                                    <td>{item.Rol}</td>
                                    <td>
                                        <Button onClick={() => handleEdit(item)}>Editar</Button>
                                    </td>
                                    <td><Button 
                                            onClick={() => handleEliminar(item.idUsuario)}
                                            variant="danger"
                                        >
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p>Loading data...</p>
                )}
            </Col>

            {selectedUsuario && (
                <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Usuario</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="User"
                                    value={selectedUsuario.User}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="Password"
                                    value={selectedUsuario.Password}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Rol</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="idRol"
                                    value={selectedUsuario.idRol}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Row>
    )
}

export default UserList