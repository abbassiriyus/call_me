import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Api.css'
import logo from './img/Logo_color 1.png'
import { FaRegUserCircle } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"
import { RxExit } from "react-icons/rx"
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Api() {
    return (
        <div className="big">
            <div className="navbar1">
                <div className="navbar11"><img src={logo} alt="" />
                    <h1>Панель <br /> управления</h1></div>
                    <div className="card-1">
            <img src={logo} alt="" className="logo" />
            <div className="desktop">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className='accordion'><img src={vector1} alt="" /><span>Рабочий стол</span> </Accordion.Header>
                  <Accordion.Body className='ac.body'>
                    <img src={tuning} alt="" /><span>Настройка</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className='accordion'><img src={vector2} alt="" /><span>Онлайн - запись</span></Accordion.Header>
                  <Accordion.Body className='ac.body'>
                    <img src={tuning} alt="" /><span>Настройка</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className='accordion'><img src={vector3} alt="" /><span>Клиенты</span></Accordion.Header>
                  <Accordion.Body className='ac.body'>
                    <img src={tuning} alt="" /><span>Настройка</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className='accordion'><img src={vector4} alt="" /><span>Отчеты</span></Accordion.Header>
                  <Accordion.Body className='ac.body'>
                    <img src={tuning} alt="" /><span>Настройка</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className='accordion'><img src={vector5} alt="" /><span>Обратный звонок</span></Accordion.Header>
                  <Accordion.Body className='ac.body'>
                    <img src={tuning} alt="" /><span>Настройка</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header className='accordion'><img src={vector6} alt="" /><span>Чат на сайт</span></Accordion.Header>
                  <Accordion.Body className='ac.body'>
                    <img src={tuning} alt="" /><span>Настройка</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header className='accordion'><img src={vector7} alt="" /><span>Тарифы</span></Accordion.Header>
                  <Accordion.Body className='ac.body'>
                    <img src={tuning} alt="" /><span>Настройка</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header className='accordion'><img src={vector8} alt="" /><span>Настройки</span></Accordion.Header>
                  <Accordion.Body className='ac.body'>
                    <img src={tuning} alt="" /><span>Настройка</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header className='accordion'><img src={vector9} alt="" /><span>Выход</span></Accordion.Header>
                  <Accordion.Body className='ac.body'>
                    <img src={tuning} alt="" /><span>Настройка</span>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
                </div>
                <div className="div">
                    <Navbar className='navbarbig' expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#" className='navbar2'> <FaRegUserCircle className="nav2icon" /> <h1>Профиль</h1></Navbar.Brand>
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
                </div>
            </div>
        // </div>
    );
}

