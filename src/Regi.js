import React, { Component } from 'react'
import './Regi.css';
import logo from './img/Logo_color 1.png'
export default class Regi extends Component {
  render() {
    return (
      <div>
        <div className="avto">
          <div className="avtodiv">
            <div className="img1">
              <img src={logo} alt="" />
              <h1>Регистрация</h1>
            </div>
            <input className='input1' type="text" placeholder='Имя и фамилия' />
            <input type="text" placeholder='Контактный телефон' />
            <input type="text" placeholder='Название организации' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Пароль' />

            <div className="but">
                 <button>Войти</button>
                 <div className="but2">
                     <p>Еще нет аккаунта?</p>
                     <p>Регистрация</p>
                 </div>
             </div>
          </div>
         
        </div>
      </div>
    )
  }
}
