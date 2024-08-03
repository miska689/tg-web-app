import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Regs from "./components/Regs/Regs";
import Admin from "./components/Admin/Admin";
import Settings from "./components/Settings/Settings";
import './App.css'
import axios from "axios";
import Register from "./components/Register/Register";
import {generateSecretKey, validate} from "./telegramUtils/utils";

const App = () => {

    const telegram = window.Telegram.WebApp;
    const themeParams = telegram.themeParams;


    useEffect( () => {
        axios.defaults.headers.common['Telegram-Data'] = window?.Telegram?.WebApp?.initData;

        themeParams.header_bg_color = "black";
        themeParams.bg_color = "black";

        document.body.style.backgroundColor = themeParams.bg_color || 'black';
        document.body.style.color = themeParams.text_color || 'white';

        const secondaryBackground = document.querySelector('.secondary-background');

        if (secondaryBackground) {
            secondaryBackground.style.backgroundColor = themeParams.secondary_bg_color || 'black';
        }

        axios.get('https://mytestserver.bot.nu/api/service')
            .then(res => {
                console.log(res);
            }).catch(err => console.log(err));

        telegram.setHeaderColor("#000");
        telegram.ready()
    }, []);



    return (
        <BrowserRouter>
        {/*<div>*/}
        {/*    <div className="App">*/}
        {/*            */}
        {/*        <div className="app-flex">*/}
        {/*            /!*<div className="div">*!/*/}
        {/*            /!*    /!*<button onClick={printToken}>LoL</button>*!/*!/*/}
        {/*            /!*</div>*!/*/}
        {/*            <div className="app-content">*/}
        {/*                <Routes>*/}
        {/*                    <Route path="/" element={<Home token={token}/>} />*/}
        {/*                    <Route path="/reg" element={<Regs token={token}/>} />*/}
        {/*                    <Route path="/set" element={<Settings token={token}/>} />*/}
        {/*                    <Route path="/admin" element={<Admin token={token}/>} />*/}
        {/*                    <Route path="/register" element={<Register  token={token}/>} />*/}
        {/*                </Routes>*/}
        {/*            </div>*/}
        {/*            {token ? (<Header></Header>) : (<div></div>)}*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        </BrowserRouter>
    );
};

export default App;
