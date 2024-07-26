import React, {useEffect} from 'react';
import Header from "./components/Header/Header";

const tg = window.Telegram.WebApp

tg.themeParams.bg_color = "#000"
tg.themeParams.secondary_bg_color = "#000"
tg.themeParams.headerColor = "#000"

const App = () => {
    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div>
            <div className="App">
                <div className="app-flex">
                    <div className="app-content">
                        <h1 style={"color: var(--tg-theme-secondary-bg-color);"}>Lol</h1>
                    </div>
                    <Header></Header>
                </div>
            </div>
        </div>
    );
};

export default App;