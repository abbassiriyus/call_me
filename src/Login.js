import "./Burxon.css";
import logo from "./img/Logo_color 1.png";
import React, { useState } from "react";
import axios from "axios";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import Host from "./host";

function Login() {
  function reg() {
    window.location = "/signup";
  }
  function err() {
    var passitem = JSON.parse(localStorage.getItem("userGet")).password;
    console.log(passitem);
    if (passitem == document.querySelector(".pasvalue").value) {
      document.querySelector(".pasvalue").style = "border: 2px solid #939393";
    } else {
      document.querySelector(".pasvalue").style = "border: 2px solid red";
    }
    var emeilitem = JSON.parse(localStorage.getItem("userGet")).email;
    console.log(emeilitem);
    if (emeilitem == document.querySelector(".input1").value) {
      document.querySelector(".input1").style = "border: 2px solid #939393";
    } else {
      document.querySelector(".input1").style = "border: 2px solid red";
    }
  }
  function opeyes() {
    document.querySelector("#type-i2").style = "display: none";
    document.querySelector("#type-i").style = "display: flex";
    document.querySelector(".pasvalue").type = "text";
  }
  function cleyes() {
    document.querySelector("#type-i2").style = "display: flex";
    document.querySelector("#type-i").style = "display: none";
    document.querySelector(".pasvalue").type = "password";
  }
  function openey(){
    if((document.querySelector(".pasvalue").value).length  >0){
      document.querySelector("#type-i2").style = "display: flex";
    }else {
      document.querySelector("#type-i2").style = "display: none";
    }
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
      window.location = '/Dashboard';
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
          <form className="login-form" style={{position:'relative'}} onSubmit={handleSubmit}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input1"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="pasvalue"
              placeholder="Пароль"
              onKeyUp={openey}
            />
            <BsEye onClickCapture={cleyes} id="type-i" />
            <BsEyeSlash onClick={opeyes} id="type-i2"/>
            <div className="error_block">
              <p>Не правильно, попробуйте еще раз пожалуйста</p>
            </div>
            <div className="but">
              <button onClick={err}>Войти</button>
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
