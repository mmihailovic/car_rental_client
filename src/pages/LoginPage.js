import React from 'react'
import { useState } from 'react';
import Header from '../components/Header';

const LoginPage = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [token,setToken] = useState("");
    const[loggedIn,setLogedIn] = useState(false)
    function handleUsername() {
        setUsername(document.getElementById("username").value);
    }
    function handlePassword() {
        setPassword(document.getElementById("password").value);
    }

   function handleRegister() {
      var url = "http://localhost:8084/user-service/api/user/registerClient"
      var method = "POST"
      console.log("sss")
      fetch(url, {
          method: method,
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({"email":username, "password":password})
  
      })
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response))) 
    }

    function handleLogin() {
      var url = "http://localhost:8084/user-service/api/user/login"
      var method = "POST"
      console.log("sss")
      fetch(url, {
          method: method,
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({"email":username, "password":password})
  
      })
      .then(response => {
        console.log(response)
        if(response.ok)
        {
            response.json().then(res=>{
              localStorage.setItem('token', res.token)
              setToken(res.token)
              console.log(res)
                setLogedIn(true)
            })
        }
        else
        alert('Wrong credentials')
    })
    }
    console.log(username);
    console.log(password);
  return (
    <div>
        <Header></Header>
        <p>Username</p> <input type="text" id="username" onChange={handleUsername}></input>
    <p>Password</p> <input type="password" id="password" onChange={handlePassword}></input>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleRegister}>Register as client</button>
    <button>Register as manager</button>
    </div>
  )
}

export default LoginPage