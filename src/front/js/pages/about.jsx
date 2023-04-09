import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import toast, { Toaster } from 'react-hot-toast';

import avatargenerico1 from "../../img/avatargenerico1.png"; 

export const About = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">

			<div className="shadow-lg  p-3 mb-5 mt-5 bg-body rounded d-flex justify-content-center " role="alert">
				<table style={{height: "100px"}}>
					<tbody>
						<tr>
							<td className="fs-1">Quienes Somos</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div>
				<nav>
					<div className="nav nav-tabs"  id="nav-tab" role="tablist">
						<button className="nav-link active fs-3" style={{color:"purple"}} id="nav-presentacion-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Bienvenidos</button>
						<button className="nav-link fs-3" style={{color:"purple"}} id="nav-informacion-tab" data-bs-toggle="tab" data-bs-target="#nav-informacion" type="button" role="tab" aria-controls="nav-informacion" aria-selected="false">Nuestro Proyecto</button>
						<button className="nav-link fs-3" style={{color:"purple"}} id="nav-proceso-tab" data-bs-toggle="tab" data-bs-target="#nav-proceso" type="button" role="tab" aria-controls="nav-proceso" aria-selected="false">Desarrollo</button>
						<button className="nav-link fs-3" style={{color:"purple"}} id="nav-Lenguajes-tab" data-bs-toggle="tab" data-bs-target="#nav-lenguajes" type="button" role="tab" aria-controls="nav-lenguajes" aria-selected="false">Herramientas</button>
						<button className="nav-link fs-3" style={{color:"purple"}} id="nav-huellas-tab" data-bs-toggle="tab" data-bs-target="#nav-huellas" type="button" role="tab" aria-controls="nav-huellas" aria-selected="false">Huellas PetCare</button>
					</div>
				</nav>
				<div className="tab-content" id="nav-tabContent">
					<div className="tab-pane fade show active  mt-3 pt-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
						<h5 className="fs-4">¡Buenas Tardes!</h5>
						<p  className="mb-3 pb-3 fs-4">Somos los integrantes del equipo de desarrollo de la aplicación Huellas PetCare: </p>

					<div className="d-flex justify-content-center mb-3">
						<div className="row row-cols-1 row-cols-md-4 g-4" style={{maxWidth: "900px"}}>
							<div className="col">
								<div className="card">
									<img src="avatargenerico1.png" className="card-img-top" alt="..."/>
									<div className="card-body">
										<h5 className="card-title">Wilfredo Andrade</h5>
										<div className="d-flex justify-content-center " >
										<i className= "fa-brands fa-github pe-1"></i>
										<p className="card-text">github.com/N1kf3</p>
										</div>								

									</div>
								</div>
							</div>
							<div className="col">
								<div className="card">
									<img src="avatargenerico1.png" className="card-img-top" alt="..."/>
									<div className="card-body">
										<h5 className="card-title">Carlos Herrera</h5>
										<div className="d-flex justify-content-center " >
										<i className= "fa-brands fa-github pe-1"></i>
										<p className="card-text">github.com/careduh97</p>
										</div>	
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card">
									<img src="avatargenerico1.png" className="card-img-top" alt="..."/>
									<div className="card-body">
										<h5 className="card-title">Reimar Rodríguez</h5>
										<div className="d-flex justify-content-center " >
										<i className= "fa-brands fa-github pe-1"></i>
										<p className="card-text">github.com/pulgazion</p>
										</div>	
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card">
									<img src="avatargenerico1.png" className="card-img-top" alt="..."/>
									<div className="card-body">
										<h5 className="card-title">Yunensey Nava</h5>
										<div className="d-flex justify-content-center " >
										<i className= "fa-brands fa-github pe-1"></i>
										<p className="card-text">github.com/ynavach</p>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

					<div className="tab-pane fade fs-4" id="nav-informacion" role="tabpanel" aria-labelledby="nav-informacion-tab">
						<div  className="card text-center">
							<div  className="card-header fs-4">
								<br></br>
							</div>
							<div  className="card-body">
								<h5  className="card-title"></h5>
								<p  className="card-text"></p>
								<div className=" mb-3 pb-3" >
									<p className="fw-bold mt-1 pt-1 text-decoration-underline">Descripción del proyecto: <br></br> </p>
									<p>Aplicación web para el control de mascotas.</p>
									<p className="fw-bold text-decoration-underline">Nuestro público: <br></br>	</p>
									<p>	La aplicación va dirigida a todos nuestros clientes que deseen gestionar los servicios veterinarios que ofrece la clínica a través de la web.</p>
									<p className="fw-bold text-decoration-underline">Objetivo: <br></br></p>
									<p>Nuestro objetivo se enfoca en ofrecer una experiencia de uso sencilla en la que el cliente simplemente tenga que registrarse y entrar en su cuenta para comenzar a guardar la información de sus mascotas y agendar servicios de la clínica veterinaria.</p>
								</div>	
							</div>
							<div  className="card-footer text-muted">
							<br></br>
							</div>
						</div>
					</div>
				
					<div className="tab-pane fade" id="nav-proceso" role="tabpanel" aria-labelledby="nav-proceso-tab">
				
						<div  className="card text-center fs-4">
							<div  className="card-header fs-4">
								<br></br>
							</div>
							<div  className="card-body">
								<h5  className="card-title"></h5>
								<p  className="card-text"></p>
								<div className=" mb-3 pb-3" >
									<p className="fw-bold mt-1 pt-1"></p>
									<p>Nuestro proceso de creación de la Aplicación estuvo basado en la metodología ágil Scrum.</p>
									<p className="">La Paleta de Colores escogida estuvo basada en colores vibrantes.  <br></br>	</p>
									<p>La tipografía utilizada fue Montserrat de GoogleFonts. </p>
									<p className="">El logotipo fue pensado en combinación del nombre con el propósito clínico, haciéndolo así, de fácil entendimiento.<br></br></p>
									<p></p>
								</div>	
							</div>
							<div  className="card-footer text-muted">
							<br></br>
							</div>
						</div>

					</div>

					<div className="tab-pane fade mb-3 pb-3 fs-4" id="nav-lenguajes" role="tabpanel" aria-labelledby="nav-lenguajes-tab">
						
						<div  className="card text-center">
							<div  className="card-header fs-4">
								Lenguajes y Tecnologías
							</div>
							<div  className="card-body">
								<h5  className="card-title pb-2 mb-2">Modales React -      Flask -     Postgres <br></br> </h5>
								<p  className="card-text pb-4 mb-4">SQLAlchemy     -     JWT    -     Cloudinary   </p>
								<div className="d-flex justify-content-between mb-3 pb-3" >
									<i className= "fa-brands fa-html5 fa-64x fa-lg ms-4 ps-4"></i>
									<i className= "fa-brands fa-react fa-64x fa-lg"></i>
									<i className= "fa-brands fa-python fa-64x fa-lg"></i>
									<i className= "fa-brands fa-square-github fa-64x fa-lg"></i>
									<i className= "fa-brands fa-js fa-64x fa-lg"></i>
									<i className= "fa-brands fa-css3-alt fa-64x fa-lg"></i>
									<i className= "fa-brands fa-bootstrap fa-64x fa-lg me-4 pe-4"></i>
								</div>	
							</div>
							<div  className="card-footer text-muted">
								Full Stack Developers - FrontEnd - BackEnd
							</div>
						</div>
					</div>

					<div className="tab-pane fade" id="nav-huellas" role="tabpanel" aria-labelledby="nav-huellas-tab">
												
						<div className="card mb-3" >
							<div className="row g-0">
								<div className="col-md-4">
									<img src="avatargenerico1.png" className="img-fluid rounded-start" alt="..."/>
								</div>
								<div className="col-md-8 d-flex justify-content-center mt-3 pt-3">
									<div className="card-body">
										<h3 className="card-title">¡Gracias por su atención!</h3>
										<p className="card-text mt-3 pt-3">Proyecto Final 4Geeks Academy Caracas.</p>
										<p className="card-text"><small className="text-muted mt-3 pt-3">Huellas PetCare © 2023</small></p>
									</div> 
								</div>
							</div>
						</div>	
						
					</div>
				</div>
			</div>		
				
		</div>
	);
};
