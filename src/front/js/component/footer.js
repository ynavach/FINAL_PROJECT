import React, { Component } from "react";
import "../../styles/home.css";

export const Footer = () => (
	<footer className="footer container-fluid py-3 d-flex align-items-center justify-content-center sticky-bottom" style={{minHeight:"5vh", backgroundColor:"#AB46D2"}}>
		<p className="d-flex align-items-center justify-content-center text-white m-0 me-3">Copyright © 2023 Huellas PetCare Website</p>
		<div className="social-links">
			<i className= "fa-brands fa-facebook me-2 text-light  fa-2x fa-lg"></i>
			<i className= "fa-brands fa-instagram me-2 text-light  fa-2x fa-lg"></i>
			<i className= "fa-brands fa-linkedin me-5 pe-5 text-light fa-2x fa-lg"></i>
		</div>
    </footer>
	);
