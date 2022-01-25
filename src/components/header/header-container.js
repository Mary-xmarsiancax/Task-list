import Header from "./Header";
import {connect} from "react-redux";

const HeaderContainer = (props) => {
    return (
        <div>
            <Header username={props.username}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    username: state.registration.username
})
export default connect(mapStateToProps)(HeaderContainer);