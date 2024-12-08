import {React, useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';


async function getEveryoneFinished(serverCallback, nav) {
    let data = await serverCallback("checkEveryoneFinished", {code: Cookies.get("gameCode")});
    if (data == "True") {
        nav("/question-preview")
    }
}


function QuestionFinish({serverCallback}) {
    const nav = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => getEveryoneFinished(serverCallback,nav), 1000);
        return () => clearInterval(interval);
      }, []);

    return (<div className="Center QuestionFinish">
        <div>Waiting for everyone to finish...</div>
    </div>);
} 

export default QuestionFinish;
