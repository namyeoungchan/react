import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './component/Main.jsx';
import LoginPage from "./component/LoginPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
