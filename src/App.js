import './App.css';
import ContentContainer from "./components/content/contentContainer";
import HeaderContainer from "./components/header/header-container";
import {useEffect} from "react";
import {usersApi} from "./api/api";

function App() {

    return (
        <div>
            <HeaderContainer/>
            <ContentContainer/>
        </div>
    );
}

export default App;
