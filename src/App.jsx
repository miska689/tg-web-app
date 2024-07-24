import React, {useEffect} from 'react';

const tg = window.Telegram.WebApp

const App = () => {
    useEffect(() => {
        tg.ready()
    }, []);

    const onClose = () => {
        tg.close()
    }

    return (
        <div>
            <div className="App">
                <h1>Aplicatia Mea!</h1>
                <button onClick={onClose}>Inchide</button>
            </div>
        </div>
    );
};

export default App;