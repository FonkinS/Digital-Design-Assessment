import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './style.css';


function LobbyPlayer({name}) {
    return <div className="Player">{name}</div>;
}

function StartGameButton({serverCallback}) {
    const startGame = () => {
        serverCallback("startGame", {code: Cookies.get("gameCode")});
    }
    return <div className="StartGameButton" onClick={startGame}>Start Game</div>;
}


function RenderLobbyPlayers({players}) {
    let arr = [];
    for (let i = 0; i < players.length; i++) {
        arr.push(<LobbyPlayer name={players[i]} key={i}/>);
    }
    return arr;
}

async function getServerLobbyInfo(serverCallback, setPlayerData) {
    let data = await serverCallback("getLobby", {code: Cookies.get("gameCode")});
    data = data.split(" ");
    setPlayerData(data);
}

/*https://iq.js.org/questions/react/how-to-update-a-component-every-second*/
function Lobby({serverCallback}) {
    console.log("yo");
    //const [callBack, setCallback] = useState(() => getServerLobbyInfo());
    const [playerData, setPlayerData] = useState([]);
    useEffect(() => {
        const interval = setInterval(() => getServerLobbyInfo(serverCallback,setPlayerData), 1000);
        return () => clearInterval(interval);
      }, []);

    //console.log(callBack);
    //setInterval(() => getServerLobbyInfo(), 1000);
    return (<div>
        <div className="GameCode">Gamecode: {Cookies.get("gameCode")}</div>
        <div className="PlayersContainer">
            <RenderLobbyPlayers players={playerData}/>
        </div>
        {Cookies.get("isAdmin") === "true" ? <StartGameButton serverCallback={serverCallback}/> : ""}
    </div>);
}


export default Lobby;

