import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const My_Services=()=>{
    const { store, actions } = useContext(Context)
    const view=1





    useEffect(() => {
        actions.getProfile()
    }, [store.jwt_token]);

    







    return (
        <div className="my-account-css ">
            <h1>menu de servicios</h1>
        </div>

    )

}