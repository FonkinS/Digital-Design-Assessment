import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function TextInput({enterPressedHandler, type}) {
    /*https://stackoverflow.com/questions/27827234/how-to-handle-the-onkeypress-event-in-reactjs*/
    const eventHandler = (event) => {
        if (event.key === "Enter") {
            enterPressedHandler(event.target.value);
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
