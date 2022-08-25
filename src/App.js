import React, { useState } from "react";
import Login from "./components/Login";
import './components/form.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  const userInfo = {
    email: "User1@gmail.com",
    password: "User1"
  }

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const DoLogin = details => {
    if (details.email === userInfo.email && details.password == userInfo.password) {
      setUser({ email: details.email, password: details.password })
    } else {
      setError("Wrong email or password");
    }
  }

  const DoLogOut = () => {
    console.log("I am log out");
  }
  return (
    <div className="App">
      
        {(user.email != "") ?
        <>
        <h1>Home page</h1>
        </>
           :
          <Login Login={DoLogin} error={error} />

        }
      
    </div>
  );
}

export default App;
