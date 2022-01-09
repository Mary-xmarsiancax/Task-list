import React from "react";
import s from "./LoginForm.module.css"
import {useForm} from "react-hook-form";
import {Button, Input, TextField} from "@mui/material";
import {usersApi} from "../../../api/api";

const RegistrationForm = () => {
    const {register,handleSubmit}=useForm()
    const onSubmit = (data) => {
        console.log(data)
        usersApi.usersRegistration(data)
            .then(response=>console.log ("data to send on server" + data))
    }
    return (
        <div className={s.loginFormWr}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.userName + "" + s.loginInput}>
                        <TextField id="filled-basic" label="username" variant="filled" {...register("username")}/>
                </div>
                <div className={s.password + "" + s.loginInput}>
                    <TextField id="filled-basic" label="password" variant="filled"  {...register("password")}/>
                </div>
                <div className={s.password + "" + s.loginInput}>
                    <TextField id="filled-basic" label="repeat password" variant="filled"  {...register("password")}/>
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