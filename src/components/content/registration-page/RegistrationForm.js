import React from "react";
import s from "./RegistrationForm.module.css"
import {useForm} from "react-hook-form";
import {Button, Input, TextField} from "@mui/material";
import {setAuthorizationHeader, usersApi} from "../../../api/api";
import {setErrorsText, setRegistrationData, setRegistrationErrorsText} from "../../../store/registration-reducer";
import {connect, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


const RegistrationForm = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        usersApi.usersRegistration(data)
            .then(response => {
                    let {id, username} = response.data;
                    let {token} = response.data
                    dispatch(setRegistrationData({id, username}))
                    localStorage.setItem("token", token)
                    setAuthorizationHeader(token)
                    navigate("/taskList", {replace: true})
                },error => {
            let registrationTextError = error.response.data.errors[0]
            dispatch(setRegistrationErrorsText(registrationTextError))
        }
            )
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.loginFormWr}>
                <div className={s.userName}>
                    <TextField id="username" label="username" variant="filled"  {...register("username",
                        {
                            required: true,
                            maxLength: 25,
                            minLength: 3
                        }
                    )}/>
                </div>
                <div className={s.userNameErrorsSpan}>
                    {errors.username && errors.username.type === "required" &&
                    <div>This is required</div>}
                    {errors.username && errors.username.type === "maxLength" &&
                    <div>Max length exceeded</div>}
                    {errors.username && errors.username.type === "minLength" &&
                    <div>Min length not reached</div>}
                </div>
                <div className={s.password}>
                    <TextField id="password" label="password" variant="filled" type="password" {...register("password",
                        {
                            required: true,
                            maxLength: 25,
                            minLength: 3
                        }
                    )}/>
                </div>
                <div className={s.passwordErrorsSpan}>
                    {errors.password && errors.password.type === "required" &&
                    <div>This is required</div>}
                    {errors.password && errors.password.type === "maxLength" &&
                    <div>Max length exceeded</div>}
                    {errors.password && errors.password.type === "minLength" &&
                    <div>Min length not reached</div>}
                </div>
                <div className={s.repeatPassword}>
                    <TextField id="repeatPassword" label="repeat password" variant="filled"
                               type="password" {...register("repeatPassword",
                        {
                            required: true,
                            maxLength: 25,
                            minLength: 3
                        }
                    )}/>
                </div>
                <div className={s.repeatPasswordErrorsSpan}>
                    {errors.repeatPassword && errors.repeatPassword.type === "required" &&
                    <div>This is required</div>}
                    {errors.repeatPassword && errors.repeatPassword.type === "maxLength" &&
                    <div>Max length exceeded</div>}
                    {errors.repeatPassword && errors.repeatPassword.type === "minLength" &&
                    <div>Min length not reached</div>}
                    {props.registrationTextError && <div className={s.registrationMessageErrorsSpan}>{props.registrationTextError}</div>}
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