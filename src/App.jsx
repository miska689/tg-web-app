import React, {useEffect, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css'
import axios from "axios";
import UserProfile from "./components/userProfile/userProfile";
import Register from "./components/Register/Register";

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
                    <Routes>
                        <Route path="/" element={isLogin ? <UserProfile /> : <Navigate to="/register" replace/>} />
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </div>
            </div>
        </div>
        </BrowserRouter>
    );
};

export default App;
