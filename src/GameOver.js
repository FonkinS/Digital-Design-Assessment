import {React, useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';

async function getPodiumData(serverCallback, setPodiumData) {
    let data = await serverCallback("getPodium", {code: Cookies.get("gameCode")});
    console.log(data);
    setPodiumData(data.split(" "));
}

function numToPlace(num) {
    if (num % 10 == 1) return String(num) + "st";
    if (num % 10 == 2) return String(num) + "nd";
    return String(num) + "rd";
}


function PodiumRow({id, name, score}) {
    return (<tr>
        <th className="PodiumCell">{numToPlace(id)}</th>
        <th className="PodiumCell">{name}</th>
        <th className="PodiumCell">{score} points!</th>
        </tr>);
}

function Podium({serverCallback}) {
    const [podiumData, setPodiumData] = useState([]);
    useEffect(() => {
        getPodiumData(serverCallback, setPodiumData);
    }, []);
    let arr = [];
    for (let i = 0; i < podiumData.length; i+=2) {
        arr.push(<PodiumRow key={i} id={i / 2+1} name={podiumData[i+1]} score={podiumData[i]}/>)
    }
    return <table className="PodiumTable"><tbody>{arr}</tbody></table>;
}

function GameOver({serverCallback}) {
    const nav = useNavigate();
    return (<div>
        <Podium serverCallback={serverCallback}/>
        <div className="StartGameButton" onClick={() => nav("/")}>Back To Main Menu</div>
    </div>);
}

export default GameOver;
