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
                <Header></Header>
            </div>
        </div>
    );
};

export default App;