import React from "react";
import s from "../content/LoginForm.module.css"
import {useForm} from "react-hook-form";
import {Button} from "@mui/material";

const LoginForm = () => {
    const onSubmit = () => {
        console.log("submit is success")
    }
    return (
        <form onSubmit={onSubmit}>
            <div className={s.loginInput}>
                <label>
                    username
                    <input name="username"/>
                </label>
            </div>
            <div className={s.loginInput}>
                <label >
                    password
                    <input name="password"/>
                </label>
            </div>
            <div className={s.loginButton}>
                <Button variant="contained" type="submit">
                    Send
                </Button>
            </div>
        </form>
    )
}
export default LoginForm;