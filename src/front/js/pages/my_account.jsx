import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const My_account=()=>{
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getProfile()
    }, [store.jwt_token]);

    







    return (
        <div className="my-account-css ">
            <div className="d-flex border m-5 justify-content-between h-100"> 
                <div className="border border-primary col-3 d-flex flex-column ">
                    <div className="flex-fill border-bottom"> 
                    <h5>Informacion del usuario:</h5>
                    {
                        store.user ? (
                                <div >
                                    <div>Nombre y apellido: {store.user.name} {store.user.last_name}</div>
                                    <div>email: {store.user.email}</div>
                                    <div>Telefono: {store.user.phone_number}</div>
                                </div>
                        ) : (<h5>Cargando información privada...</h5>)
                    }
                    </div>
                    <div className="flex-fill border-bottom"> 
                        <button>MIS MASCOTAS</button> 
                    </div>
                    <div className="flex-fill">
                        <button>SERVICIOS AGENDADOS</button>
                    </div>
                </div>
                <div className="border border-dark flex-fill">
                    <p>elem 2 </p>
                </div>
            </div>           


        </div>

    )

}