import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Pets} from "../pages/pets.jsx"
import {My_Services} from "../pages/myServices.jsx"
import { Context } from "../store/appContext";
import fondologo from "../../img/fondologo.png";


export const My_account=()=>{
    const { store, actions } = useContext(Context)
    const [view , setView] = useState(1)


    const LoadPage=(num)=>{
        setView(num)
    }

    const estilo={
        backgroundImage: `url(${fondologo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `center`,
    }




    return (
        <div className="my-account-css ">
            <div className="d-flex border m-5 justify-content-between h-100"> 
                <div className="border border-primary col-3 d-flex flex-column me-5">
                    <div className="flex-fill border-bottom"> 
                        <h5>Informacion del usuario:</h5>
                        {/*
                            store.user ? (
                                    <div >
                                        <div>Nombre y apellido: {store.user.name} {store.user.last_name}</div>
                                        <div>email: {store.user.email}</div>
                                        <div>Telefono: {store.user.phone_number}</div>
                                    </div>
                            ) : (<h5>Cargando información privada...</h5>)
                            */ }
                    </div>
                    <div className="flex-fill border-bottom"> 
                        <button  onClick={e=>LoadPage(1)}>MIS MASCOTAS </button> 
                    </div>
                    <div className="flex-fill">
                        <button onClick={e=>LoadPage(2)}>SERVICIOS AGENDADOS</button>
                    </div>
                </div>
                <div className="border border-dark flex-fill" style={estilo}>
                    {
                        view == 0 ? (<p>elem 2 </p>) : view == 1 ?  <Pets/> : <My_Services/>
                    }
                </div>
            </div>           
        </div>

    )

}