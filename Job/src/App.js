// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import JobEntry from './JobEntry';
import JobList from './JobList'; // Ensure this matches the file name exactly

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<JobEntry />} />
                <Route path="/jobs" element={<JobList />} />
            </Routes>
        </Router>
    );
}

export default App;
