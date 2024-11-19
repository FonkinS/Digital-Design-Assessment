import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Menu() {
    const nav = useNavigate();
    function handleClick() {
        nav("/insert-name");
    }
    return <div className="Center">
        <div className="VerticalContainer">
            <button className="MenuItem" onClick={handleClick}>Join Game</button>
            <button className="MenuItem">Start Game</button>
        </div>
    </div>;
}

export default Menu;
