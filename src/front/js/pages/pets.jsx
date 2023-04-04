import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Pets=()=>{
    const { store, actions } = useContext(Context)
    const view=1





    useEffect(() => {
        actions.getProfile()
    }, [store.jwt_token]);

    







    return (
        <div className="my-account-css ">
            <h1>menu de pets</h1>
        </div>

    )

}