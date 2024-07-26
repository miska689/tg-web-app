import React, {useEffect} from 'react';
import Header from "./components/Header/Header";

const tg = window.Telegram.WebApp

const App = () => {
    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div>
            <div className="App">
                <div className="app-flex">
                    <div className="app-content">
                        {tg.themeParams}
                    </div>
                    <Header></Header>
                </div>
            </div>
        </div>
    );
};

export default App;