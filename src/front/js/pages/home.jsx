import React, { useContext } from "react";
import { Context } from "../store/appContext";
import imgVet from "../../img/imgvet.jpg";
import imgCatDog from "../../img/imgcatdog.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (


		<div className="text-center mt-5">
			<div className="jumbotron p-5 mt-3 mb-3 bg-light ">
				<h1 className="display-4">¿Emergencia de mascotas fuera del horario de atención?  <br></br> <br></br> ¡Estamos aquí para ayudar!</h1>
				<p className="lead"></p>
				<a className="btn btn-primary btn-lg rounded-pill" style={{backgroundColor:"#FF6FB5"}} href={"Registrar!"} role="button">
				Regístrate ya!
				</a>
			</div>

			

			<div>
				<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
								<img src={imgVet} className="d-block w-100" alt="..."/>
								<div className="carousel-caption position-absolute top-0 start-0 end-0">
									<h1 className="p-0 mb-2 display-4">Porque tu mascota se lo merece</h1>
									<h2  className="p-1 mb-0 display-4 fw-bold">Simplemente te ayudamos a cuidarlos</h2>
								</div>
						</div>
					</div>
				</div>
			</div>








			<div className="alert alert-info" style={{backgroundColor:"#AB46D2"}}>
				<h3 style={{color:"#FFFFFF"}}>	{store.message || "Nuestros Servicios"} </h3>
			</div>

			<div>
				<div className="row d-flex gap-2 justify-content-center mt-5 mb-5">
					<div className="col-sm-2 ">
								<div className="card">
								<div className="card-body">
								<h5 className="card-title">Special title treatment</h5>
								<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
								<a href="#" className="btn btn-primary badge rounded-pill w-75 p-3" style={{backgroundColor:"#FF6FB5"}}>Go somewhere</a>
								</div>
								</div>
					</div>
					<div className="col-sm-2 ">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Special title treatment</h5>
								<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
								<a href="#" className="btn btn-primary badge rounded-pill w-75 p-3" style={{backgroundColor:"#FF6FB5"}}>Go somewhere</a>
							</div>
						</div>
					</div>
					<div className="col-sm-2 ">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Special title treatment</h5>
								<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
								<a href="#" className="btn btn-primary badge rounded-pill w-75 p-3" style={{backgroundColor:"#FF6FB5"}}>Go somewhere</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="jumbotron p-5 mt-3 mb-3" style={{backgroundColor:"#AB46D2"}}>
				<div className="card mb-3" style={{maxWwidth: "540px"}}>
					<div className="row g-0">
						<div className="col-md-4">
							<img src={imgCatDog} className="img-fluid rounded-start" alt="..."/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h3 className="card-title">Testimonios</h3>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="jumbotron p-5 mt-3 mb-3 bg-light ">
				<h1 className="display-4">Visítanos</h1>
				<p className="lead"></p>
				<a className="btn btn-primary btn-lg badge rounded-pill w-25 p-3" style={{backgroundColor:"#FF6FB5"}}
				href={"Registrar!"} role="button">
				Registrate ya!
				</a>
			</div>
			<div className="jumbotron p-5 mt-3 mb-3 bg-light ">
				<h5 className="display-4">Contáctanos </h5>
				<p className="lead">
				Llámenos al (0212) 249-2122 <br></br>
				¡Para que nuestro personal pueda prepararse mejor para conocer a su mascota!
				<br></br>					
				Horario: 24 horas</p>
				<a className="btn btn-primary btn-lg rounded-pill" style={{backgroundColor:"#FF6FB5"}} href={"Registrar!"} role="button">
				Suscribete!
				</a>
			</div>

		

		</div>
	);
};
