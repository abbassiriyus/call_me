import React, { useState } from "react";
import logo from "./img/Logo_color 1.png";
import "./style/Verefication.css";
import VerificationInput from "react-verification-input";
import axios from "axios";
import url from "./host";

const Verification = () => {
  const [password, setPassword] = useState("");

  const email2 = localStorage.getItem("email");
  function sendFanction() {
    if (password === localStorage.getItem("verefication")) {
      var formdata = new FormData();
      console.log(localStorage.getItem("userGet"));
      formdata.append("email", localStorage.getItem("email"));
      formdata.append("phone", localStorage.getItem("phone"));
      formdata.append("username", localStorage.getItem("username"));
      formdata.append("password", localStorage.getItem("password"));
      formdata.append("is_verified", true);
      axios.post(`${url}/auth/register/`, formdata).then((res) => {
        alert("Ваш код верен! Вы прошли регистрацию!");
        window.location = "/dashboard";
      });
    } else {
      alert("Не правильно попробуйте еще раз пожалуйста");
    }
  }
  return (
    <div>
      <div className="main2">
        <div className="main-center">
          <div className="mc-img">
            <img src={logo} alt="" />
            <h1>Верефикатция</h1>
          </div>
          <div className="ms-prosto">
            <span>{email2}</span>
          </div>
          <div className="ms-ver">
            <VerificationInput
              onChange={console.log}
              inputField={{
                onChange: (e) => {
                  setPassword(e.nativeEvent.target.value);
                },
              }}
            />
          </div>
          <div className="ms-btn">
            <button onClick={() => sendFanction()}>Подтвердить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
