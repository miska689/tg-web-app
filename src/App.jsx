import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Regs from "./components/Regs/Regs";
import Admin from "./components/Admin/Admin";
import Settings from "./components/Settings/Settings";
import './App.css'

const App = () => {

    useEffect(() => {
        const telegram = window.Telegram.WebApp;
        const themeParams = telegram.themeParams;

        themeParams.header_bg_color = "black";
        themeParams.bg_color = "black";

        document.body.style.backgroundColor = themeParams.bg_color || 'black';
        document.body.style.color = themeParams.text_color || 'white';

        const secondaryBackground = document.querySelector('.secondary-background');
        if (secondaryBackground) {
            secondaryBackground.style.backgroundColor = themeParams.secondary_bg_color || 'black';
        }
        telegram.setHeaderColor("#000");

        telegram.ready()
    }, []);

    return (
        <BrowserRouter>
        <div>
            <div className="App">
                <div className="app-flex">
                    <div className="app-content">
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/reg" element={<Regs/>} />
                            <Route path="/set" element={<Settings/>} />
                            <Route path="/admin" element={<Admin/>} />
                        </Routes>
                    </div>
                    <Header></Header>
                </div>
            </div>
        </div>
        </BrowserRouter>
    );
};

export default App;