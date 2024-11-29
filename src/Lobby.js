import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './style.css';

function Lobby() {

    return (<div className="Center">
        <div className="GameCode">{Cookies.get("gameCode")}</div>
    </div>);
}


export default Lobby;

