import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import toast, { Toaster } from 'react-hot-toast';
import logoblancoUrl from "../../img/logoblanco.png";



export const Pets=()=>{
    const { store, actions } = useContext(Context)
    const [view , setView] = useState(0)
    const [petName , getPetName] = useState()
    const [petAge , getPetAge] = useState()
    const [petRace, getPetRace] = useState()
    const [petGender, getPetGender] = useState()
    const [petSpecies, getPetSpecies] =useState()
    const [newImage, getNewImage] = useState({title:"", file: null})
    const [pet,getPet] = useState({})
    const [animation , setAnimation] = useState(0)
    const [petList,getPetList] = useState(0);

    

    const loadPage=(num)=>{
        setView(num)
        setAnimation(1)
        
    }

    useEffect(() => {
        actions.getProfile()
        getPetList(2)
    }, [store.jwt_token]);

    const verifyInput = (age, race, name, gender, species) => {
        if (age == undefined || race == undefined || name == undefined ||  gender == undefined || species == undefined) {
            return false;
        } else {
            if (age.trim().length >= 1 && race.trim().length >= 1 && name.trim().length >= 1 && gender.trim().length >= 1 && species.trim().length >= 1) {
            return true;
        }
            return false;
        }
    };



    const uploadImage=async()=>{
        console.log("existe el archivo",newImage)
        let formData = new FormData()
        formData.append("file", newImage.file )
        formData.append("title", newImage.title )
        try {
            const response = await fetch (process.env.BACKEND_URL + "/api/upload",{
                method: 'POST',
                body: formData,         
            })
            if (response.ok){
                const body = await response.json();
                console.log("este es el response" , body.url)
                return body.url
            }else {
                alert("Se produjo un error al cargar la imagen su mascota");
                throw new Error(response.status);
            }
        }
        catch(error){
            console.log(error);
            return "https://cdn-icons-png.flaticon.com/512/1312/1312500.png"
        }
    }


    const uploadPetInfo= async(event)=>{
        event.preventDefault();

        let url = "https://cdn-icons-png.flaticon.com/512/1312/1312500.png"
        if (newImage.file !== null) {
            console.log("entra a cargar imagen")
            url = await uploadImage()
        }


        const bodyPet={
            "name" : petName,
            "age": petAge,
            "race": petRace, 
            "gender":petGender,
            "species":petSpecies,
            "photo": url
        }
        if (verifyInput(petAge, petRace, petName, petGender, petSpecies)) {
            try{
                const response= await fetch(process.env.BACKEND_URL + "/api/pets",{

                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${store.jwt_token}`
                    },
                    body: JSON.stringify(bodyPet)                   
                });
                if (response.status == 201) {
                    toast.success("Mascota registrada satisfactoriamente");    
                    actions.getProfile() 
                    loadPage(0)
                } else {
                    toast.error("Se produjo un error al registrar su mascota");
                    throw new Error(response.status);
                }
            }
            catch(error){
                console.log(error);
            }
        } else
            return(toast.error("Error: datos incorrectos") )
    }

    const handleChange =(e)=>{
        let name = e.target.files[0].name
        getNewImage({
            ...newImage,
            title: name,
            file: e.target.files[0]
        })
    }


    const newPet=()=>{
        return(
            <div className={`d-flex justify-content-between ${animation == 1 ? "slide-in-right":"nada"}`}>
                <div className="p-3">
                    <h5 className="p-2 text-center bg-white m-4 private-title" style={{color:"#AB46D2", fontWeight:"bold"}}>Formulario para <br/> nuevas mascotas</h5>
                    <div >
                        <form className="col">
                            <div className="d-flex mt-3 justify-content-between">
                                <select className="form-select me-2" aria-label="Default select example" onChange={(e)=>getPetSpecies(e.target.value)}>
                                    <option defaultValue={"Especie"}>Especie</option>
                                    <option value="Gato">Gato</option>
                                    <option value="Perro">Perro</option>
                                </select>                
                                <select className="form-select ms-2" aria-label="Default select example" onChange={(e)=>getPetGender(e.target.value)}>
                                    <option defaultValue={"Genero"}>Genero</option>
                                    <option value="Hembra">Hembra</option>
                                    <option value="Macho">Macho</option>
                                </select>                          
                            </div>                  
                            <div className="my-3">
                                <input type="text"  placeholder="Nombre" className="form-control" id="petName" onChange={(e)=>getPetName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Edad"  className="form-control" id="petAge" maxLength={2} onChange={(e)=>getPetAge(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <select className="form-select" id="petRace" aria-label="Default select example" onChange={(e)=>getPetRace(e.target.value)}>
                                    <option defaultValue={"Raza"}>Raza</option>
                                    {
                                        petSpecies == "Perro" ? store.Perro.map((item,index) => 
                                    <option className="d-flex m-4 justify-content-evenly p-2 bg-white borde" key={index} value={item}>
                                        {item}
                                    </option>) : petSpecies == "Gato" ? store.Gato.map((item,index) => 
                                    <option className="d-flex m-4 justify-content-evenly p-2 bg-white borde" key={index} value={item}>
                                        {item}
                                    </option>) : <option> Selecione Especie</option>
                                    }
                                </select>         
                            </div>
                            <div className="mb-3 bg-white">
                                <label htmlFor="avatar" className="form-label  pt-2 px-3">Agrega una foto de tu mascota</label>
                                <input type="file" className="form-control" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handleChange}/>                            
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-light mt-4 hover-nav" onClick={uploadPetInfo} style={{color:"#AB46D2", fontWeight:"bold"}}>Agregar mascota</button>
                            </div>                        
                        </form>
                    </div>
                </div>
                <div className="p-3">
                    <button className="" onClick={e=>(loadPage(0))}><i className="fa-solid fa-xmark text-danger"/></button>
                </div>
            </div>
        )
    }

    const petInfo=()=>{
        let petInfo = pet.item
        return(
            <div className={`d-flex justify-content-between ${animation == 1 ? "slide-in-right":"nada"}`}>
                <div className="d-flex flex-column me-5">
                    <div className="mb-5">
                        <button className="float-end" onClick={e=>loadPage(0)}><i className="text-danger fa-solid fa-xmark"/></button>
                    </div>
                    <div className="d-flex align-items-center justify-content-evenly flex-row">
                        <img className="me-2 col-6 pet-pic" src={petInfo.photo}  style={{ objectFit: "contain" }}/>
                        <div className="container d-flex align-items-center flex-column text-start bg-light p-3 borde pet-info">
                            <div className="text-center">
                                <h2 className="ms-2">{petInfo.name}</h2>
                            </div>
                            <div className="col">
                                <b>Edad:</b>
                                <span className="ms-2">{petInfo.age} años</span>
                            </div>
                            <div className="col">
                                <b>Raza:</b>
                                <span className="ms-2">{petInfo.race}</span>
                            </div>
                            <div className="col">                            
                                <b>Especie:</b>
                                <span className="ms-2">{petInfo.species}</span>
                            </div>
                            <div className="col">                            
                                <b>Genero:</b> 
                                <span className="ms-2">{petInfo.gender}</span>
                            </div>
                        </div>                
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center m-3">
                        <button className="btn btn-light text-danger hover-nav m-3" onClick={e=>deleteListElement(pet.item.id)} >Eliminar Mascota - <i className="text-danger fa-regular fa-trash-can"/> </button>
                    </div>
                </div>
            </div>
        )
    }


    const deleteListElement = async (id)=>{
        console.log("entra a eliminar el id: " ,id)
        try{
            const response =  await fetch(process.env.BACKEND_URL + `/api/delete/${id}`,{
                method: 'DELETE',
                header: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                }
            })
            if (response.ok){
                toast.success("Mascota eliminada correctamente")
                setView(0)
                getPetList(5)
                actions.getProfile()
            }else throw new Error(response.status);
        }
        catch(error){
            console.log(error)
        }
    }




    return (
        <div className="d-flex align-items-center h-100 fondo">
            <div className="col-4 d-flex flex-column" style={{width:"35%"}}>
                <div className="">
                    <h5 className="p-2 text-center bg-white m-4 private-title" style={{color:"#AB46D2", fontWeight:"bold"}}>Lista de Mascotas Registradas</h5>
                    <div>
                        <ul className="p-0 text-start list-group ms-2"> 
                        {
                            store.user ? (
                                store.user.pets.length != [] ? (
                                    store.user.pets.map((item,index) => {
                                        return (
                                            <li className="d-flex align-items-center justify-content-center flex-column p-2 ms-4 me-4 mb-4 bg-white my-services" key={item.id} onClick={(e)=>(loadPage(2),getPet({item}),setAnimation(1))}>
                                                <div className="" >                                
                                                    {item.name} - {item.species}
                                                </div>
                                            </li>)
                                    })
                                ) : (
                                    <li className="d-flex align-items-center justify-content-center flex-column p-2 ms-4 me-4 mb-2 bg-white private-title">                               
                                        <span>¡Todavia no tienes mascotas registradas!</span>
                                    </li>)
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
                <div className=" text-center flex-fill">
                    <button className="btn btn-light mt-3 hover-nav" onClick={e=>loadPage(1)} style={{ color: "#AB46D2", fontWeight: "bold" }}>
                        Agregar una nueva mascota
                    </button>
                </div>
            </div>
            <div className="d-flex flex-fill align-items-center justify-content-center">
                {
                    view == 0 ? (<span/>) : view == 1 ? newPet(): petInfo()
                }
            </div>
        </div>
    )
}