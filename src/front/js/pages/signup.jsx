import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import tiye from "../../img/tj.jpg";
import { Context } from "../store/appContext";
import toast, { Toaster } from 'react-hot-toast';

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [userEmail, setUserEmail] = useState();
  const [userPass, setUserPass] = useState();
  const [userName, setUserName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userPhone, setUserPhone] = useState();
  const navigate = useNavigate();

  const verifyInput = (email, pass, name, last, phone) => {
    if (email == undefined || pass == undefined || name == undefined ||  last == undefined || phone == undefined) {
      return false;
    } else {
      if (email.trim().length >= 1 && pass.trim().length >= 1 && name.trim().length >= 1 && last.trim().length >= 1 && phone.trim().length >= 1) {
        return true;
      }
      return false;
    }
  };

  const createUser = async (event) => {
    event.preventDefault();
    let bodyUser = {
      email: userEmail,
      password: userPass,
      name: userName,
      last_name: userLastName,
      phone_number: userPhone,
      medic: false,
    };

    if (verifyInput(userEmail, userPass, userName, userLastName, userPhone)) {
      console.log("carga datos");
      try {
        const response = await fetch(process.env.BACKEND_URL + "/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyUser),
        });
        if (response.status == 201) {
          toast.success("Usuario registrado con éxito", {duration:4000});
          navigate("/login");
        } else {
          toast.error("Error en el registro de usuario", {duration:4000});
          throw new Error(response.status);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Error: Ingrese todos los datos requeridos", {duration:4000});
    }
  };
  
  return (
    <div className="signup-flow" style={{minHeight:"99vh"}}>
      <div className="container d-flex align-items-center justify-content-center signup-css">
        <form className="col-4 p-5 bg-light  signup-form">
          <div className="d-flex flex-column align-items-center">
            <h2>Registro de Cuenta</h2>
          </div>
          <div className="d-flex justify-content-between">
            <div className="mb-3 me-3">
              <label htmlFor="userName" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control" id="userName" onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="userLastName" className="form-label">
                Apellido
              </label>
              <input type="text" className="form-control" id="userLastName" onChange={(e) => setUserLastName(e.target.value)}/>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="userPhone" className="form-label">
              Número de teléfono
            </label>
            <input type="text" className="form-control" id="userPhone" onChange={(e) => setUserPhone(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo Electrónico
            </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setUserPass(e.target.value)}/>
          </div>
          <div className="d-flex flex-column align-items-center">
            <button type="" className="btn text-white" style={{ backgroundColor: "#AB46D2" }} onClick={createUser}>
              Crear Cuenta
            </button>
          </div>
        </form>
        <img className=" image-form" src={tiye} alt="JWT Auth Logo" style={{ objectFit: "contain" }}/>
      </div>
      <Toaster />
    </div>
  );
};
