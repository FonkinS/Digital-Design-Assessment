import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Menu from './Menu.js'
import InsertName from './InsertName.js'

function App() { 
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/insert-name" element={<InsertName />} />
        </Routes>
    );
}

export default App;
