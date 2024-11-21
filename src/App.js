import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';

import Menu from './Menu.js'
import TextInput from './TextInput.js'


async function callServer(functionName, parameters) {
    let url = "/" + functionName + "?";
    for (const [key, value] of Object.entries(parameters)) {
        url += String(key) + "=" + String(value) + "&";
    }
    console.log(url);
    const response = await fetch(url)
        .then((response) => {return response.text();});
    return response;
}

function startGame() {

}

function joinGame(name, gameCode) {
    console.log("hi");
    const output = callServer("joinGame", {thisname: name, code: gameCode});
    console.log(output);
}


function App() { 
    var gameCode;
    var name;
    var isAdmin = true;

    console.log("hui");

    const nav = useNavigate();

    const gameCodeEntered = (code) => {
        isAdmin = false;
        gameCode = code;
        nav("/insert-name");
    };
    const nameEntered = (n) => {
        name = n;
        console.log("hi");
        joinGame(name, gameCode);
    }
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/insert-name" element={<TextInput enterPressedHandler={nameEntered} type="Name"/>} />
            <Route path="/insert-code" element={<TextInput enterPressedHandler={gameCodeEntered} type="Game Code"/>} />
        </Routes>
    );
}

export default App;
