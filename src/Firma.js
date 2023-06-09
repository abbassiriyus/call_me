import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import React, { Component } from 'react'
import {CiCirclePlus} from 'react-icons/ci'
import './Zavanoknas.css'
import './Firma.css'
import firma from './img/Vector (10).png'
import {CiCircleAlert} from 'react-icons/ci'
export default class Firma extends Component {
zakroy1=()=>{
  document.querySelector(".firmabig").style="display:none"
}
  render() {
    return (
        <div className="firmabig">
          <Navbar className='navbarbig' expand="lg">
                    <Container fluid>
                      <Navbar.Brand href="#" className='navbar2'> 
                      <img src={firma} alt="" /> <h1>Фирма</h1>
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                        <Nav className='nav1'>
                          <input type="text" className='input' />
                          <div className="nav2">
                            <MdOutlineMailOutline className="nav2icon" />
                            <FaRegUserCircle className="nav2icon" />
                            <p>{JSON.parse(localStorage.getItem("getAdmin")).username}</p>
                            <RxExit className="nav2icon" />
                          </div>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
      <div className='klm1'>
        <div className="firmadiv">
        <div className="firma1">
            <h1>Компания</h1><button>+ТЕГ</button>
        </div>
        <div className="line"></div>
        <div className="firma2">
            <h1>Рабочий телефон</h1><button><CiCirclePlus/></button><div className="line1"></div><p>+7 999 888 77 66</p>
        </div>
        <div className="firma3">
            <h1>Рабочий E-mail</h1><button><CiCirclePlus/></button><div className="line1"></div><p>mymail@pochta.com</p>
        </div>
        <div className="firma4">
            <h1>Сайт</h1><button><CiCirclePlus/></button><div className="line1"></div><p>vk.com/id32450354</p>
        </div>
        <div className="line"></div>
        <div className="firma5">
            <h1>Соц сети</h1><button><CiCirclePlus/></button><div className="line1"></div><p>ООО АРТГЕНТ</p>
        </div>
        <div className="firma6">
            <h1>Ген Контакт</h1><button><CiCirclePlus/></button><div className="line1"></div><p>+7 999 888 77 66</p>
        </div>
        <div className="line"></div>
        <div className="firma7">
            <h1>Примечание</h1><button><CiCirclePlus/></button><div className="line2"></div><p>Тут может быть большой текст. Менеджеры могут писать сюда всю полезную и интересуную информацию о клиенте.</p>
        </div>
        <div className="firma_div">
        <button className='firma_butt1'>Редактировать</button><button onClick={()=>this.zakroy1()} className='firma_butt2'>Закрыть</button>
        </div>
        </div>
      </div>
        <div className="firmabottom">
        <CiCircleAlert className='icon'/><div className="bottom2">
            <p>Клиенты - редактирование\добавление. </p>
            <span>- Имя и фамилия - поле импут. При нажатии на +ТЕГ открываем список с тегами. Если нажать на иконку (+) то появляеться новое_поле_2 для дополнительных данных. Кнопка [Редактировать] как бы снимает замок с уже добавленых полей и можно добавлять новые. Историю клиента пока не трогаем, туда будет добавлятся вся информация по клиенту: Когда попал в базу, откуда пришел и так далее...</span>
        </div>
        </div>
      </div>

    )
  }
}
