import React, { Component } from 'react'
import './Burxon.css';
import logo from './img/Logo_color 1.png'
export default class burxon extends Component {
    render() {
        return (
            <div>
                <div className="avto">
                    <div className="avtodiv">
                        <div className="img1">
                            <img src={logo} alt="" />
                            <h1>Авторизация</h1>
                        </div>
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Пароль' />
                        <div className="but">
                            <button>Войти</button>
                            <div className="but2">
                                <p>Еще нет аккаунта?</p>
                                <span>Регистрация</span>
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
