import React from 'react';
import { Link } from 'react-router-dom';
import './BottonfocusQuestion.css';
import { ReactComponent as IconSVG } from './../../images/icons/question2.svg';

function BottonfocusQuestion ({ text }) {
    return (
        <div>
            <button className="button-focus-container">
                <div className="buttonfocus-content">
                    <div className="icon-container">
                        <IconSVG fill="yellow" />  {/* Aplica el fill directamente aquí */}
                    </div>
                    <div className="buttonfocus-text-container">
                        <p>{text}</p>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default BottonfocusQuestion;