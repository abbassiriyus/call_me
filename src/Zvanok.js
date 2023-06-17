import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import Table from 'react-bootstrap/Table';
import vector from './img/Vector (2).png' 
import './klient.css'
function BasicExample() {
  return (
    <div>
      <Navbar className='navbarbig' expand="lg">
                    <Container fluid>
                      <Navbar.Brand href="#" className='navbar2'> 
                      <img src={vector} alt="" /> <h1>Обратный звонок</h1>
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
    <div className="klm1">
      <Table bordered hover>
        <thead>
          <tr className='tr'>
            <th>#</th>
            <th>Телефон</th>
            <th>Дата заявки</th>
            <th>Дата заявки</th>
            <th>Страница заявки</th>
            <th>Примечание</th>
            <th>ТЕГ</th>
            <td>:</td>
          </tr>
        </thead>
        <tbody>
          <tr className='tr'>
            <td>001</td>
            <td>+7 999 888 77 66</td>
            <td>21/02/2005  14:52</td>
            <td>192.168.12.2</td>
            <td>www.mysait.ru</td>
            <td>Пришел от Лены</td>
            <td>КЛИЕНТ</td>
            <td>:</td>
          </tr>
          <tr className='tr'>
            <td>002</td>
            <td>+7 999 888 77 66</td>
            <td>21/02/2005  14:52</td>
            <td>192.168.12.2</td>
            <td>www.mysait.ru</td>
            <td>Пришел от Лены</td>
            <td>-ЛИД</td>
            <td>:</td>
          </tr>
          <tr className='tr'>
            <td>003</td>
            <td>+7 999 888 77 66</td>
            <td>21/02/2005  14:52</td>
            <td>192.168.12.2</td>
            <td>www.mysait.ru</td>
            <td>Пришел от Лены</td>
            <td>-ЛИД</td>
            <td>:</td>
          </tr>
          <tr className='tr'>
            <td>004</td>
            <td>+7 999 888 77 66</td>
            <td>21/02/2005  14:52</td>
            <td>192.168.12.2</td>
            <td>www.mysait.ru</td>
            <td>Пришел от Лены</td>
            <td>-ЛИД</td>
            <td>:</td>
          </tr>





        </tbody>
      </Table>
    </div>
    </div>
  );
}

export default BasicExample;