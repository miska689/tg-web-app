import React, {useEffect, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css'
import axios from "axios";
import UserProfile from "./components/userProfile/userProfile";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Regs from "./components/Regs/Regs";
import Settings from "./components/Settings/Settings";
import Admin from "./components/Admin/Admin";
import Header from "./components/Header/Header";

const App = () => {
    const [isLogin, setLogin] = useState(false);

    const telegram = window.Telegram.WebApp;
    const themeParams = telegram.themeParams;
    const user = telegram.initDataUnsafe.user;

    useEffect( () => {
        axios.defaults.headers.common['Telegram-Data'] = window?.Telegram?.WebApp?.initData;

        axios.post('https://mytestserver.bot.nu/api/login', {
            "telegram_user_id": user?.id,
            "username": user?.username,
        }).then(res => {
            const postRes = res.data;

            setLogin(postRes.isOk)
        }).catch(err => {
            console.log("Inregistrativa!");
        })


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
                    {isLogin}
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/reg" element={<Regs/>}/>
                        <Route path="/set" element={<Settings/>}/>
                        <Route path="/admin" element={<Admin/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                    <Header></Header>
                </div>
            </div>
        </div>
        </BrowserRouter>
    );
};

export default App;
