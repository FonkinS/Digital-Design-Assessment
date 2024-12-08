import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './style.css';

function Answer({text, answerSelectHandler, id}) {
    return (<div className={"Answer AnswerCol" + String(id)} onClick={() => answerSelectHandler(id)}>{text}</div>);
}

async function NextQuestion(nav, serverCallback, timer) {
    let data = await serverCallback("questionSelected", {code: Cookies.get("player_id"), score: Cookies.get("score")});
    clearTimeout(timer);
    nav("/question-finish");
}

function Question({serverCallback}) {
    const nav = useNavigate();
    let answers = [Cookies.get("correctanswer"), Cookies.get("wronganswer1"), Cookies.get("wronganswer2"), Cookies.get("wronganswer3")];
    answers.sort(() => Math.random()-0.5);
    let timer;

    const answerSelectHandler = (answerId) => {
        if (answers[answerId] === Cookies.get("correctanswer")) {
            Cookies.set("score", parseInt(Cookies.get("score"))+10)
        }
        NextQuestion(nav, serverCallback, timer);
    };


    useEffect(() => {
        timer = setTimeout(() => NextQuestion(nav, serverCallback, timer), 10000);
    });

    

    return (<div>
        <div className="QuestionPreview">{Cookies.get("question")}</div>
        <div className="AnswerContainer">
            <Answer text={answers[0]} id={0} answerSelectHandler={answerSelectHandler}/>
            <Answer text={answers[1]} id={1} answerSelectHandler={answerSelectHandler}/>
            <Answer text={answers[2]} id={2} answerSelectHandler={answerSelectHandler}/>
            <Answer text={answers[3]} id={3} answerSelectHandler={answerSelectHandler}/>
        </div>
        <div className="score">{Cookies.get("score")}</div>
    </div>);
}


export default Question;
