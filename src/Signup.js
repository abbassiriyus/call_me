// import React, { Component } from 'react'
// import './Regi.css';
// import logo from './img/Logo_color 1.png'
// export default class Regi extends Component {
//   render() {
//     return (
//       <div>
//         <div className="avto">
//           <div className="avtodiv">
//             <div className="img1">
//               <img src={logo} alt="" />
//               <h1>Регистрация</h1>
//             </div>
//             <input className='input1' type="text" placeholder='Имя и фамилия' />
//             <input id='avto-inp' type="text" placeholder='Имя и фамилия' />
//             <input type="text" placeholder='Контактный телефон' />
//             <input type="text" placeholder='Название организации' />
//             <input type="text" placeholder='Email' />
//             <input type="text" placeholder='Пароль' />

//             <div className="but">
//                  <button>Войти</button>
//                  <div className="but2">
//                      <p>Еще нет аккаунта?</p>
//                      <p>Регистрация</p>
//                  </div>
//              </div>
//           </div>

//         </div>
//       </div>
//     )
//   }
// }

import React, { useState } from "react";
import axios from "axios";
import "./Regi.css";
import Host from "./host";
import logo from "./img/Logo_color 1.png";

function Signup() {
  function sign() {
    window.location = "/";
  }
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [verify_code, setVerify_code] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://calltocall.onrender.com/auth/register/`,
        {
          username,
          email,
          password,
          phone,
          verify_code,
        }
      );
        const nameCompany = document.querySelector("#nameCompany").value
      console.log(response.data.verify_code, "zbek");
      localStorage.setItem("verefication", response.data.verify_code);
      localStorage.setItem("email", email);
      localStorage.setItem("nameCompany", nameCompany);
      localStorage.setItem("username", username);
      localStorage.setItem("phone", phone);
      localStorage.setItem("password", password);
      console.log("SignUp successful:", response.data);
      window.location = "/verefication";
      // Дополнительная обработка после успешной регистрации
    } catch (error) {
      console.error("Error signing up:", error.response.data);
      alert("Проверьте данные и попробуйте еще раз");
      // Обработка ошибки регистрации
    }
  };

  return (
    <div>
      <div className="avto">
        <div className="avtodiv">
          <div className="img1">
            <img src={logo} alt="" />
            <h1>Регистрация</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="input1"
              type="text"
              placeholder="Имя и фамилия"
            />
            <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Контактный телефон"/>
            <input id="nameCompany" type="text" placeholder="Название организации" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Пароль"
            />

            <div className="but">
              <button>Регистрация</button>
              <div className="but2">
                <p style={{ marginTop: "-10px" }}>Есть аккаунт?</p>
                <p
                  style={{ cursor: "pointer", marginTop: "15px" }}
                  onClick={sign}
                >
                  Вход
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
