import React from 'react';
import { Link } from 'react-router-dom';
import './Bottonfocus.css';

function Bottonfocus ({ icon, text }) {
    return (
        <div>
            <button className="button-focus-container">
                <div className="buttonfocus-content">
                    <div className="icon-container">
                        <img src={icon} alt="Descripción" />
                    </div>
                    <div className="text-icon-container">
                        <p>{text}</p>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default Bottonfocus;

