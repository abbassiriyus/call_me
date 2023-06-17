import React, { useState } from 'react';
import logo from "./img/Logo_color 1.png";
import './style/Verefication.css'
import VerificationInput from "react-verification-input";

const Verification = () => {
    return (
        <div>
          <div className="main">
            <div className="main-center">
                <div className="mc-img">
                    <img src={logo} alt="" />
                    <h1>Верефикатция</h1>
                </div>
                <div className="ms-prosto">
                    <span>example@gmail.com</span>
                </div>
                <div className="ms-ver">
                    <VerificationInput />
                </div>
                <div className="ms-btn">
                    <button>Проверить</button>
                </div>
            </div>
          </div>
        </div>
      );
  };

  export default Verification;