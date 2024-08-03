import React from 'react';
import {useState} from "react";
import './Register.css'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = (props) => {
    const navigation = useNavigate();

    const [password, setPassword] = useState('');

    const telegram = window.Telegram.WebApp;

    const user = telegram.initDataUnsafe.user;

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('https://mytestserver.bot.nu/api/register', {
            "telegram_user_id": user?.id,
            "telegram_chat_id": user?.id,
            "username": user?.username,
            "password": password,
        }).then(res => {
            console.log(res)
            navigation('/')
        }).catch(err => {
            console.log(err)
        })

    };

    return (
        <div className="register container">
            <div className="register-form">
                <div className="profile-img">
                    <div className="img"></div>
                    <div className="username">
                        <h1 className={"tg-username"}>
                            {user ? user.username : "Username"}
                        </h1>
                    </div>
                </div>
                <form className={"form-reg"} onSubmit={handleSubmit}>
                    <div className="reg-inp-inf">
                        <label htmlFor="admin-pasword" className="form-label">Introduceti parola de administarot</label>
                        <input
                            placeholder={"Parola de Administrator"}
                            className="reg-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className={"button"} type="submit">Trimite</button>
                </form>
            </div>
        </div>
    );
};

export default Register;