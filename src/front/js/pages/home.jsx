import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import toast, { Toaster } from 'react-hot-toast';
import imgVet from "../../img/imgvet.jpg";
import imgCatDog from "../../img/imgcatdog.jpg";
import imgsec1left from "../../img/imgsec1left.png";
import girldog from "../../img/girldog.png";
import teamvet2 from "../../img/teamvet2.jpg";
import consultaUrl from "../../img/consulta.png";
import cirugiaUrl from "../../img/cirugia.png";
import emergenciaUrl from "../../img/emergencia.png";
import peluqueriaUrl from "../../img/peluqueria.png";
import vacunacionUrl from "../../img/vacunacion.png";
import mascotas3 from "../../img/mascotas3.jpg";
import services from "../component/services.jsx";

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
</style>


import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		
		<div className="text-center" >
			<div className="jumbotron pt-5 mt-3 " style={{background:"white", fontFamily: "Montserrat, sans-serif"}}>

				<div>
					<div className="row d-flex mt-5 mb-5">
						<div className="col-sm-4 ">
							<img style={{width:"25em"}} src= {imgsec1left}/>
						</div>
						<div className="col-sm-4 ">
							<h4  className="mt-2 pt-2" > <strong> El  mejor  equipo  del  mundo en <br></br> servicios de cuidado para mascotas <br></br> <br></br> </strong> </h4>
					
							<p className=" lh-base text-center justify-content" style={{align:"justify"}}>En Huellas PetCare, su mascota es nuestra prioridad. Estamos orgullosos de ofrecer nuestros servicios veterinarios a gatos y perros.</p>
							<Link to="/services">
								<span className="btn btn-primary btn-lg rounded-pill justify-content-center " style={{backgroundColor:"#FF6FB5"}} href={"Servicios"} role="button"
								>Nuestros Servicios</span>
							</Link>

						</div>
						<div className="col-sm-4 ">
							<img style={{width:"23em"}} src= {girldog}/>
						</div>
					</div>
				</div>
	
			</div> 

			<div className="jumbotron p-5 mt-3 mb-3" style={{backgroundColor:"#AB46D2"}}>
				<div className="card mb-3" style={{maxWwidth: "540px"}}>
					<div className="row g-0">
						
						<div className="col-md-8" style={{fontFamily: "Montserrat, sans-serif"}}>
							<div className="card-body">
								<h2 className="card-title">  <strong> Valores </strong> <br></br> <br></br></h2>
								<p className="card-text">Nuestros valores fundamentales de respeto, integridad y confianza son el corazón palpitante de nuestra práctica. En Huellas PetCare, la prestación de atención veterinaria excepcional y servicio al cliente es una forma de vida. No solo destacamos por nuestro amor a los animales, sino también por nuestros años combinados de experiencia.</p>
								<p className="card-text"><small className="text-muted"><br></br></small></p>
								<Link to="*">
									<span className="btn btn-primary btn-lg rounded-pill justify-content-center " style={{backgroundColor:"#FF6FB5"}} href={"About"} role="button"
									>Quienes Somos</span>
								</Link>
							</div>
						</div>

						<div className="col-md-4">
							<img src={teamvet2} className="img-fluid rounded-startgit status pt-3 pe-3" alt="..."/>
						</div>	

					</div>
				</div>
			</div>


			<div className="jumbotron p-2 mt-3" style={{background:"white"}}>
				<h1 className="display-4"> <strong> Adquiere nuestros Servicios </strong></h1>
				<p className="lead"></p>
				<div>
				<div className="row d-flex gap-2 justify-content-center mt-5 mb-5" >
					<div className="col-sm-2 ">
						<div className="card">
							<div className="card-body">
								<img
									src={consultaUrl}
									style={{ display: "block", margin: "auto" }}
									width="120"
									height="150"
									alt="Foto de Consulta"
								/>
								<h5 className="card-title">Consultas</h5>
								<p className="card-text"></p>
							</div>
						</div>
					</div>
					<div className="col-sm-2 ">
						<div className="card">
							<div className="card-body">
								<img
									src={cirugiaUrl}
									style={{ display: "block", margin: "auto" }}
									width="120"
									height="150"
									alt="Foto de Consulta"
								/>
								<h5 className="card-title">Cirugía</h5>
								<p className="card-text"></p>
							</div>
						</div>
					</div>
					<div className="col-sm-2 ">
						<div className="card">
							<div className="card-body">
								<img src={peluqueriaUrl}  style={{ display: 'block', margin: 'auto' }} width="120" height="150" alt="Foto de Consulta" />
 								<h5 className="card-title">Peluquería</h5>
								<p className="card-text"></p>
							</div>
						</div>
					</div>
					<div className="col-sm-2 ">
						<div className="card">
							<div className="card-body">
							<img
								src={vacunacionUrl}
								style={{ display: "block", margin: "auto", marginTop: "20px", marginBottom: "25px" }}
								width="100"
								height="100"
								alt="Foto de Consulta"
							/>
 								<h5 className="card-title">Vacunación</h5>
								<p className="card-text"></p>
							</div>
						</div>
					</div>
					<div className="col-sm-2 ">
						<div className="card">
							<div className="card-body">
								<img src={emergenciaUrl}  style={{ display: 'block', margin: 'auto' }} width="120" height="150" alt="Foto de Consulta" />
								<h5 className="card-title">Emergencias</h5>
								<p className="card-text"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
				<Link to="/signup">
					<span className="btn btn-primary btn-lg rounded-pill justify-content-center " style={{backgroundColor:"#FF6FB5"}} href={"About"} role="button"
					>Regístrate</span>
				</Link>
			</div>

			<div>
				<div id="carouselExampleSlidesOnly" className="carousel slide mb-3 pb-3" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
								<img src={mascotas3} className="d-block w-100" style={{background:"white", height: "50vh" }} alt="..."/>
								<div className="carousel-caption position-absolute top-0 start-0 end-0">
									<h1 className="p-0 mb-2 display-4 p-3 mb-5 bg-dark text-light fs-1 fw-bold" style={{opacity:"0.15" }}>Porque tu mascota se lo merece </h1>
									<h2  className="p-1 mb-0 mt-5 display-4 bg-dark text-light fw-bold align-bottom" style={{opacity:"0.25" }}>Simplemente te ayudamos a cuidarlos</h2>
								</div>
						</div>
					</div>
				</div>
			</div>
		<Toaster />
		</div>
	);
};
