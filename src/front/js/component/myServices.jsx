import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export const My_Services=()=>{
    const { store, actions } = useContext(Context);
    const [view, setView] = useState(0);
    const [service, getService] = useState({});
    const [animation, setAnimation] = useState(0);
    const navigate = useNavigate();

    console.log(store.user)

    const splitDate = (date) => {
        let aux = date.split(' ');
        let newDate = aux[0] + " " + aux[1] + " " + aux[2] + " " + aux[3]
        return newDate;
    }

    /* Thu, 13 Apr 2023 00:00:00 GMT */

    const loadPage = (num) => {
        setView(num)
        setAnimation(1)
    }

    useEffect(() => {
        actions.getProfile()
    }, [store.jwt_token]);

    const deleteService = async (service_id) => {
        console.log("entra a eliminar el id: " ,service_id)
        try{
            const response =  await fetch(process.env.BACKEND_URL + `/api/my-services/${service_id}`,{
                method: 'DELETE',
                header: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                }
            })
            if (response.ok){
                toast.success("Servicio eliminado correctamente")
                setView(0)
                actions.getProfile()
            }else throw new Error(response.status);
        }
        catch(error){
            console.log(error)
        }
    }

    const serviceInfo=()=>{
        let serviceInfo = service.item
        return(
            <div className={`d-flex justify-content-between ${animation == 1 ? "slide-in-right":"nothing"}`}>
                <div className="card bg-light" style={{width: "auto", borderRadius:"5px", boxShadow:"0 0 10px rgba(54, 13, 124, 0.7)"}}>
                    <div className="card-header d-flex justify-content-between flex-row">
                        <h5 className="card-title p-2 text-center bg-white my-services mt-2" style={{color:"#AB46D2", fontWeight:"bold"}}>Información Detallada ID-{serviceInfo.id}</h5>
                        <button type="button" className="btn-close ms-4 mt-3" aria-label="Close" onClick={e=>(loadPage(0), setAnimation(1))}></button>
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-center flex-column">
                        <img className="mt-2 mb-3" src="https://cdn-icons-png.flaticon.com/512/9184/9184239.png" alt="Service Logo" width="150vh" height="150vw" style={{objectFit:"cover"}}></img>
                        <div className="container d-flex flex-column text-start bg-light p-3">
                            <span><b>ID Servicio:</b> {serviceInfo.id}</span>
                            <span><b>Concepto:</b> {serviceInfo.service_name}</span>
                            <span><b>Fecha:</b> {serviceInfo.date}</span>
                            <span><b>Titular:</b> {serviceInfo.owner_name}</span>
                            <span><b>Mascota:</b> {serviceInfo.pet_name}</span>
                            <span><b>Especie:</b> {serviceInfo.pet_species}</span>
                        </div> 
                        <button className="btn btn-light text-danger hover-nav m-3" onClick={(e) => {deleteService(serviceInfo.id)}}>Eliminar Servicio - <i className="text-danger fa-regular fa-trash-can"/> </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="d-flex align-items-center h-100 fondo">
            <div className="d-flex flex-column" style={{width:"58%"}}>
                <div className="">
                    <h5 className="p-2 text-center bg-white m-4 my-services" style={{color:"#AB46D2", fontWeight:"bold"}}>Lista de Servicios Agendados</h5>
                    <div>
                        <ul className="p-0 text-start list-group ms-2">
                        {
                            store.user ? (
                                    store.user.services.map((item,index) => {
                                        let shortDate = splitDate(item.date)
                                        return (
                                            <li className="d-flex align-items-center justify-content-center flex-column p-2 ms-4 me-4 mb-2 bg-white my-services" key={item.id} onClick={(e)=>(loadPage(2),getService({item}),setAnimation(1))}>                               
                                                <span>{item.service_name} - {item.pet_name} - {shortDate}</span>
                                            </li>
                                        )
                                    })
                                    ) : (
                                        <div className="d-flex align-items-center justify-content-center fs-3" style={{ height: "45vh" }}>
                                            <div className="spinner-border text-light" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    )
                        }
                        </ul>
                    </div>
                </div>
                <div className="text-center flex-fill">
                    <Link to="/services">
                        <button className="btn btn-light mt-3 hover-nav" onClick={e=>loadPage(1)} style={{ color: "#AB46D2", fontWeight: "bold" }}>
                            Agendar un nuevo servicio
                        </button>
                    </Link>
                </div>
            </div>
            <div className="d-flex flex-fill align-items-center justify-content-center">
                {
                    view == 0 ? (
                        <img className="mb-3" src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" alt="Service Logo" width="250vh" height="250vw" style={{objectFit:"cover"}}></img>
                    ) : serviceInfo()
                }
            </div>
        </div>
    )
}