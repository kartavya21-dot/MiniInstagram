import React, { useState } from "react";
import "./Auth.css";
import api from "../../services/api";
import { signup, login } from "../../services/authServices";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, toggleLogin] = useState(true);

  // console.log(localStorage.getItem('access'));
  
  const handleSignUp= async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await signup(userData);
      console.log(response);
      toggleLogin(!isLogin);
      // const tokenResponse = await handleLogin();
      // console.log(tokenResponse);

    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    try {
      const tokenResponse = await login(userData);
      console.log(tokenResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-page">
      {isLogin ? (
        <form>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            New User? <a onClick={() => toggleLogin(!isLogin)}>Register</a>
          </p>
          <button type="submit" onClick={(e) => handleLogin(e)}>
            Login
          </button>
        </form>
      ) : (
        <form>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            Already a User? <a onClick={() => toggleLogin(!isLogin)}>Login</a>
          </p>
          <button type="submit" onClick={(e) => handleSignUp(e)}>
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
};

export default Auth;
