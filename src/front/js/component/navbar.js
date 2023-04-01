import React from "react"; //Main React.js library
import { Link } from "react-router-dom";


export const Navbar = () => {
	return(
		<nav className="navbar navbar-expand-lg" style={{backgroundColor:"#AB46D2"}}>
  <div className="container-fluid">
    <div> 
      <i className= "fa-sharp fa-solid fa-paw text-light  fa-5x fa-lg b-2"></i>
      <i className= "fa-sharp fa-solid fa-paw text-light  fa-2x t-4"></i>
    </div>
    <a className="navbar-brand ms-3" style={{color:"#FFFFFF"}} href="#" >  Huellas PetCare </a>
    <div> 
      <i className= "fa-sharp fa-solid fa-paw text-light  fa-5x fa-lg b-2"></i>
      <i className= "fa-sharp fa-solid fa-paw text-light  fa-2x t-4"></i>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" style={{color:"#FFFFFF"}} href="#">Quienes Somos</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" style={{color:"#FFFFFF"}} href="#">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"#FFFFFF"}} href="#">Contáctanos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"#FFFFFF"}} href="#">Regístrate</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"#FFFFFF"}} href="#">Acceso</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
