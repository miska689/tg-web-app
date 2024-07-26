import React, {useEffect, useState} from 'react';
import { FaHome } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import './Header.css'

const Header = () => {
    const [selected, setSelected] = useState("home");

    useEffect(() => {
        const tg = window.Telegram.WebApp
    }, [])

    useEffect(() => {

    }, []);

    const iconSize = 25;

    const selectItem = (item) => {
        return function () {
            setSelected(item);
        }
    }

    return (
        <div className="header-menu">
            <div className="bott-menu container">
                <hr className={"devider"}/>
                <div className="nav-menu">
                    <ul className="list-menu">
                        <li
                            className={"list-item " + (selected === "home" ? "active" : "")}
                            onClick={selectItem("home")}
                        >
                            <div className="icon-fill">
                                <FaHome className={"icon"} size={iconSize} />
                            </div>
                            <a href="#" className="link-item">Home</a>
                        </li>
                        <li
                            className={"list-item " + (selected === "regs" ? "active" : "")}
                            onClick={selectItem("regs")}
                        >
                            <div className="icon-fill">
                                <BiTask className="icon" size={iconSize} />
                            </div>
                            <a href="#" className="link-item">Regs</a>
                        </li>
                        <li
                            className={"list-item " + (selected === "set" ? "active" : "")}
                            onClick={selectItem("set")}
                        >
                            <div className="icon-fill">
                                <IoIosSettings className={"icon"} size={iconSize} />
                            </div>
                            <a href="#" className="link-item">Settings</a>
                        </li>
                        <li
                            className={"list-item " + (selected === "admin" ? "active" : "")}
                            onClick={selectItem("admin")}
                        >
                            <div className="icon-fill">
                                <RiAdminLine className="icon" size={iconSize} />
                            </div>
                            <a href="#" className="link-item">Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;