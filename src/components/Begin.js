import React from 'react'
import logo from './../images/logos/logoips_poli.webp';
import { Startbutton } from './Startbutton';

function Begin () {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Pagina para proyecto Frontend del Poli.
            </p>
            <Startbutton />
        </div>
        
    );
}

export default Begin;