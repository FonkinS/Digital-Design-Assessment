import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function InsertName() {
    return (
        <div className="Center">
            <div className="VerticalContainer">
                <div className="Heading"><b>Insert Your Name</b></div>
                <input type="text" className="TextInput"/>
            </div>
        </div>
    );
}

export default InsertName;
