import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './Page/Dashboard';
import LoginForm from './Page/Dashboard/login';

function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm />}>
          </Route>
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
