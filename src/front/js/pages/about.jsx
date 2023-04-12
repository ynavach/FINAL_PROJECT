import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

import { Context } from "../store/appContext";

import carlos1Url from "../../img/carlos1.png";
import reimarUrl from "../../img/Reimar.png";
import wilfredoUrl from "../../img/wilfredo.png";
import yunenseyUrl from "../../img/yunensey.png";
import fondoquienes1Url from "../../img/fondoquienes1.png";
import gatodevUrl from "../../img/gatodev.png";

export const About = () => {
  const { store, actions } = useContext(Context);

  return (
    <div style={{ position: "relative" }}>
      <Container style={{ marginTop: "90px" }}>
        <Row>
          <Col md={6}>
            <h1
              className="mt-5"
              style={{
                textAlign: "center",
                color: "#AB46D2",
                fontWeight: "bold",
              }}
            >
              Quiénes Somos
            </h1>
            <div
              className="fusion-column col-lg-12 col-md-12 col-sm-12"
              style={{ marginTop: "10px" }}
            >
              <img
                src={fondoquienes1Url}
                alt="Titulo Quiénes Somos"
                style={{ height: "400px", width: "100%", position: "relative" }}
              />
            </div>
          </Col>
          <Col md={6}>
            <div
              style={{
                position: "absolute",
                top: "150px",
                textAlign: "center",
                paddingRight: "30px",
              }}
            >
              <h6 className="my-3" style={{ lineHeight: "1.5" }}>
                Huellas Petcare nació de la necesidad del mercado de una
                herramienta que hiciera que el servicio veterinario fuese más
                fácil y accesible. Sabemos que para muchos dueños de mascotas,
                programar citas y servicios en la clínica veterinaria puede ser
                un proceso complicado y estresante. Por eso, decidimos crear una
                aplicación web que hiciera este proceso más fácil y sin estrés.
              </h6>
              <h6 className="my-3" style={{ lineHeight: "1.5" }}>
                En nuestra plataforma los usuarios pueden programar citas y
                servicios en cualquier momento y lugar. Sabemos que cada animal
                es único y requiere una atención específica. Así que como
                desarrolladores, nos enfocamos en crear una plataforma que
                hiciera posible esto, sin descuidar la calidad y la atención
                personalizada.
              </h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div
              className="fusion-column col-lg-12 col-md-12 col-sm-12"
              style={{
                marginTop: "150px",
                textAlign: "left",
                paddingRight: "30px",
              }}
            >
              <h6 className="my-3" style={{ lineHeight: "1.5" }}>
                En Huellas Petcare, estamos comprometidos a seguir mejorando
                nuestra aplicación para brindar la mejor experiencia posible a
                nuestros usuarios. Esto nos lleva a implementar algunas mejoras
                en el futuro:
              </h6>
              <ul>
                <li
                  className="my-3"
                  style={{ textAlign: "left", lineHeight: "1.5" }}
                >
                  Permitir que los médicos veterinarios deshabiliten
                  temporalmente servicios que no pueden brindar, para una mejor
                  atención a las mascotas.
                </li>
                <li
                  className="my-3"
                  style={{ textAlign: "left", lineHeight: "1.5" }}
                >
                  Dar la opción a los usuarios de modificar los datos de su
                  perfil, para mayor flexibilidad y comodidad
                </li>
                <li
                  className="my-3"
                  style={{ textAlign: "left", lineHeight: "1.5" }}
                >
                  Facilitar a los médicos la visualización de la lista de
                  usuarios y mascotas registradas, para un mejor seguimiento y
                  atención.
                </li>
                <li
                  className="my-3"
                  style={{ textAlign: "left", lineHeight: "1.5" }}
                >
                  Permitir que los médicos editen el historial médico de las
                  mascotas, para llevar un registro completo y detallado.
                </li>
                <li
                  className="my-3"
                  style={{ textAlign: "left", lineHeight: "1.5" }}
                >
                  Mostrar el historial de servicios en la vista de las mascotas,
                  para una mejor visualización y seguimiento.
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <h1
              className="mt-5"
              style={{
                textAlign: "center",
                marginLeft: "80px",
                color: "#AB46D2",
                fontWeight: "bold",
              }}
            >
              Desarrollo a futuro
            </h1>
            <img
              src={gatodevUrl}
              alt="Gato developer"
              style={{ width: "120%", position: "relative" }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md={1}
            style={{
              fontSize: "20px",
              marginRight: "50px",
              marginBottom: "100px",
            }}
          ></Col>
        </Row>
      </Container>
      <div
        style={{
          backgroundColor: "rgba(241, 241, 241, 2)",
          width: "100%",
          height: "650px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#AB46D2",
            fontWeight: "bold",
          }}
        >
          Tecnologías
        </h1>
        <h6
          className="my-4"
          style={{
            maxWidth: "2000px",
            margin: "auto",
            textAlign: "center",
            marginBottom: "20px",
            lineHeight: "1.5",
          }}
        >
          La plataforma se apoya en diversas tecnologías para su desarrollo. En
          el frontend, se utilizan herramientas de marcado y diseño como HTML5,
          CSS3 y Bootstrap para lograr una interfaz de usuario atractiva y
          amigable. En el backend, se utilizan lenguajes de programación como
          JavaScript, React, Python y Flask, y se emplea una base de datos para
          almacenar y recuperar información relevante.{" "}
        </h6>
        <h6
          className="my-4"
          style={{
            maxWidth: "2000px",
            margin: "auto",
            textAlign: "center",
            marginBottom: "20px",
            lineHeight: "1.5",
          }}
        >
          Además de las tecnologías mencionadas, también se utilizan APIs de
          terceros para mejorar la funcionalidad de la plataforma. En
          particular, se utilizan las APIs de Cloudinary y Hot Toast. La primera
          se utiliza para la gestión de imágenes, mientras que la segunda se
          utiliza para la gestión de notificaciones y mensajes push. Todo el
          trabajo en equipo y control de versiones se realiza a través de Git y
          Github. Gracias a estas tecnologías, la plataforma ofrece servicio
          efectivo y confiable.
        </h6>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "30px",
            marginTop: "10px",
          }}
        >
          <i className="fab fa-html5 fa-4x ms-4 m-4"></i>
          <i className="fab fa-react fa-4x mx-2 m-4"></i>
          <i className="fab fa-python fa-4x mx-2 m-2"></i>
          <i className="fab fa-github-square fa-4x mx-2 m-4"></i>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <i className="fab fa-js fa-4x mx-2"></i>
          <i className="fab fa-css3-alt fa-4x mx-2"></i>
          <i className="fab fa-bootstrap fa-4x me-2"></i>
          <i className="fas fa-database fa-4x mx-2"></i>
          <i className="fab fa-git-alt fa-4x mx-2"></i>
        </div>
      </div>
      <section className="team text-center py-5">
        <div className="container">
          <div className="header my-5">
            <h1 style={{ color: "#AB46D2", fontWeight: "bold" }}>
              {" "}
              Nuestro equipo
            </h1>
            <h5 style={{ margin: "auto", textAlign: "center" }}>
              Huellas Petcare
            </h5>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="img-block mb-5">
                <img
                  src={carlos1Url}
                  className="img-fluid img-thumbnail rounded-circle"
                  alt="image1"
                />
                <div className="content mt-2">
                  <h4>Carlos Herrera</h4>
                  <a href="https://github.com/careduh97" target="_blank">
                    <i class="fab fa-github pe-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <div className="img-block mb-5">
                <img
                  src={reimarUrl}
                  className="img-fluid img-thumbnail rounded-circle"
                  alt="image2"
                />
                <div className="content mt-2">
                  <h4>Reimar Rodriguez</h4>
                  <a href="https://github.com/pulgazion" target="_blank">
                    <i class="fab fa-github pe-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="img-block mb-5">
                <img
                  src={wilfredoUrl}
                  className="img-fluid img-thumbnail rounded-circle"
                  alt="image3"
                />
                <div className="content mt-2">
                  <h4>Wilfredo Andrade</h4>
                  <a href="https://github.com/N1kf3" target="_blank">
                    <i class="fab fa-github pe-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="img-block mb-5">
                <img
                  src={yunenseyUrl}
                  className="img-fluid img-thumbnail rounded-circle"
                  alt="image4"
                />
                <div className="content mt-2">
                  <h4>Yunensey Nava</h4>
                  <a href="https://github.com/ynavach" target="_blank">
                    <i class="fab fa-github pe-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
