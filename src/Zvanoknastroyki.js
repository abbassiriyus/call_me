import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import React from 'react'
import './klient.css'
import { CiCirclePlus } from 'react-icons/ci'
export default function Zvanoknastroyki() {
    function zakroy(){
        document.querySelector(".zvanokn").style="display:none"
      }
  return (
    <div className="zvanokn">
        <Navbar className='navbarbig' expand="lg">
                    <Container fluid>
                      <Navbar.Brand href="#" className='navbar2'> 
                      <img src="" alt="" /> <h1>Настройка</h1>
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                        <Nav className='nav1'>
                          <input type="text" className='input' />
                          <div className="nav2">
                            <MdOutlineMailOutline className="nav2icon" />
                            <FaRegUserCircle className="nav2icon" />
                            <p>imya-kliyenta</p>
                            <RxExit className="nav2icon" />
                          </div>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
         <div className='klm2'>
        <div className="firmadiv1">
        <div className="firma1">
            <h1>Название_оганизации</h1><button className='firma1but'>ID: 97866000</button>
        </div>
        <div className="line"></div>
        <div className="firma2">
            <h1>Логин</h1><button></button><div className="line1a"></div><p>mymail</p>
        </div>
        <div className="firma3">
            <h1>E-mail</h1><button><CiCirclePlus/></button><div className="line1"></div><p>mymail@pochta.com</p>
        </div>
        <div className="firma4">
            <h1>Соц сеть</h1><button><CiCirclePlus/></button><div className="line1"></div><p>vk.com/id32450354</p>
        </div>
        <div className="firma5">
            <h1>Пароль</h1><button><CiCirclePlus/></button><div className="line1"></div><p>1211312</p>
        </div>
        <div className="line"></div>
        <div className="firma6">
            <h1>Раб телефон:</h1><button><CiCirclePlus/></button><div className="line1"></div><p>+7 999 888 77 66</p>
        </div>
        <div className="firma7">
            <h1>Компания</h1><button className='firma7b'><CiCirclePlus/></button><div className="line1"></div><p>ООО АРТГЕНТ</p>
        </div>
        <div className="line"></div>
        <div className="firma7">
            <h1>Реквизиты:</h1><button className='firma8b'><CiCirclePlus/></button><div className="line2"></div><p>Общество с ограниченной ответственностью АРТГЕНТ</p>
        </div>
        <div className="firma7">
            <h1>ИНН</h1><button className='firma9b'><CiCirclePlus/></button><div className="line2"></div><p>2466290512</p>
        </div>
        <div className="firma7">
            <h1>КПП</h1><button className='firma10b'><CiCirclePlus/></button><div className="line2"></div><p>2466290512</p>
        </div>
        <div className="firma7">
            <h1>ОГРН</h1><button className='firma11b'><CiCirclePlus/></button><div className="line2"></div><p>1222400003759</p>
        </div>
        <div className="firma7">
            <h1>Юридический адрес</h1><button className='firma12b'><CiCirclePlus/></button><div className="line2"></div><p>660049, Красноярский край, г.о. Город Красноярск, ул Ленина, д. 52</p>
        </div>
        <div className="firma7">
            <h1>Руководители</h1><button className='firma13b'><CiCirclePlus/></button><div className="line2"></div><p>660049, Красноярский край, г.о. Город Красноярск, ул Ленина, д. 52</p>
        </div>
        <div className="line"></div>
        <div className="firma7">
            <h1>Сотрудники</h1><button className='firma14b'><CiCirclePlus/></button><div className="line2"></div><p>Смирнов Игорь Борисович</p>
        </div>
        <div className="firma_div2">
        <button onClick={zakroy} className='firma_butt2'>Закрыть</button>
        </div>
        </div>
      </div>
    </div>
  )
}
