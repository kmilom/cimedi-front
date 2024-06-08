import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const FormCita = () => {
    const location = useLocation();
    const { idPaciente } = location.state || {};
    console.log(idPaciente);

    const [especialidades, setEspecialidades] = useState([]);
    const [selectedEspecialidad, setSelectedEspecialidad] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [horarios, setHorarios] = useState([]);
    const [selectedHorario, setSelectedHorario] = useState('');
    const [medicos, setMedicos] = useState([]);
    const [selectedMedico, setSelectedMedico] = useState('');

    useEffect(() => {
        const fetchEspecialidades = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/especialidades');
                setEspecialidades(response.data.especialidades);
            } catch (error) {
                console.error('Error fetching especialidad data:', error);
            }
        };

        fetchEspecialidades();
    }, []);

    useEffect(() => {
        const fetchHorarios = async () => {
            if (selectedEspecialidad && selectedDate) {
                try {
                    const response = await axios.get(`http://localhost:8000/api/horarios`, {
                        params: { especialidad: selectedEspecialidad, fecha: selectedDate }
                    });
                    setHorarios(response.data.horarios);
                } catch (error) {
                    console.error('Error fetching horarios data:', error);
                }
            }
        };

        fetchHorarios();
    }, [selectedEspecialidad, selectedDate]);

    useEffect(() => {
        const fetchMedicos = async () => {
            if (selectedEspecialidad) {
                try {
                    const response = await axios.get(`http://localhost:8000/api/medicos-por-especialidad/${selectedEspecialidad}`);
                    setMedicos(response.data.Medico);
                } catch (error) {
                    console.error('Error fetching medicos data:', error);
                }
            }
        };

        fetchMedicos();
    }, [selectedEspecialidad]);

    const handleEspecialidadChange = (e) => {
        setSelectedEspecialidad(e.target.value);
        setSelectedHorario('');  // Reset the selected horario when the especialidad changes
        setSelectedMedico('');  // Reset the selected medico when the especialidad changes
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        setSelectedHorario('');  // Reset the selected horario when the date changes
        setSelectedMedico('');  // Reset the selected medico when the date changes
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const cita = {
                ListaEspera: 1,
                idEspecialidad: selectedEspecialidad,
                idHorario: selectedHorario,
                idEstadoCita: 1,
                idPaciente: idPaciente,
                idMedico: selectedMedico
            }
            console.log(cita)
            const response = await axios.post('http://localhost:8000/api/crear-cita', cita);
            console.log('Cita creada:', response.data);
        } catch (error) {
            console.error('Error creating cita:', error);
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Col} md={{ span: 12 }}>
                    <Form.Label htmlFor="idEspecialidad">Especialidad:</Form.Label>
                    <Form.Control
                        as="select"
                        id="idEspecialidad"
                        name="idEspecialidad"
                        value={selectedEspecialidad}
                        onChange={handleEspecialidadChange}
                    >
                        <option value="">Seleccione una especialidad</option>
                        {especialidades.map((tipo) => (
                            <option key={tipo.idEspecialidad} value={tipo.idEspecialidad}>
                                {tipo.Especialidad}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md={{ span: 12 }}>
                    <Form.Label htmlFor="fecha">Fecha:</Form.Label>
                    <Form.Control
                        type="date"
                        id="fecha"
                        name="fecha"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </Form.Group>
                {selectedEspecialidad && selectedDate && (
                    <Form.Group as={Col} md={{ span: 12 }}>
                        <Form.Label htmlFor="idHorario">Horario:</Form.Label>
                        <Form.Control
                            as="select"
                            id="idHorario"
                            name="idHorario"
                            value={selectedHorario}
                            onChange={(e) => setSelectedHorario(e.target.value)}
                        >
                            <option value="">Seleccione un horario</option>
                            {horarios.map((horario) => (
                                <option key={horario.idHorario} value={horario.idHorario}>
                                    {horario.Fecha} {horario.Hora}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                )}
                {selectedEspecialidad && selectedDate && selectedHorario && (
                    <Form.Group as={Col} md={{ span: 12 }}>
                        <Form.Label htmlFor="idMedico">Médico:</Form.Label>
                        <Form.Control
                            as="select"
                            id="idMedico"
                            name="idMedico"
                            value={selectedMedico}
                            onChange={(e) => setSelectedMedico(e.target.value)}
                        >
                            <option value="">Seleccione un médico</option>
                            {medicos.map((medico) => (
                                <option key={medico.idMedico} value={medico.idMedico}>
                                    {medico.Nombre}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                )}
                <Button variant="primary" type="submit" disabled={!selectedEspecialidad || !selectedDate || !selectedHorario || !selectedMedico}>
                    Apartar Cita
                </Button>
            </Form>
        </>
    );
};

export default FormCita;

