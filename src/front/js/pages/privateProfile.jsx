import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export function PrivateProfile () {

    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        if (store.jwt_token == null) {
            alert("Por favor inicia sesión con tus credenciales de usuario")
            navigate("/login");
            return;
        }
        actions.getProfile()
    }, [store.jwt_token]);

    return (
        <div className="d-flex align-items-center justify-content-center" style={{minHeight:"85vh"}}>
            <div className="container d-flex align-items-center justify-content-evenly flex-column">
                <h1>
                    Demo Private Profile Info
                </h1>
                <img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="JWT Auth Logo" width="600" height="200" style={{objectFit:"contain"}}></img>
                {
                    store.user ? (
                        <div className="d-flex align-items-center justify-content-center mt-3">
                            <div className="container d-flex align-items-center justify-content-evenly flex-column">
                                <h5>¡Bienvenido a tu demo de perfil privado!</h5>
                                <h5>USER ID: {store.user.id}</h5>
                                <h5>EMAIL: {store.user.email}</h5>
                                <h5>NAME: {store.user.name}</h5>
                            </div>
                        </div>
                    ) : (
                        <h5>Cargando información privada...</h5>
                    )
                }
            </div>
        </div>
    )
}