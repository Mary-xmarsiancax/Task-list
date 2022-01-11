import {Redirect} from "react-router-dom";

const withTaskListRedirect = () => {
    class RedirectToTaskListComponent extends React.Component {
        render() {
            return <Redirect to={"/taskList"}/>
            }
        }
}
export default withTaskListRedirect;
