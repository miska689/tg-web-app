import React, {useEffect} from 'react';
import Button from "../Button/Button";
import { FaHome } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import './Header.css'

const Header = () => {
    const tg = window.Telegram.WebApp

    const iconSize = 25;

    const onClose = () => {
        tg.close()
    }

    return (
        <div className="header-menu">
            <div className="bott-menu container">
                <hr className={"devider"}/>
                <div className="nav-menu">
                    <ul className="list-menu">
                        <li className="list-item">
                            <div className="icon">
                                <FaHome className={"icon"} size={iconSize} />
                            </div>
                            <a href="" className="link-item">Home</a>
                        </li>
                        <li className="list-item">
                            <div className="icon">
                                <BiTask className="icon" size={iconSize} />
                            </div>
                            <a href="" className="link-item">Regs</a>
                        </li>
                        <li className="list-item">
                            <div className="icon">
                                <IoIosSettings className={"icon"} size={iconSize} />
                            </div>
                            <a href="" className="link-item">Settings</a>
                        </li>
                        <li className="list-item">
                            <div className="icon">
                                <RiAdminLine className="icon" size={iconSize} />
                            </div>
                            <a href="" className="link-item">Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;