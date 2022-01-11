import s from "../header/Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
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