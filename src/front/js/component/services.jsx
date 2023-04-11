import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Context } from "../../js/store/appContext.js";
import { Modal_Services } from "../component/modalServices.jsx";
import consultaUrl from "../../img/consulta.png";
import vacunacionUrl from "../../img/vacunacion.png";
import cirugiaUrl from "../../img/cirugia.png";
import peluqueriaUrl from "../../img/peluqueria.png";
import desparasitacionUrl from "../../img/desparasitacion.png";
import emergenciaUrl from "../../img/emergencia.png";
import fondoserv2Url from "../../img/fondoserv2.png";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { store, actions } = useContext(Context);
  const isMedic = store.user && store.user.medic === true;
  const [isEnabled, setIsEnabled] = useState([]);
  const [servicesData, setServicesData] = useState(null);

  const getServicesData = async () => {
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/services");
      const data = await response.json();
      setServicesData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServicesData();
  }, []);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleDisableClick = (index) => {
    const newIsEnabled = [...isEnabled];
    newIsEnabled[index] = !isEnabled[index];
    setIsEnabled(newIsEnabled);
  };

  return (
    <div style={{ position: "relative" }}>
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col md={6}>
            <h1 className="mb-5 mt-5">Servicios</h1>
            <div
              className="fusion-column col-lg-12 col-md-12 col-sm-12"
              style={{ marginTop: "50px", marginBottom: "50px" }}
            >
              <p>
                Tenemos a disposición un equipo de expertos en Medicina
                Veterinaria y personal técnico altamente cualificado, con una
                vasta experiencia y comprometidos con nuestra misión de ofrecer
                cuidado de la salud a todas las especies de animales de
                compañía, a través de diagnósticos precisos y tratamientos
                efectivos. Además, nos enorgullece proveer la mejor atención
                posible mediante un equipo de profesionales altamente
                capacitados, que se mantienen actualizados y utilizan la
                tecnología más adecuada a nuestra disposición.
              </p>
              <ul>
                <li>Consultas de Lunes a Domingos de 8am a 4pm</li>
                <li>Emergencias las 24 horas</li>
              </ul>
              <Row className="mt-4">
                <Col className="text-center">
                  <Button
                    variant="primary"
                    size="lg"
                    style={{ backgroundColor: "#ab46d2", borderRadius: "50px" }}
                  >
                    Reserva ahora
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={6}>
            <img
              src={fondoserv2Url}
              alt="Fondo de servicios"
              style={{ width: "120%", position: "relative" }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          {servicesData ? (
            servicesData.map((item) => {
              return (
                <Col md={4} xs={12}>
                  <Card
                    style={{
                      height: "100%",
                      boxShadow:
                        hoveredCard === 1
                          ? "0 0 10px rgba(103, 58, 183, 0.7)"
                          : "",
                      opacity: item.enabled ? "1" : "0.5",
                    }}
                    onMouseEnter={() => handleCardHover(1)}
                    onMouseLeave={handleCardLeave}
                  >
                    <Card.Body>
                      <img
                        src={item.url_image}
                        style={{
                          display: "block",
                          margin: "auto",
                          marginTop: "20px",
                          marginBottom: "25px",
                        }}
                        width="100"
                        height="100"
                        alt="Foto de Consulta"
                      />
                      <Card.Text>
                        <Card.Title>{item.name}</Card.Title>
                        {item.description}
                      </Card.Text>
                      {/* 
                 
                 <Card.Text>Algunos de nuestros servicios:</Card.Text>
                 <ul>
                    <li>Vacuna contra la rabia</li>
                    <li>Vacuna contra el parvovirus</li>
                    <li>Vacuna contra la leptospirosis</li>
                  </ul> */}
                      {isMedic && (
                        <div>
                          <Button
                            variant="primary"
                            onClick={() => handleDisableClick(1)}
                          >
                            {item.enabled ? "Deshabilitar" : "Habilitar"}
                          </Button>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <span></span>
          )}
          <Col md={4} xs={12}>
            <Card
              style={{
                height: "100%",
                boxShadow:
                  hoveredCard === 1 ? "0 0 10px rgba(103, 58, 183, 0.7)" : "",
                opacity: isEnabled[1] ? "1" : "0.5",
              }}
              onMouseEnter={() => handleCardHover(1)}
              onMouseLeave={handleCardLeave}
            >
              <Card.Body>
                <img
                  src={vacunacionUrl}
                  style={{
                    display: "block",
                    margin: "auto",
                    marginTop: "20px",
                    marginBottom: "25px",
                  }}
                  width="100"
                  height="100"
                  alt="Foto de Consulta"
                />
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
                {isMedic && (
                  <div>
                    <Button
                      variant="primary"
                      onClick={() => handleDisableClick(1)}
                    >
                      {isEnabled[1] ? "Deshabilitar" : "Habilitar"}
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card
              style={{
                height: "100%",
                boxShadow:
                  hoveredCard === 2 ? "0 0 10px rgba(103, 58, 183, 0.7)" : "",
                opacity: isEnabled[2] ? "1" : "0.5",
              }}
              onMouseEnter={() => handleCardHover(2)}
              onMouseLeave={handleCardLeave}
            >
              <Card.Body>
                <img
                  src={cirugiaUrl}
                  style={{ display: "block", margin: "auto" }}
                  width="120"
                  height="150"
                  alt="Foto de Consulta"
                />
                <Card.Title>Cirugía</Card.Title>
                <Card.Text>Realizamos cirugías de diversos tipos.</Card.Text>
                <Card.Text>Algunos de nuestros servicios:</Card.Text>
                <ul>
                  <li>Esterilización</li>
                  <li>Cirugía de columna</li>
                  <li>Cirugía ortopédica</li>
                </ul>
                {isMedic && (
                  <div>
                    <Button
                      variant="primary"
                      onClick={() => handleDisableClick(2)}
                    >
                      {isEnabled[2] ? "Deshabilitar" : "Habilitar"}
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: "50px", marginBottom: "80px" }}>
          <Col md={4} xs={12}>
            <Card
              style={{
                height: "100%",
                boxShadow:
                  hoveredCard === 3 ? "0 0 10px rgba(103, 58, 183, 0.7)" : "",
                opacity: isEnabled[3] ? "1" : "0.5",
              }}
              onMouseEnter={() => handleCardHover(3)}
              onMouseLeave={handleCardLeave}
            >
              <Card.Body>
                <img
                  src={peluqueriaUrl}
                  style={{ display: "block", margin: "auto" }}
                  width="120"
                  height="150"
                  alt="Foto de Consulta"
                />
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
                {isMedic && (
                  <div>
                    <Button
                      variant="primary"
                      onClick={() => handleDisableClick(3)}
                    >
                      {isEnabled[3] ? "Deshabilitar" : "Habilitar"}
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card
              style={{
                height: "100%",
                boxShadow:
                  hoveredCard === 4 ? "0 0 10px rgba(103, 58, 183, 0.7)" : "",
                opacity: isEnabled[4] ? "1" : "0.5",
              }}
              onMouseEnter={() => handleCardHover(4)}
              onMouseLeave={handleCardLeave}
            >
              <Card.Body>
                <img
                  src={desparasitacionUrl}
                  style={{ display: "block", margin: "auto" }}
                  width="120"
                  height="150"
                  alt="Foto de Consulta"
                />
                <Card.Title>Desparasitación</Card.Title>
                <Card.Text>
                  Ofrecemos tratamientos para desparasitar a tu mascota y
                  prevenir enfermedades.
                </Card.Text>
                <Card.Text>Algunos de nuestros servicios:</Card.Text>
                <ul>
                  <li>Desparasitación interna y externa</li>
                  <li>Prevención de enfermedades parasitarias</li>
                  <li>Asesoramiento sobre cuidados preventivos</li>
                </ul>
                {isMedic && (
                  <div>
                    <Button
                      variant="primary"
                      onClick={() => handleDisableClick(4)}
                    >
                      {isEnabled[4] ? "Deshabilitar" : "Habilitar"}
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card
              style={{
                height: "100%",
                boxShadow:
                  hoveredCard === 5 ? "0 0 10px rgba(103, 58, 183, 0.7)" : "",
                opacity: isEnabled[5] ? "1" : "0.5",
              }}
              onMouseEnter={() => handleCardHover(5)}
              onMouseLeave={handleCardLeave}
            >
              <Card.Body>
                <img
                  src={emergenciaUrl}
                  style={{ display: "block", margin: "auto" }}
                  width="120"
                  height="150"
                  alt="Foto de Consulta"
                />
                <Card.Title>Emergencias</Card.Title>
                <Card.Text>
                  Estamos disponibles las 24 horas del día para atender
                  emergencias veterinarias.
                </Card.Text>
                <Card.Text>Algunos de nuestros servicios:</Card.Text>
                <ul>
                  <li>Atención de urgencias</li>
                  <li>Estabilización de mascotas en estado crítico</li>
                  <li>Monitoreo y cuidados intensivos</li>
                </ul>
                {isMedic && (
                  <div>
                    <Button
                      variant="primary"
                      onClick={() => handleDisableClick(5)}
                    >
                      {isEnabled[5] ? "Deshabilitar" : "Habilitar"}
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
