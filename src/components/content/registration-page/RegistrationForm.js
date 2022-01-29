import React from "react";
import s from "./RegistrationForm.module.css"
import {useForm} from "react-hook-form";
import {Button, Input, TextField} from "@mui/material";
import {setAuthorizationHeader, usersApi} from "../../../api/api";
import {setRegistrationData} from "../../../store/registration-reducer";
import {connect, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


const RegistrationForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        usersApi.usersRegistration(data)
            .then(response => {
                    let {id, username} = response.data;
                    let {token} = response.data
                    dispatch(setRegistrationData({id, username}))
                    localStorage.setItem("token", token)
                    setAuthorizationHeader(token)
                    navigate("/taskList", {replace: true})
                }
            )
    }
    return (
        <div className={s.loginFormWr}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.userName + "" + s.loginInput}>
                    <TextField id="filled-basic" label="username" variant="filled"  {...register("username")}/>
                </div>
                <div className={s.password + "" + s.loginInput}>
                    <TextField id="filled-basic" label="password" variant="filled" type="password" {...register("password")}/>
                </div>
                <div className={s.password + "" + s.loginInput}>
                    <TextField id="filled-basic" label="repeat password" variant="filled" type="password" {...register("password")}/>
                </div>
                <div className={s.loginButton}>
                    <Button variant="contained" type="submit">
                        Send
                    </Button>
                </div>
            </form>
        </div>

    )
}

export default RegistrationForm;