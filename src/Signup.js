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
            <input id='avto-inp' type="text" placeholder='Имя и фамилия' />
            <input type="text" placeholder='Контактный телефон' />
            <input type="text" placeholder='Название организации' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Пароль' />

            <div className="but">
              <button>Войти</button>
              <div className="but2">
                <a href=""><p>Еще нет аккаунта?</p></a>
                <a href=""><span>Регистрация</span></a>
              </div>

            </div>
          </div>
          <div className="div_bottom">
          <p>©2023 CallToCall.ru</p>
          <span>Техподдержка</span>
          </div>
        </div>
      </div>
    )
  }
}
