import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import toast, { Toaster } from 'react-hot-toast';
import logoblancoUrl from "../../img/logoblanco.png";

export const Modal_Services = () => {
    const { store, actions } = useContext(Context);

    console.log(store.user)

    return (
        <div className="d-flex align-items-center justify-content-center">
            <button onClick={actions.getProfile} type="button" className="btn btn-dark btn-services hover-effect mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Agendar Servicio
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" tyle={{height:"10vh"}}>
                            <img style={{backgroundColor:"#AB46D2", height: "5vh", borderRadius:"5px"}} src={logoblancoUrl}></img>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{height:"70vh"}}>
                            <form className="service-form p-5 bg-light d-flex align-items-center justify-content-center flex-column" style={{height:"100%"}}>
                                <h2 style={{color:"#AB46D2", fontWeight:"bold"}}>
                                    Servicio de Consultas
                                </h2>
                                <img className="m-3" src="https://cdn-icons-png.flaticon.com/512/7613/7613784.png" alt="Service 1 Logo" width="100vh" height="100vw" style={{objectFit:"cover"}}></img>
                                <div className="mb-2" style={{width:"25vw"}}>
                                    <label htmlFor="petService" className="form-label" style={{color:"#AB46D2", fontWeight:"bold"}}>Titular</label>
                                    <input type="text" className="form-control" placeholder={store.user?.name + " " + store.user?.last_name} aria-label={store.user?.name + store.user?.last_name} disabled></input>
                                </div>

                                <div className="mb-2" style={{width:"25vw"}}>
                                    <label htmlFor="petService" className="form-label" style={{color:"#AB46D2", fontWeight:"bold"}}>Mascota</label>
                                    <select className="form-select" id="petRace" aria-label="Default select example">
                                        <option defaultValue={"Selecciona una mascota registrada"}>Selecciona una mascota registrada</option>
                                        {
                                            store.user?.pets?.map((item,index) => {
                                                    return (
                                                        <option className="d-flex m-4 justify-content-evenly p-2 bg-white borde" key={index} value={item.name}>
                                                            {item.name} ({item.species} - {item.gender})
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>  
                                </div>

                                <div className="mb-4" style={{width:"25vw"}}>
                                    <label htmlFor="dateService" className="form-label" style={{color:"#AB46D2", fontWeight:"bold"}}>Fecha</label>
                                    <input type="date" className="form-control" id="dateService" required />
                                </div>
                                    <button type="submit" className="btn btn-dark hover-effect btn-services">Confirmar</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}