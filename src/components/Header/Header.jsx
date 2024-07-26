import React, {useEffect} from 'react';
import Button from "../Button/Button";
import { FaHome } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import './Header.css'

const Header = () => {
    const tg = window.Telegram.WebApp

    const onClose = () => {
        tg.close()
    }

    return (
        <div className="header-menu">
            <div className="bott-menu container">
                <div className="nav-menu">
                    <ul className="list-menu">
                        <li className="list-item">
                            <div className="icon">
                                <FaHome className={"icon"} size={30} />
                            </div>
                            <a href="" className="link-item">Home</a>
                        </li>
                        <li className="list-item">
                            <div className="icon">
                                <BiTask className="icon" size={30} />
                            </div>
                            <a href="" className="link-item">Regs</a>
                        </li>
                        <li className="list-item">
                            <div className="icon">
                                <FaHome className={"icon"} size={30} />
                            </div>
                            <a href="" className="link-item">Home</a>
                        </li>
                        <li className="list-item">
                            <div className="icon">
                                <RiAdminLine className="icon" size={30} />
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