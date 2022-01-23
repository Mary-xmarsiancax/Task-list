import React from "react";
import s from "./LoginForm.module.css"
import {useForm} from "react-hook-form";
import {Button, Input, TextField} from "@mui/material";
import {setAuthorizationHeader, usersApi} from "../../../api/api";
import {setRegistrationData} from "../../../store/registration-reducer";
import {useDispatch} from "react-redux";

const RegistrationForm = () => {
    const dispatch = useDispatch()
    const {register,handleSubmit}=useForm()
    const onSubmit = (data) => {
        console.log(data)
        usersApi.usersLogin(data)
            .then(response=>{
                    let {id, username, token} = response.data;
                    dispatch(setRegistrationData({id, username, token,isAuth: true} ))
                    localStorage.setItem("token", token)
                    setAuthorizationHeader(token)
            })
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