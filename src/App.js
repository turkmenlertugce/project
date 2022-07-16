import React, { Component, useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './components/Register';
import Forgot from './components/Forgot';
import { PleaseVerifyEmailPage } from './components/PleaseVerifyEmailPage';
import axios from 'axios';
import ResetPassword from './components/ResetPassword';
import AccountActivation from './components/AccountActivation';

const App = () => {
  
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    try {
      setUser(JSON.parse(localStorage.getItem("user")));
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  }, []);

  
  return (
    <BrowserRouter>
      <div className="App">
       <Nav user={user} setUser={setUser}/>
       <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element = {<Home user={user} setUser={setUser}/>} />
            <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
            <Route path="/please-verify" element = {<PleaseVerifyEmailPage/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
            <Route path="/reset-password" element={<ResetPassword/>} />
            <Route path="/account-activation" element={<AccountActivation/>} />
          </Routes>
        </div>
       </div>
      </div>
    </BrowserRouter>
  )
}

export default App