import React from 'react';
import Routes from './routes';
import Header from './components/Header/FrmHeader';
import './App.css';

import { UserProvider } from './components/Context/UserContext';

function App() {
    return (                
        <div>                                    
            <UserProvider>
            <Header />
            <Routes />
            </UserProvider>
        </div>        
    );
}

export default App;