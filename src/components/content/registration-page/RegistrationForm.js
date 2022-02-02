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
    const {register, handleSubmit,formState: { errors }} = useForm()
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
                    {errors.username && errors.username.type === "required" &&
                    <div className={s.userNameErrorsSpan}>This is required</div>}
                    {errors.username && errors.username.type === "maxLength" &&
                    <div className={s.userNameErrorsSpan}>Max length exceeded</div>}
                    {errors.username && errors.username.type === "minLength" &&
                    <div className={s.userNameErrorsSpan}>Min length not reached</div>}

                </div>
                <div className={s.password}>
                    <TextField id="password" label="password" variant="filled" type="password" {...register("password",
                        {
                            required: true,
                            maxLength: 25,
                            minLength: 3
                        }
                    )}/>
                    {errors.password && errors.password.type === "required" &&
                    <div className={s.passwordErrorsSpan}>This is required</div>}
                    {errors.password && errors.password.type === "maxLength" &&
                    <div className={s.userNameErrorsSpan}>Max length exceeded</div>}
                    {errors.password && errors.password.type === "minLength" &&
                    <div className={s.userNameErrorsSpan}>Min length not reached</div>}

                </div>
                <div className={s.repeatPassword}>
                    <TextField id="repeatPassword" label="repeat password" variant="filled" type="password" {...register("repeatPassword",
                        {
                            required: true,
                            maxLength: 25,
                            minLength: 3
                        }
                    )}/>
                    {errors.repeatPassword && errors.repeatPassword.type === "required" &&
                    <div className={s.repeatPasswordErrorsSpan}>This is required</div>}
                    {errors.repeatPassword && errors.repeatPassword.type === "maxLength" &&
                    <div className={s.userNameErrorsSpan}>Max length exceeded</div>}
                    {errors.repeatPassword && errors.repeatPassword.type === "minLength" &&
                    <div className={s.userNameErrorsSpan}>Min length not reached</div>}

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