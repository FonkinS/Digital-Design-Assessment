import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './style.css';
import Mascot from './Mascot.png';



function gotoQuestion(nav) {
    nav("/question");
}

async function getQuestion(serverCallback, setQuestion, nav) {
    let data = await serverCallback("getQuestion", {code: Cookies.get("gameCode")});
    if (data == "ERROR") {
        alert("ERROR when fetching question. Tell Aaron he's dumb");
    }
    data = data.split("|");
    Cookies.set("question", data[1]);
    Cookies.set("correctanswer", data[2]);
    Cookies.set("wronganswer1", data[3]);
    Cookies.set("wronganswer2", data[4]);
    Cookies.set("wronganswer3", data[5]);
    setQuestion(data[1]);
    let finaltime = Number(Number(data[6]).toPrecision(10));
    let currenttime = Number(Number(new Date().getTime() / 1000).toPrecision(10));
    console.log(currenttime, finaltime);
    setTimeout(() => gotoQuestion(nav), (finaltime-currenttime) * 1000);
}

function QuestionPreview({serverCallback}) {
    const nav = useNavigate();
    const [question, setQuestion] = useState("fetcching...");
    useEffect(() => {
        if (question == "fetcching...") getQuestion(serverCallback, setQuestion, nav);
    });
    //return <div>{question}</div>;
    return (<div>
        <div className="QuestionPreview">{question}</div>
        <img src={Mascot} className="Mascot"/>

    </div>);
}

export default QuestionPreview;
