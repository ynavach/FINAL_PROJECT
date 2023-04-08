import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Pets} from "../pages/pets.jsx"
import {My_Services} from "../pages/myServices.jsx"
import { Context } from "../store/appContext";
import toast, { Toaster } from 'react-hot-toast';
import fondologo from "../../img/fondologo.png";


export const My_account=()=>{
    const { store, actions } = useContext(Context)
    const [animation , setAnimation] = useState(0)
    const [view , setView] = useState(0)

    useEffect(() => {
        actions.getProfile()
        setAnimation(0)
    }, [store.jwt_token]);

    const LoadPage=(num)=>{
        setView(num)
        setAnimation(1)
    }

    const estilo={
        backgroundImage: `url(${fondologo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `center`,
    }




    return (
        <div className="my-account-css">
            <div className="d-flex m-5 justify-content-between h-100 "> 
                <div className="border col-3 d-flex flex-column me-5 fondo">
                    <div className="d-flex align-items-center justify-content-center flex-column"> 
                        <h5 className="text-light pt-5">INFORMACIÓN DE USUARIO</h5>
                        {
                            store.user ? (
                                    <div className="d-flex align-items-center justify-content-center flex-column p-3">
                                        <img className="profile-img pb-2" src="https://cdn-icons-png.flaticon.com/512/3076/3076404.png" alt="IMG Profile"/>
                                        <h6 className="text-light p-2">Nombre: {store.user.name} {store.user.last_name}</h6>
                                        <h6 className="text-light p-2">Email: {store.user.email}</h6>
                                        <h6 className="text-light p-2">Teléfono: {store.user.phone_number}</h6>
                                    </div>
                            ) : (
                                <div className="d-flex align-items-center justify-content-center fs-3" style={{height:"45vh"}} >
                                    <div className="spinner-border text-light" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>	
                            )
                        }
                    </div>
                    <div className="d-flex align-items-center justify-content-center p-3"> 
                        <button onClick={e=>LoadPage(1)} className="btn btn-light hover-effect" style={{color:"#AB46D2", fontWeight:"bold"}}>MIS MASCOTAS </button> 
                    </div>
                    <div className="d-flex align-items-center justify-content-center p-3">
                        <button onClick={e=>LoadPage(2)} className="btn btn-light hover-effect" style={{color:"#AB46D2", fontWeight:"bold"}}>SERVICIOS AGENDADOS</button>
                    </div>
                </div>
                
                <div className={`flex-fill slide-in-right ${animation == 1 ? "slide-in-right":"nada"} borde `} style={estilo}>
                    {
                        view == 0 ? (<p>elem 2 </p>) : view == 1 ?  <Pets/> : <My_Services/>
                    }
                </div>
            </div>
            <Toaster />          
        </div>
    )
}