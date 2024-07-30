import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import useSWR from "swr";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Regs from "./components/Regs/Regs";
import Admin from "./components/Admin/Admin";
import Settings from "./components/Settings/Settings";
import './App.css'

// salut

const App = () => {
    const [token, setToken] = useState(null);

    const postTokenFetch = (data) => {
        return url => fetch(url, data).then(res => res.json())
    }

    const telegram = window.Telegram.WebApp;
    const themeParams = telegram.themeParams;


    const { data, error, isLoading } = telegram.initDataUnsafe.id ? useSWR("https://mytestserver.bot.nu/api/login", postTokenFetch({
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            telegram_user_id: telegram.initDataUnsafe?.user,
            username: telegram.initDataUnsafe?.user,
        })
    })) : {
        token: undefined
    };

    useEffect( () => {

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

    useEffect(() => {
        setToken(data.token)
    }, [data, error]);


    return isLoading ? (
        <BrowserRouter>
        <div>
            <div className="App">
                {token ? token : "Tokenul nu a fost primit"}
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
                    <Header></Header>
                </div>
            </div>
        </div>
        </BrowserRouter>
    ) : (
        <div>
            Asteptati
        </div>
    );
};

export default App;