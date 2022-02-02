import React from "react";
import s from "./LoginForm.module.css"
import {useForm} from "react-hook-form";
import {Button, Input, TextField} from "@mui/material";
import {setAuthorizationHeader, usersApi} from "../../../api/api";
import {setRegistrationData,setErrorsText} from "../../../store/registration-reducer";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const LoginForm = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        usersApi.usersLogin(data)
            .then(response => {
                    let {id, username, token} = response.data;
                    dispatch(setRegistrationData({id, username, token}))
                    localStorage.setItem("token", token)
                    setAuthorizationHeader(token);
                    navigate("/taskList", {replace: true})
                }, error => {
                    let textError = error.response.data.errors.error[0]
                dispatch(setErrorsText(textError))
                }
            )
    }
    return (
        <div>
            <form className={s.loginFormWr} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.userName}>
                    <TextField id="username" label="username" variant="filled"  {...register("username", {
                        required: true,
                        maxLength: 25,
                        minLength: 3
                    })}/>
                </div>
                <div className={s.userNameErrorsSpan}>
                    {errors.username && errors.username.type === "required" &&
                    <div >This is required</div>}
                    {errors.username && errors.username.type === "maxLength" &&
                    <div>Max length exceeded</div>}
                    {errors.username && errors.username.type === "minLength" &&
                    <div>Min length not reached</div>}
                </div>
                <div className={s.password}>
                    <TextField id="password" label="password" variant="filled"
                               type="password" {...register("password", {
                        required: true,
                        maxLength: 25,
                        minLength: 3
                    })}/>
                </div>
                <div className={s.passwordErrorsSpan}>
                    {errors.password && errors.password.type === "required" &&
                    <div>This is required</div>}
                    {errors.password && errors.password.type === "maxLength" &&
                    <div>Max length exceeded</div>}
                    {errors.password && errors.password.type === "minLength" &&
                    <div>Min length not reached</div>}
                    {props.textError && <div className={s.ErrorsMessagesSpan}>{props.textError}</div>}
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
export default LoginForm;