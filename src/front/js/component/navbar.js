import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logoblancoUrl from "../../img/logoblanco.png";

export const Navbar = () => {
  const { actions, store } = useContext(Context)

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#AB46D2", height: "60px", margin: "0 auto" }}>
      <div className="container-fluid d-flex justify-content-between">
        <Link to="/" className="navbar-brand">
          <img
            src={logoblancoUrl}
            alt="Huellas PetCare"
            style={{ height: "150px", width: "150px", objectFit: "contain" }}
          />
        </Link>

        <div className="justify-content-center" id="navbarCenter">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: "#FFFFFF" }}>Inicio</Link>
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

        <div className="justify-content-end" id="navbarRight">
          <ul className="navbar-nav">
            <li className="nav-item">
              {
                !store.jwt_token ?
                  <Link to="/signup" className="nav-link" style={{ color: "#FFFFFF" }}>Regístrate</Link>
                :
                  <Link to="/my_account" className="nav-link" style={{ color: "#FFFFFF" }}>Mi Perfil</Link>
              }           
            </li>
            <li className="nav-item">
              {
                !store.jwt_token ?
                  <Link to="/login">
                    <button className="btn btn-light" style={{ color: "#AB46D2", fontWeight: "bold"}}>Iniciar Sesión</button>
                  </Link>
                :
                  <Link to="/login">
                    <button onClick={actions.removeToken} className="btn btn-light" style={{ color: "#AB46D2", fontWeight: "bold"}}>Cerrar Sesión</button>
                  </Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
