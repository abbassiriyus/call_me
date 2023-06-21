import "./Burxon.css";
import logo from "./img/Logo_color 1.png";
import React, { useState } from "react";
import axios from "axios";
import Host from "./host";

function Login() {
  function reg() {
    window.location = "/signup";
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tokens, setTokens] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://calltocall.onrender.com/auth/login/`,
        {
          email,
          password,
        }
      );
      const userData = response.data;
      localStorage.setItem("token", userData.access);
      localStorage.setItem(
        "userGet",
        JSON.stringify({
          email,
          password,
        })
      );
      console.log(userData);
      window.location = "/dashboard";
      console.log("SignIn successful:", response.data);
      // Дополнительная обработка после успешного входа
    } catch (error) {
      console.error("Error signing in:", error.response.data);
      alert("Ошибка при входе");
      // Обработка ошибки входа
    }
  };

  return (
    <div>
      <div className="avto">
        <div className="avtodiv">
          <div className="img1">
            <img src={logo} alt="" />
            <h1>Авторизация</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input1"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Пароль"
            />
            <div className="but">
              <button>Войти</button>
              <div className="but2">
                <p style={{ marginTop: "-10px" }}>Еще нет аккаунта?</p>
                <p
                  style={{ cursor: "pointer", marginTop: "15px" }}
                  onClick={reg}
                >
                  Регистрация
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
