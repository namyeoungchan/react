import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./common/LoginPage.jsx";
import Main from "./common/Main.jsx";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main/>}>
                        <Route index element={<LoginPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
