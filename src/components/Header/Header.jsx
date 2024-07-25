import React, {useEffect} from 'react';
import Button from "../Button/Button";


const Header = () => {
    const tg = window.Telegram.WebApp

    const onClose = () => {
        tg.close()
    }

    return (
        <div>
            <Button onClick={onClose}>Close</Button>
            <h1 className={'username'}>{ JSON.stringify(tg.initDataUnsafe) }</h1>
        </div>
    );
};

export default Header;