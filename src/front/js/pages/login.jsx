import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export function LoginPage () {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const loginEmail = event.target.elements.loginEmail.value
        const loginPassword = event.target.elements.loginPassword.value
        const loginData = {
            "email": loginEmail,
            "password": loginPassword,
          }
        console.log(loginData)

        try {
            const response = await fetch(process.env.BACKEND_URL + "/api/login", {
                method: "POST",
                body: JSON.stringify(loginData),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if (response.status == 200) {
                alert("Se ha iniciado sesión satisfactoriamente");
                const body = await response.json();
                console.log(body);
                actions.setToken(body.jwt_token);
                navigate("/profile");
            }
            else if (response.status == 400) {
                alert("Se produjo un error al iniciar sesión: datos incorrectos");
                throw new Error (response.status);
            }
            else {
                alert("Se produjo un error al iniciar sesión");
                throw new Error (response.status);
            }
        } catch (error) {
            console.log("Estatus de error: ", error);
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center flex-column" style={{minHeight:"100vh"}}>
            <div className="container login-ccs d-flex align-items-center justify-content-center flex-row">
                <img className="login-img" src="https://img.freepik.com/free-photo/selective-kitten-stand-with-hanging-fluffy-ball_181624-57269.jpg?w=360&t=st=1680628846~exp=1680629446~hmac=21e4216930a15352f4094d15a6a90876d275a0f4ffa73fcd98dfda418871f2c5" alt="IMG Login"/>
                <form onSubmit={handleSubmit} className="login-form p-5 bg-light d-flex align-items-center justify-content-center flex-column">
                    <h2>
                        Inicio de Sesión
                    </h2>
                    <img className="mb-4 mt-1" src="https://www.iconpacks.net/icons/2/free-user-login-icon-3057-thumb.png" alt="JWT Auth Logo" width="100" height="100" style={{objectFit:"contain"}}></img>
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="loginPassword" required />
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <button type="submit" className="btn btn-dark" style={{backgroundColor:"#AB46D2", border:"none"}}>Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </div>
    )
}