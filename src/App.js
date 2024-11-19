import React from 'react';
import './App.css';
import Menu from './Menu.js'

function App() {
    /*const [data, setData] = React.useState("Not Fetched");
    const [value, setValue] = React.useState("null")

    React.useEffect(() => {
        fetch("hello?key="+value, {method:"get"})
            .then((response) => response.text())
            .then((text) => {
                setData(text);
            });
    });*/

    /*React.useEffect(() => {
        fetch("/hello")
            .then((res) => res.json())
            .then((data) => {
                setData(data.thing); 
                console.log(data.thing)
            });
    }, []);*/

    return <Menu />;
}

export default App;
