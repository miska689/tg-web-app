import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Regs from "../Regs/Regs";
import Settings from "../Settings/Settings";
import Admin from "../Admin/Admin";
import Header from "../Header/Header";

const UserProfile = () => {
    return (
        <div className="app-content">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/reg" element={<Regs/>}/>
                <Route path="/set" element={<Settings/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
            <Header></Header>
        </div>
    );
};

export default UserProfile;