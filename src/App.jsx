import React, {useEffect} from 'react';
import Header from "./components/Header/Header";

const tg = window.Telegram.WebApp

tg.ThemeParams.bg_color = "#000"
tg.ThemeParams.secondary_bg_color = "#000"

const App = () => {
    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div>
            <div className="App">
                <div className="app-flex">
                    <div className="app-content">
                        <h1>Lol</h1>
                    </div>
                    <Header></Header>
                </div>
            </div>
        </div>
    );
};

export default App;