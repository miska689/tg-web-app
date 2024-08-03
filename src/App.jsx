import React, {useEffect, useState} from 'react';
import {BrowserRouter, json, Navigate, Route, Routes} from "react-router-dom";
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
    const [status, setStaus] = useState(1)
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
            const postStatus = res.status;
            console.log(res);
            setStaus(postStatus)
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


    return (status >= 200 && status <= 499) ? (
        <BrowserRouter>
        <div>
            <div className="App">
                <div className="app-flex">
                    { JSON.stringify({isLogin}) }
                    <Routes>
                        <Route path="/" element={isLogin ? <Home/> : <Navigate to={'/register'}/>}/>
                        <Route path="/reg" element={isLogin ? <Regs/> : <Navigate to={'/register'}/>}/>
                        <Route path="/set" element={isLogin ? <Settings/> : <Navigate to={'/register'}/>}/>
                        <Route path="/admin" element={isLogin ? <Admin/> : <Navigate to={'/register'}/>}/>
                        <Route path="/register" element={isLogin ? <Navigate to={'/'}/> : <Register/> }/>
                    </Routes>
                    {isLogin ? (<Header></Header>) : (<></>)}
                </div>
            </div>
        </div>
        </BrowserRouter>
    ) : (<>{JSON.stringify({status})}</>);
};


export default App;
