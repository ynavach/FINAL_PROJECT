import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [userEmail, setUserEmail] = useState();
	const [userPass, setUserPass] = useState();
	const [userName, setUserName] = useState();
	const [userLastName, setUserLastName] = useState();
	const [userPhone, setUserPhone] = useState();


	const verifyInput=(email,pass,name,last,phone)=>{
		if ((email == undefined)||(pass== undefined)||(name== undefined)||(last== undefined)||(phone== undefined)){
			console.log("undefined")
			return false
		} else {
			console.log("definido")
			if((email.trim().length >= 1) && (pass.trim().length >= 1) && (name.trim().length >= 1) && (last.trim().length >= 1)&&(phone.trim().length >= 1)){
				return true
			}
			return false
		}
	}

	const createUser= async()=>{
		let bodyUser= {
			"email": userEmail,
			"password": userPass,
			"name":userName,
			"last_name":userLastName,
			"phone_number":userPhone
		}
		console.log(bodyUser)
		if (verifyInput(userEmail,userPass,userName,userLastName,userPhone)){
			console.log("carga datos")
			try{
				const response = await fetch('url',{
					method: "POST",
					headers:{
						'Content-Type': 'application/json'
					},
	
					body: JSON.stringify(bodyUser)
				})
			}
			catch(error){
				console.log(error)
			}
		}else{
			console.log("rechaza datos")
		}


	}
	return (
		<div className="container mt-5">
			<div className="col-4 p-5 border border-dark rounded-4">
				<div className="d-flex justify-content-between"> 
					<div className="mb-3">
						<label htmlFor="userName" className="form-label" >Nombre</label>
						<input type="text" className="form-control" id="userName"  onChange={e=>setUserName(e.target.value)} />
					</div>
					<div className="mb-3">
						<label htmlFor="userLastName" className="form-label" >Apellido</label>
						<input type="text" className="form-control" id="userLastName"  onChange={e=>setUserLastName(e.target.value)}/>
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="userPhone" className="form-label" >Numero de telefono</label>
					<input type="text" className="form-control" id="userPhone"  onChange={e=>setUserPhone(e.target.value)}/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e=>setUserEmail(e.target.value)}/>				
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
					<input type="password" className="form-control" id="exampleInputPassword1" onChange={e=>setUserPass(e.target.value)}/>
				</div>
				<button type="" className="btn btn-primary" onClick={e=>createUser()}>Crear</button>
			</div>
		</div>
	);
};
