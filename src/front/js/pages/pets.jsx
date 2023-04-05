import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import logoblancoUrl from "../../img/logoblanco.png";



export const Pets=()=>{
    const { store, actions } = useContext(Context)
    const [view , setView] = useState(1)
    const [petName , getPetName] = useState()
    const [petAge , getPetAge] = useState()
    const [petRace, getPetRace] = useState()
    const [petGender, getPetGender] = useState()
    const [petSpecies, getPetSpecies] =useState()

    const loadPage=(num)=>{
        setView(num)
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

    const uploadPetInfo=(event)=>{
        event.preventDefault();
        
        const bodyPet={
            "name" : petName,
            "age": petAge,
            "race": petRace,
            "gender":petGender,
            "species":petSpecies,
            "owner": store.user.id
        }
        if (verifyInput(petAge, petRace, petName, petGender, petSpecies)) {

            try{

            }
            catch(error){
                
            }







            console.log(store.user)
            console.log(bodyPet)
            console.log("todo ok")
        } else
            return(alert("datos incorrectos") )
    }




    const newPet=()=>{
        return(
            <div>
                <h1>Formulario nuevas mascotas</h1>
                <div >
                    <form className="col-6">
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
                        <button type="submit" className="mt-4 btn btn-primary" onClick={uploadPetInfo}>Agregar mascota</button>
                    </form>
                </div>
            </div>
        )
    }

    const petInfo=()=>{
        return(
            <h1>info mascota selecionda</h1>
        )
    }


    return (
        <div className="d-flex h-100 fondo">
            <div className="col-4 border d-flex flex-column justify-content-between">
                <div>
                    <h5>menu de pets</h5>
                    <div>listado de las pets </div>

                </div>
                <div>
                    <button onClick={e=>loadPage(1)}>
                        Agregar una nueva mascota
                    </button>
                    <button onClick={e=>loadPage(2)}>
                        ver info mascota
                    </button>
                </div>
            </div>
            <div className="flex-fill border ">
                {
                        view == 0 ? (<p>elem 2 </p>) : view == 1 ? newPet(): petInfo()
                }
            </div>
        </div>

    )

}