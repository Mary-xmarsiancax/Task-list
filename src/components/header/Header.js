import s from "../header/Header.module.css"
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {usersApi} from "../../api/api";
import {setRegistrationData} from "../../store/registration-reducer";
import {useDispatch} from "react-redux";

const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {

            usersApi.getCurrentUser()
                .then(response => {
                    console.log(response)
                    dispatch(setRegistrationData({...response.data, isAuth: true}));
                }, err => navigate('/login', {replace: true}))
        } else {
            if (!props.isAuth) {
                navigate('/login', {replace: true})
            }
        }
    }, [])

    return (
        <div className={s.headerWr}>
            <div className={s.headerText}>
                NOTEPAD
            </div>
            {props.username ?
                <div className={s.headerLoginText}>
                    {props.username}
                    <button className={s.logoutBtn}>Logout</button>
                </div>
                :
                <div className={s.headerLoginText}>
                    <NavLink to="/login"> LOGIN</NavLink>
                    <span>/</span>
                    <NavLink to="/registration"> REGISTRATION </NavLink>
                </div>
            }
        </div>
    )
}
export default Header;