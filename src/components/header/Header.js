import s from "../header/Header.module.css"
const Header = (props) => {
    return (
        <div className={s.headerWr}>
            <div className={s.headerText}>
                NOTEPAD
            </div>
            <div className={s.headerLoginText}>
                LOGIN/REGISTRATION
            </div>
        </div>
    )
}
export default Header;