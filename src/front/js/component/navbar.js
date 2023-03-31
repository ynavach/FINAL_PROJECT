import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light">
		  <div className="container">
			<Link to="/" className="navbar-brand">
			  React Boilerplate
			</Link>
			<button
			  className="navbar-toggler"
			  type="button"
			  data-toggle="collapse"
			  data-target="#navbarNav"
			  aria-controls="navbarNav"
			  aria-expanded="false"
			  aria-label="Toggle navigation"
			>
			  <span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
			  <ul className="navbar-nav mx-auto text-center">
				<li className="nav-item">
				<Link to="/" className="nav-link">
         			 <span style={{ color: "fuchsia" }}>Inicio</span>
        		</Link>
				</li>
				<li className="nav-item">
				  <Link to="/about" className="nav-link">
					Nosotros
				  </Link>
				</li>
				<li className="nav-item">
				  <Link to="/services" className="nav-link">
					Servicios
				  </Link>
				</li>
				<li className="nav-item">
				  <Link to="/contact" className="nav-link">
					Contacto
				  </Link>
				</li>
				<li className="nav-item">
				  <Link to="/login" className="nav-link">
					Login
				  </Link>
				</li>
			  </ul>
			  <div className="ml-auto">
				<Link to="/demo">
				  <button className="btn btn-primary">Check the Context in action</button>
				</Link>
			  </div>
			</div>
		  </div>
		</nav>
	  );
};