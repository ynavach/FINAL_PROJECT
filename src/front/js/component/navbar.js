import React from "react";
import { Link, NavLink } from "react-router-dom";
import logohuellasUrl from "../../img/logohuellaspc.png";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "#f7f7f7",
        height: "70px",
        borderBottom: "5px solid black",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "1",
        borderRadius: "10px"
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logohuellasUrl}
            alt="Huellas PetCare"
            style={{ height: "200px", width: "200px", objectFit: "contain" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarCenter">
        <div style={{ paddingLeft: "250px" }}>
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink exact="true" to="/" className="nav-link" activeclassname="active" style={{ color: "#333333", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
              Inicio
            </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeclassname="active" style={{ color: "#333333", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
                Quiénes somos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link" activeclassname="active" style={{ color: "#333333", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link" activeclassname="active" style={{ color: "#333333", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
                Galería
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarRight">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link" activeclassname="active" style={{ color: "#F4378D", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
                Regístrate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" activeclassname="active" style={{ color: "#5F0683", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
                Mi Cuenta
              </NavLink>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};
