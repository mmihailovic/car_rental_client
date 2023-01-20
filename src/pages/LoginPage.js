import React from 'react'
import { useState } from 'react';
import Header from '../components/Header';

const LoginPage = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    function handleUsername() {
        setUsername(document.getElementById("username").value);
    }
    function handlePassword() {
        setPassword(document.getElementById("password").value);
    }
    console.log(username);
    console.log(password);
  return (
    <div>
        <Header></Header>
        <p>Username</p> <input type="text" id="username" onChange={handleUsername}></input>
    <p>Password</p> <input type="password" id="password" onChange={handlePassword}></input>
    <button>Login</button>
    <button>Register as client</button>
    <button>Register as manager</button>
    </div>
  )
}

export default LoginPage