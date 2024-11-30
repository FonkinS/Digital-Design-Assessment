import {React, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';

import Menu from './Menu.js'
import TextInput from './TextInput.js'
import Question from './Question.js'
import Lobby from './Lobby.js'


async function callServer(functionName, parameters) {
    let url = "/" + functionName + "?";
    for (const [key, value] of Object.entries(parameters)) {
        url += String(key) + "=" + String(value) + "&";
    }
    const response = await fetch(url);
    return response.text();
}

async function createGame(nav) {
    const output = await callServer("createGame", {name: Cookies.get("name")});
    if (output === "ERROR") {
        alert("ERROR!");
        nav("/");
    } else {
        Cookies.set("player_id", output.split(" ")[0]);
        Cookies.set("gameCode", output.split(" ")[1]);
        nav("/lobby");
    }
}

async function joinGame(nav) {
    const output = await callServer("joinGame", {name: Cookies.get("name"), code: Cookies.get("gameCode")});
    if (output == "ERROR") {
        alert("ERROR!");
        nav("/");
    } else {
        Cookies.set("player_id", output);
        nav("/lobby")
    }
}


function App() { 
    const nav = useNavigate();
    const gameCodeEntered = (code) => {
        Cookies.set("isAdmin", false);
        Cookies.set("gameCode", code);
        nav("/insert-name");
    };
    const nameEntered = (name) => {
        Cookies.set("name", name);
        if (Cookies.get("isAdmin") === "true") {
            createGame(nav);
        } else {
            joinGame(nav);
        }
    }
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/insert-name" element={<TextInput enterPressedHandler={nameEntered} type="Name"/>} />
            <Route path="/insert-code" element={<TextInput enterPressedHandler={gameCodeEntered} type="Game Code"/>} />
            <Route path="/lobby" element={<Lobby serverCallback={callServer}/>}/>
            <Route path="/question" element={<Question />} />
        </Routes>
    );
}

export default App;
