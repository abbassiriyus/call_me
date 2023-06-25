import React, { useState } from "react";
import logo from "./img/Logo_color 1.png";
import "./style/Verefication.css";
import VerificationInput from "react-verification-input";
import axios from "axios";
import url from "./host";

const Verification = () => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    console.log(value);
    axios
    .post(
      `${url}/auth/register/?verify_code=${value}&email=${email2}`
    )
    .then((res) => {
      alert("Ваш код верен! Вы прошли регистрацию!");
      window.location = "/";
    })
    .catch((err) => {
      alert("Не правильно попробуйте еще раз пожалуйста");
    });
  }
  const email2 = localStorage.getItem("email");

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
            <VerificationInput value={value} onChange={setValue} />
          </div>

          <div className="ms-btn">
            <button onClick={() => handleClick()}>Подтвердить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
