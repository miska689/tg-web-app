import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Regs from "./components/Regs/Regs";
import Admin from "./components/Admin/Admin";
import Settings from "./components/Settings/Settings";
import './App.css'

const App = () => {
    const [token, setToken] = useState(null);
    const [num, setNum] = useState(0);

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

        setToken(loginFetch(telegram?.initDataUnsafe?.user, 'http://45.137.148.149:5000/api/login'))

        telegram.ready()
    }, []);

    const loginFetch = async (user, url) => {
       try{
           const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    telegram_user_id: user?.id,
                    username: user?.username,
                })
            });

            if(response.ok){
                const data = await response.json();
                setToken(data.token)
            }
       } catch (e) {
           console.error(e);
       }
    }

    return (
        <BrowserRouter>
        <div>
            <div className="App">
                <div className="app-flex">
                    <div className="div">
                        {JSON.stringify(window.Telegram.WebApp.initDataUnsafe.user)}
                    </div>
                    <div className="app-content">
                        <Routes>
                            <Route path="/" element={<Home token={token}/>} />
                            <Route path="/reg" element={<Regs token={token}/>} />
                            <Route path="/set" element={<Settings token={token}/>} />
                            <Route path="/admin" element={<Admin token={token}/>} />
                        </Routes>
                    </div>
                    {token ? (<Header></Header>) : null}
                </div>
            </div>
        </div>
        </BrowserRouter>
    );
};

export default App;