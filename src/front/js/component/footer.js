import React, { Component } from "react";
import "../../styles/home.css";

export const Footer = () => (
	<nav className="navbar navbar-expand-lg" style={{backgroundColor:"#AB46D2"}}>
	  <div className="container-fluid">
		<a className="navbar-brand  position-relative top-50 start-0 ms-5 ps-5" style={{color:"#FFFFFF"}} >Copyright Your <code>&#169;</code> website 2023</a>
		<div className="social-links">
		<i className= "fa-brands fa-facebook me-2 text-light  fa-2x fa-lg"></i>
		<i className= "fa-brands fa-instagram me-2 text-light  fa-2x fa-lg"></i>
		<i className= "fa-brands fa-linkedin me-5 pe-5 text-light fa-2x fa-lg"></i>
		</div>
	  </div>
	  </nav>
	  );


