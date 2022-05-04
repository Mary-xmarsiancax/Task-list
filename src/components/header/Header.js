import s from "../header/Header.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {setAuthorizationHeader, usersApi} from "../../api/api";
import {setRegistrationData} from "../../store/registration-reducer";
import {useDispatch} from "react-redux";

const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            usersApi.getCurrentUser()
                .then(response => {
                    dispatch(setRegistrationData({...response.data}));
                }, err => {
                    setAuthorizationHeader("");
                    navigate('/login', {replace: true})
                })
        } else {
                navigate('/login', {replace: true})
        }
    }, [])

    const onLogout = () => {
        usersApi.usersLogout()
        usersApi.getCurrentUser()
            .then(response => {
                dispatch(setRegistrationData({...response.data}));
            }, err => {
                setAuthorizationHeader("");
                navigate('/login', {replace: true})
                dispatch(setRegistrationData(
                    {id: null,
                    username: ""})
                )
            })
    }

    return (
        <div className={s.headerWr}>
            <div className={s.headerText}>
                NOTEPAD
            </div>
            {props.username ?
                <div className={s.headerLoginText}>
                    {props.username}
                    <button onClick={onLogout} className={s.logoutBtn}>Logout</button>
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