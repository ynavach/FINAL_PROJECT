import React from "react";
import { Link } from "react-router-dom";
import logoblancoUrl from "../../img/logoblanco.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#AB46D2", height: "60px", margin: "0 auto" }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logoblancoUrl}
            alt="Huellas PetCare"
            style={{ height: "150px", width: "150px", objectFit: "contain" }}
          />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarCenter">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ paddingLeft: "200px", color: "#FFFFFF" }}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: "#FFFFFF" }}>Quiénes Somos</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" style={{ color: "#FFFFFF" }}>Servicios</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link" style={{ color: "#FFFFFF" }}>Galeria</Link>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarRight">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/signup" className="nav-link" style={{ color: "#FFFFFF" }}>Regístrate</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" style={{ color: "#FFFFFF" }}>Acceso</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
