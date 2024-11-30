import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './style.css';


function reset() {
    Cookies.set("name", "");
    Cookies.set("player_id", 0);
    Cookies.set("gameCode", 0);
    Cookies.set("isAdmin", true);
}

function Menu() {
    const nav = useNavigate();
    reset();
    return <div className="Center">
        <div className="VerticalContainer">
            <button className="MenuItem" onClick={() => nav("/insert-code")}>Join Game</button>
            <button className="MenuItem" onClick={() => nav("/insert-name")}>Create Game</button>
        </div>
    </div>;
}

export default Menu;
