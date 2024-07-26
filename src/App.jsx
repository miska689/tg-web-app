import React, {useEffect} from 'react';
import Header from "./components/Header/Header";

const App = () => {
    useEffect(() => {
        const telegram = window.Telegram.WebApp;
        const themeParams = telegram.themeParams;

        themeParams.bg_color = "black";

        document.body.style.backgroundColor = themeParams.bg_color || 'black';
        document.body.style.color = themeParams.text_color || 'white';

        const secondaryBackground = document.querySelector('.secondary-background');
        if (secondaryBackground) {
            secondaryBackground.style.backgroundColor = themeParams.secondary_bg_color || 'black';
        }
        telegram.ready()
    }, []);

    return (
        <div>
            <div className="App">
                <div className="app-flex">
                    <div className="app-content">
                        <h1></h1>
                    </div>
                    <Header></Header>
                </div>
            </div>
        </div>
    );
};

export default App;