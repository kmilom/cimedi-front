import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";


export default function SesionAdmin(){

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
            Hello World, Admin
            {usuarios.length > 0 ? (
  // Render the data here
  <div>
    {usuarios.map(item => (
      <li key={item.idUsuario}>{item.User}</li>
    ))}
  </div>
) : (
  <p>Loading data...</p>
)}

        </Row>
    )
}