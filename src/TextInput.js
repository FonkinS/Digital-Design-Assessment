import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function TextInput({enterPressedHandler, type}) {
    /*https://stackoverflow.com/questions/27827234/how-to-handle-the-onkeypress-event-in-reactjs*/
    const eventHandler = (event) => {
        event.target.value = event.target.value.replace(" ", "").replace("'", "").replace("\"", "");
        event.target.value = event.target.value.substring(0,10)
        if (event.key === "Enter") {
            if (event.target.value == "") {
                event.target.value = "Anonymous";
            }
            const value = event.target.value;
            event.target.value = "";
            enterPressedHandler(value);
        };
    }
    return (
        <div className="Center">
            <div className="VerticalContainer">
                <div className="Heading"><b>Insert {type}</b></div>
                <input type="text" className="TextInput" onKeyPress={eventHandler}/>
            </div>
        </div>
    );
}

export default TextInput;
