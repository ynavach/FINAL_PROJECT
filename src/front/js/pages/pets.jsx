import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
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
    const [animationInfo , setAnimationInfo] = useState(0)
    

    const loadPage=(num)=>{
        setView(num)
        setAnimation(1)
        setAnimationInfo(0)
    }

    useEffect(() => {
        actions.getProfile()
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
            return "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
        }
    }


    const uploadPetInfo= async(event)=>{
        event.preventDefault();

        let url = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"
        if (newImage.file !== null) {
            console.log("entra a cargar imagen")
            url = await uploadImage()
            console.log("url",url)
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
            console.log("cuerpo",bodyPet )
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
                    alert("Se ha agregado satisfactoriamente la mascota");                
                } else {
                    alert("Se produjo un error al agregar su mascota");
                    throw new Error(response.status);
                }
            }
            catch(error){
                console.log(error);
            }
        } else
            return(alert("datos incorrectos") )
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
                    <h3>Formulario nuevas mascotas</h3>
                    <div >
                        <form className="col">
                            <div className="d-flex mt-3">
                                <select className="form-select" aria-label="Default select example" onChange={(e)=>getPetSpecies(e.target.value)}>
                                    <option defaultValue={"Especie"}>Especie</option>
                                    <option value="Gato">Gato</option>
                                    <option value="Perro">Perro</option>
                                </select>                
                                <select className="form-select" aria-label="Default select example" onChange={(e)=>getPetGender(e.target.value)}>
                                    <option defaultValue={"Genero"}>Genero</option>
                                    <option value="Hembra">Hembra</option>
                                    <option value="Macho">Macho</option>
                                </select>                          
                            </div>                  
                            <div className="my-3">
                                <label htmlFor="petName" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="petName" onChange={(e)=>getPetName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="petAge" className="form-label">Edad</label>
                                <input type="text" className="form-control" id="petAge" onChange={(e)=>getPetAge(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="petRace" className="form-label">Raza</label>
                                <input type="text" className="form-control" id="petRace" onChange={(e)=>getPetRace(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="avatar" className="form-label">Cargue una imagen</label>
                                <input type="file" className="form-control" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handleChange}/>                            
                            </div>                        
                            <button type="submit" className="mt-4 btn btn-primary" onClick={uploadPetInfo}>Agregar mascota</button>
                        </form>
                    </div>
                </div>
                <div className="p-3">
                    <button className="" onClick={e=>(loadPage(0),setAnimationInfo(1))}>X</button>
                </div>
            </div>
        )
    }

    const petInfo=()=>{
        console.log("imprime el prop", pet.item)
        let petInfo = pet.item
        return(
            <div className={`ms-4 d-flex ${animation == 1 ? "slide-in-right":"nada"}`}>
                <div>
                    <h5 className="my-4">Informacion de {petInfo.name} </h5>
                    <div className="d-flex">
                        <img className="me-2 col-6" src={petInfo.photo}  style={{ objectFit: "contain" }}/>
                        <div className="container text-start">
                            <div className="row">
                                <div className="col-4">
                                Nombre:
                                </div>
                                <div className="col">
                                {petInfo.name}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                Edad:
                                </div>
                                <div className="col">
                                {petInfo.age}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                Raza:
                                </div>
                                <div className="col">
                                {petInfo.race}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                Especie:
                                </div>
                                <div className="col">
                                {petInfo.species}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                Genero:
                                </div>
                                <div className="col">
                                {petInfo.gender}
                                </div>
                            </div>
                        </div>                
                    </div>
                    <h5 className="mt-4">historial de la mascota</h5>
                </div>
                <div className="p-3">
                    <button className="" onClick={e=>loadPage(0)}>X</button>
                </div>
            </div>
        )
    }


    return (
        <div className="d-flex h-100 fondo">
            <div className="col-4  d-flex flex-column justify-content-between">
                <div>
                    <h5 className="border-bottom p-3 text-center bg-white m-3 borde">Lista de las mascotas registradas</h5>
                    <div>
                        {
                            store.user ? (
                                <ul className="p-0 text-start">{store.user.pets.map((item,index) => 
                                    <li className="d-flex m-3 justify-content-between p-2 bg-white borde" key={index} onClick={(e)=>(loadPage(2),getPet({item}),setAnimation(1))}>
                                        <div className="ms-5">
                                            Nombre: {item.name}
                                        </div>
                                        <div className="me-5">
                                            Especie: {item.species}
                                        </div>
                                    </li>)}
                                </ul>
                            ) : (<h5>Cargando información privada...</h5>)
                        }
                    </div>
                </div>
                <div>
                    <button onClick={e=>loadPage(1)}>
                        Agregar una nueva mascota
                    </button>
                </div>
            </div>
            <div className={`flex-fill  border-start border-dark`}>
                {
                    view == 0 ? (<span/>) : view == 1 ? newPet(): petInfo()
                }
            </div>
        </div>

    )

}