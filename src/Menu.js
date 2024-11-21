import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Menu() {
    const nav = useNavigate();
    return <div className="Center">
        <div className="VerticalContainer">
            <button className="MenuItem" onClick={() => nav("/insert-code")}>Join Game</button>
            <button className="MenuItem" onClick={() => nav("/insert-name")}>Start Game</button>
        </div>
    </div>;
}

export default Menu;
