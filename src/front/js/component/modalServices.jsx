import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import logoblancoUrl from "../../img/logoblanco.png";

export const Modal_Services = (props) => {
    
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    
    console.log(store.user)
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const serviceName = props.name
        const serviceDate = event.target.elements.serviceDate.value
        const serviceOwner = event.target.elements.serviceOwner.value
        const servicePet = event.target.elements.servicePet.value
        let servicePetSpecies = ""
        let servicePetID = ""

        const getPetID = (name) => {
            store.user.pets.map((item,index) => {
                if (item.name == name) {
                    servicePetID = item.id;
                    servicePetSpecies = item.species
                    return servicePetID;
                }
            })
        }

        const getPetSpecies = (name) => {
            store.user.pets.map((item,index) => {
                if (item.name == name) {
                    servicePetSpecies = item.species
                    return servicePetSpecies;
                }
            })
        }

        getPetID(servicePet)
        getPetSpecies(servicePet)

        const serviceData = {
            "service_name": serviceName,
            "date": serviceDate,
            "owner_name": serviceOwner,
            "pet_name": servicePet,
            "pet_species": servicePetSpecies,
            "pet_id": servicePetID
        }

        try {
            const response = await fetch(process.env.BACKEND_URL + "/api/my-services", {
                method: "POST",
                body: JSON.stringify(serviceData),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${store.jwt_token}`,
                }
            })
            if (response.status == 201) {
                const body = await response.json();
                console.log(body);
                toast.success("Servicio agendado correctamente", {duration:4000});
            }
            else if (response.status == 400) {
                toast.error("Error al agendar servicio: datos incorrectos", {duration:4000});
                throw new Error (response.status);
            }
            else {
                toast.error("Se produjo un error al agendar el servicio", {duration:4000});
                throw new Error (response.status);
            }
        } catch (error) {
            console.log("Estatus de error: ", error);
        }
    }

    const [ID, setID] = useState(() => {
        let random = Math.floor(Math.random()*1000);
        return random;
    })

    return (
        <div className="d-flex align-items-center justify-content-center">
            <button onClick={actions.getProfile} type="button" className="btn btn-dark btn-services hover-effect mt-3" data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${ID}`}>
                Agendar Servicio
            </button>

            <div className="modal fade" id={`staticBackdrop-${ID}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{width:"35vw"}}>
                        <div className="modal-header" style={{height:"10vh"}}>
                            <img style={{backgroundColor:"#AB46D2", height: "5vh", borderRadius:"5px"}} src={logoblancoUrl}></img>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{height:"70vh"}}>
                            <form onSubmit={handleSubmit} className="service-form p-5 bg-light d-flex align-items-center justify-content-center flex-column" style={{height:"100%"}}>
                                <h2 style={{color:"#AB46D2", fontWeight:"bold"}}>
                                    {props.name}
                                </h2>
                                <img className="m-3" src="https://cdn-icons-png.flaticon.com/512/7613/7613784.png" alt="Service Logo" width="100vh" height="100vw" style={{objectFit:"cover"}}></img>
                                <div className="mb-2" style={{width:"25vw"}}>
                                    <label htmlFor="serviceOwner" className="form-label" style={{color:"#AB46D2", fontWeight:"bold"}}>Titular</label>
                                    <input type="text" className="form-control" placeholder={store.user?.name + " " + store.user?.last_name} value={store.user?.name + " " + store.user?.last_name} id="serviceOwner" disabled></input>
                                </div>

                                <div className="mb-2" style={{width:"25vw"}}>
                                    <label htmlFor="servicePet" className="form-label" style={{color:"#AB46D2", fontWeight:"bold"}}>Mascota</label>
                                    <select className="form-select" id="servicePet" aria-label="Default select example">
                                        <option defaultValue={"Selecciona una mascota registrada"}>Selecciona una mascota registrada</option>
                                        {
                                            store.user?.pets? (
                                                store.user.pets.length != []? (
                                                    store.user.pets.map((item,index) => {
                                                        return (
                                                            <option className="d-flex m-4 justify-content-evenly p-2 bg-white borde" key={index} value={item.name}>
                                                                {item.name} ({item.species} - {item.gender})
                                                            </option>
                                                        );
                                                    })
                                                ):(
                                                    <option className="d-flex m-4 justify-content-evenly p-2 bg-white borde">
                                                        ¡No tienes mascotas registradas!
                                                    </option>
                                                )
                                            ):(
                                                <option className="d-flex m-4 justify-content-evenly p-2 bg-white borde">
                                                        Cargando información...
                                                </option>
                                            )
                                        }    
                                    </select>  
                                </div>

                                <div className="mb-4" style={{width:"25vw"}}>
                                    <label htmlFor="serviceDate" className="form-label" style={{color:"#AB46D2", fontWeight:"bold"}}>Fecha</label>
                                    <input type="date" className="form-control" id="serviceDate" required />
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