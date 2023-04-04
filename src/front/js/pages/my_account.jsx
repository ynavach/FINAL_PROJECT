import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const My_account=()=>{
    const { store, actions } = useContext(Context)

    return (
        <div className="my-account-css ">
            <div className="d-flex border m-5 justify-content-between h-100"> 
                <div className="border border-primary col-3 d-flex flex-column ">
                    <div className="flex-fill border-bottom"> 
                        INFORMACION DE USUARIO
                        <div>nombre</div>
                        <div>correo</div>
                        <div>numero de telf</div>
                    </div>
                    <div className="flex-fill border-bottom"> MIS MASCOTAS</div>
                    <div className="flex-fill"> SERVICIOS AGENDADOS</div>
                </div>
                <div className="border border-dark flex-fill">
                    <p>elem 2 </p>
                </div>
            </div>           


        </div>

    )

}