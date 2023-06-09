import Accordion from "react-bootstrap/Accordion";
// import Form from 'react-bootstrap/Form';
import Regi from "./Signup";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Zvanok from "./Zvanok"
import Firma from "./Firma"
import "./Api.css";
import logo from "./img/Logo_color 1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import vector1 from "./img/Vector.png";
import vector2 from "./img/Vector (1).png";
import vector3 from "./img/Vector (2).png";
import tuning from "./img/Vector (3).png";
import vector4 from "./img/Vector (4).png";
import vector5 from "./img/Vector (5).png";
import vector6 from "./img/Vector (6).png";
import vector7 from "./img/Vector (7).png";
import vector8 from "./img/Vector (8).png";
import vector9 from "./img/Vector (9).png";
import firma from './img/Vector (10).png'
import vector13 from './img/Vector (13).png';
import Burxon from "./Login.js";
import { useState } from "react";
import Klient from "./Klient.js";
import Zavnoknastroyki from './Zvanoknastroyki.js';

export default function Api() {
  function navbar(){
    document.querySelector(".navbarbig").style="display:none"
  }
  const [page, setPage] = useState(0);

  return (
    <div className="big">
      <div className="navbar1">
        <div className="navbar11">
          <img src={logo} alt="" />
          <h1>
            Панель <br /> управления
          </h1>
        </div>
        <div  className="card-1">
          <div onClick={navbar} className="desktop">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header
                  onClick={() => {
                    setPage(1);
                  }}
                  className="accordion"
                >
                  <img src={vector1} alt="" />
                  <span>Рабочий стол</span>{" "}
                </Accordion.Header>
                <Accordion.Body className="ac.body">
                  <img src={tuning} alt="" />
                  <span>Настройка</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header
                  onClick={() => {
                    setPage(2);
                  }}
                  className="accordion"
                >
                  <img src={vector2} alt="" />
                  <span>Онлайн - запись</span>
                </Accordion.Header>
                <Accordion.Body className="ac.body">
                  <img src={tuning} alt="" />
                  <span>Настройка</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header
                  onClick={() => {
                    setPage(3);
                  }}
                  className="accordion"
                >
                  <img src={vector3} alt="" />
                  <span>Клиенты</span>
                </Accordion.Header>
                <Accordion.Body onClick={() => {setPage(4)}} className="ac.body">
                <img src={firma} alt="" />
                  <span>Фирма</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header  className="accordion">
                  <img src={vector4} alt="" />
                  <span>Отчеты</span>
                </Accordion.Header>
                <Accordion.Body className="ac.body">
                  <img src={tuning} alt="" />
                  <span>Настройка</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header
                onClick={() => {setPage(5)}}
                 className="accordion">
                  <img src={vector5} alt="" />
                  <span>Обратный звонок</span>
                </Accordion.Header>
                <Accordion.Body onClick={()=>{setPage(6)}} className="ac.body">
                  <img src={vector13} alt="" />
                  <span>Настройка</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header className="accordion">
                  <img src={vector6} alt="" />
                  <span>Чат на сайт</span>
                </Accordion.Header>
                <Accordion.Body className="ac.body">
                  <img src={tuning} alt="" />
                  <span>Настройка</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header className="accordion">
                  <img src={vector7} alt="" />
                  <span>Тарифы</span>
                </Accordion.Header>
                <Accordion.Body className="ac.body">
                  <img src={tuning} alt="" />
                  <span>Настройка</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header className="accordion">
                  <img src={vector8} alt="" />
                  <span>Настройки</span>
                </Accordion.Header>
                <Accordion.Body className="ac.body">
                  <img src={tuning} alt="" />
                  <span>Настройка</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header className="accordion">
                  <img src={vector9} alt="" />
                  <span>Выход</span>
                </Accordion.Header>
                <Accordion.Body className="ac.body">
                  <img src={tuning} alt="" />
                  <span>Настройка</span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="div">
                <div className="div">
                 
                  <div className="klm">
                  <Navbar className='navbarbig' expand="lg">
                    <Container fluid>
                      <Navbar.Brand href="#" className='navbar2'> 
                      <FaRegUserCircle className="nav2icon" /> <h1></h1>
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
                    {page === 1 ? (<Burxon />) : (page === 2 ? <Regi /> : (page === 3 ? <Klient /> : (page === 5 ? <Zvanok /> : (page === 4 ? <Firma /> :(page===6? <Zavnoknastroyki/>:(<div></div>))))))}
                  </div>
                </div>
                <div className="div_bottom">
                  <p>©2023 CallToCall.ru</p>
                  <span>Техподдержка</span>
                </div>

   
      </div>
    </div >
    // </div>
  );

}
