import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import './klient.css'
import Table from 'react-bootstrap/Table';
import {CiCircleAlert} from 'react-icons/ci'
function BasicExample() { 
  return (
    <div>
       <Navbar className='navbarbig' expand="lg">
                    <Container fluid>
                      <Navbar.Brand href="#" className='navbar2'> <FaRegUserCircle className="nav2icon" /> <h1>Клиенты</h1></Navbar.Brand>
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
   <div className="jkl">
      <div className="m">
      <h1>5 контактов</h1> <button  >+ Новый клиент</button>
      </div>
     <Table bordered hover>
      <thead>
        <tr className='tr'>
          <th>#</th>
          <th>Имя и Фамилия</th>
          <th>Телефон</th>
          <th>Соц сеть</th>
          <th>Е-маил</th>
          <th>Примечание</th>
          <th>ТЕГ</th>
          <td>:</td>
        </tr>
      </thead>
      <tbody>
        <tr className='tr'>
          <td>001</td>
          <td>Максим Галкиин</td>
          <td>+7 999 888 77 66</td>
          <td>vk.com/id422424</td>
          <td>mymail@pochta.ru</td>
          <td>Пришел от Лены</td>
          <td>КЛИЕНТ</td>
          <td>:</td>

        </tr>
        <tr className='tr'>
          <td>002</td>
          <td>Алла Пугачева</td>
          <td>+7 999 888 77 66</td>
          <td>vk.com/id422424</td>
          <td>mymail@pochta.ru</td>
          <td>Пришел от Лены</td>
          <td>-ЛИД</td>
          <td>:</td>

        </tr>
        <tr className='tr'>
          <td>003</td>
          <td>Алла Пугачева</td>
          <td>+7 999 888 77 66</td>
          <td>vk.com/id422424</td>
          <td>mymail@pochta.ru</td>
          <td>Пришел от Лены</td>
          <td>-ЛИД</td>
          <td>:</td>

        </tr>
        <tr className='tr'>
            <td>004</td>
            <td>Хабиб</td>
            <td>+7 999 888 77 66</td>
            <td>vk.com/id422424</td>
            <td>mymail@pochta.ru</td>
            <td>Пришел от Лены</td>
            <td>-ЛИД</td>
            <td>:</td>

        </tr>
      </tbody>
      
    </Table>
     <div className="klientdiv">
      <CiCircleAlert className="ci"/><div className="klientdiv1">
        <span>Обратный звонок.</span><p>Клиенты. Раздел, где можно вручную добавить клиента.  Куда так же клиенты будут попадать автоматически из разных источников.При нажатии на кнопку [+Новый клиент] открывается окно, где вручную добавляем клиента Все данные беруться из БД и туда заносятьсяВ таблице должна быть фильтрация по столбцам и пагинация. При нажатии на символ [︙] открывается карточка клиента</p>
      </div> </div>
   </div>
    
     </div>

  );   
}

export default BasicExample;