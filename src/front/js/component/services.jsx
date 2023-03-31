import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import consultaUrl from "../../img/consulta.png"
import vacunacionUrl from "../../img/vacunacion.png"
import cirugiaUrl from "../../img/cirugia.png"
import peluqueriaUrl from "../../img/peluqueria.png"
import desparasitacionUrl from "../../img/desparasitacion.png"
import emergenciaUrl from "../../img/emergencia.png"


const Services = () => {
  return (
    <Container>
      <h1 className='mb-5 mt-5'>Servicios</h1>
      <Row>
      <Col md={4}>
      <Card style={{height: "100%"}}>
            <Card.Body>
            <img src={consultaUrl} style={{ display: 'block', margin: 'auto' }} width="120" height="150" alt="Foto de Consulta" />
              <Card.Title>Consultas</Card.Title>
              <Card.Text>
                Ofrecemos consultas para perros, gatos y animales exóticos.
              </Card.Text>
              <Card.Text>Algunos de nuestros servicios:</Card.Text>
              <ul>
                <li>Consulta de rutina</li>
                <li>Consulta de enfermedades</li>
                <li>Consulta post-operación</li>
              </ul>
              <Button variant="primary">Agendar cita</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card style={{height: "100%"}}>
            <Card.Body>
              <img src={vacunacionUrl}  style={{ display: 'block', margin: 'auto' }} width="100" height="100" alt="Foto de Consulta" />
              <Card.Title>Vacunación</Card.Title>
              <Card.Text>
                Contamos con vacunas para prevenir diversas enfermedades.
              </Card.Text>
              <Card.Text>Algunos de nuestros servicios:</Card.Text>
              <ul>
                <li>Vacuna contra la rabia</li>
                <li>Vacuna contra el parvovirus</li>
                <li>Vacuna contra la leptospirosis</li>
              </ul>
              <Button variant="primary">Agendar cita</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card style={{height: "100%"}}>
            <Card.Body>
              <img src={cirugiaUrl}  style={{ display: 'block', margin: 'auto' }} width="120" height="150" alt="Foto de Consulta" />
              <Card.Title>Cirugía</Card.Title>
              <Card.Text>Realizamos cirugías de diversos tipos.</Card.Text>
              <Card.Text>Algunos de nuestros servicios:</Card.Text>
              <ul>
                <li>Esterilización</li>
                <li>Cirugía de columna</li>
                <li>Cirugía ortopédica</li>
              </ul>
              <Button variant="primary">Agendar cita</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card style={{height: "100%"}}>
            <Card.Body>
              <img src={peluqueriaUrl}  style={{ display: 'block', margin: 'auto' }} width="120" height="150" alt="Foto de Consulta" />
              <Card.Title>Peluquería</Card.Title>
              <Card.Text>
                Ofrecemos servicios de peluquería para todo tipo de mascotas.
              </Card.Text>
              <Card.Text>Algunos de nuestros servicios:</Card.Text>
              <ul>
                <li>Corte de pelo</li>
                <li>Baño y secado</li>
                <li>Corte de uñas</li>
              </ul>
              <Button variant="primary">Agendar cita</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card style={{height: "100%"}}>
          <Card.Body>
            <img src={desparasitacionUrl}  style={{ display: 'block', margin: 'auto' }} width="120" height="150" alt="Foto de Consulta" />
            <Card.Title>Desparasitación</Card.Title>
            <Card.Text>
              Ofrecemos tratamientos para desparasitar a tu mascota y prevenir enfermedades.
            </Card.Text>
            <Card.Text>Algunos de nuestros servicios:</Card.Text>
            <ul>
              <li>Desparasitación interna y externa</li>
              <li>Prevención de enfermedades parasitarias</li>
              <li>Asesoramiento sobre cuidados preventivos</li>
            </ul>
            <Button variant="primary">Agendar cita</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
      <Card style={{height: "100%"}}>
          <Card.Body>
            <img src={emergenciaUrl}  style={{ display: 'block', margin: 'auto' }} width="120" height="150" alt="Foto de Consulta" />
            <Card.Title>Emergencias</Card.Title>
            <Card.Text>
              Estamos disponibles las 24 horas del día para atender emergencias veterinarias.
            </Card.Text>
            <Card.Text>Algunos de nuestros servicios:</Card.Text>
            <ul>
              <li>Atención de urgencias</li>
              <li>Estabilización de mascotas en estado crítico</li>
              <li>Monitoreo y cuidados intensivos</li>
            </ul>
            <Button variant="primary">Llamar ahora</Button>
          </Card.Body>
        </Card>
      </Col>
      </Row>
    </Container>
  );
};

export default Services;
