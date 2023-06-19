// import React, { Component } from "react";
// import { useState } from "react";
// import logo from "./nimg/Logo_color 1.png";
// import "./style/Dashboard.css";
// import Accordion from "react-bootstrap/Accordion";
// import { GoBriefcase } from "react-icons/go";
// import { CiSaveDown2 } from "react-icons/ci";
// import { BsClipboardCheck } from "react-icons/bs";
// import { BsChatLeft } from "react-icons/bs";
// import { BsTelephone } from "react-icons/bs";
// import { HiOutlineUserGroup } from "react-icons/hi";
// import { HiOutlineLogout } from "react-icons/hi";
// import { HiOutlineSearchCircle } from "react-icons/hi";
// import { HiOutlineUserCircle } from "react-icons/hi";
// import { HiOutlineCreditCard } from "react-icons/hi";
// import { HiOutlineMail } from "react-icons/hi";
// import { HiOutlineChartSquareBar } from "react-icons/hi";
// import { FiSettings } from "react-icons/fi";
// import { AiOutlineClose } from "react-icons/ai";
// import { AiOutlineBars } from "react-icons/ai";
// import axios from "axios";
// import Login from "./Login";

// class Dashboard extends Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     axios
//       .get("https://calltocall.onrender.com/auth/users/")
//       .then((response) => {
//         this.setState({ data: response.data });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   render() {
//     const { data } = this.state;
//     function menuop() {
//       document.querySelector(".left-panel").style =
//         "display: flex; position: absolute; top: 0; left: 0; z-index:10; transition: .7s";
//       document.querySelector(".closemenu").style = "display: flex"
//     }
//     function menucl() {
//       document.querySelector(".left-panel").style =
//         "display: flex; position: absolute; top: 0; left: -500; z-index:10; transition: .7s";
//       document.querySelector(".closemenu").style = "display: none"
//     }
//     const [page, setPage] = useState(0);
//     return (
//       <div>
//         <div className="main">
//           <div className="left-panel">
//             <div className="l-panel-logo">
//               <img src={logo} alt="" />
//               <h1>
//                 Панель <br /> управления
//               </h1>
//             </div>
//             <div className="l-panel-menu">
//               <Accordion defaultActiveKey={["0"]} alwaysOpen>
//                 <Accordion.Item eventKey="0">
//                   <Accordion.Header>
//                     <GoBriefcase /> <p>Рабочий стол</p>
//                   </Accordion.Header>
//                   <Accordion.Body>
//                     <div className="body-down">
//                       <CiSaveDown2 /> Настройки
//                     </div>
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="1">
//                   <Accordion.Header>
//                     <BsClipboardCheck /> <p>Онлайн - запись</p>
//                   </Accordion.Header>
//                   <Accordion.Body>
//                     <div className="body-down">
//                       <CiSaveDown2 /> Настройки
//                     </div>
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="2">
//                   <Accordion.Header>
//                     <HiOutlineUserGroup /> <p>Клиенты</p>
//                   </Accordion.Header>
//                   <Accordion.Body>
//                     <div className="body-down">
//                       <CiSaveDown2 /> Настройки
//                     </div>
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="3">
//                   <Accordion.Header>
//                     <HiOutlineChartSquareBar /> <p>Отчеты</p>
//                   </Accordion.Header>
//                   <Accordion.Body>
//                     <div className="body-down">
//                       <CiSaveDown2 /> Настройки
//                     </div>
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="4">
//                   <Accordion.Header>
//                     <BsTelephone /> <p>Обратный звонок</p>
//                   </Accordion.Header>
//                   <Accordion.Body>
//                     <div onClick={()=>{
//                       setPage(1);
//                     }} className="body-down">
//                       <FiSettings /> Настройки
//                     </div>
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="5">
//                   <Accordion.Header>
//                     <BsChatLeft /> <p>Чат на сайт</p>
//                   </Accordion.Header>
//                   <Accordion.Body>
//                     <div className="body-down">
//                       <CiSaveDown2 /> Настройки
//                     </div>
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="6">
//                   <Accordion.Header>
//                     <HiOutlineCreditCard /> <p>Тарифы</p>
//                   </Accordion.Header>
//                   <Accordion.Body>
//                     <div className="body-down">
//                       <CiSaveDown2 /> Настройки
//                     </div>
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="7">
//                   <Accordion.Header>
//                     <GoBriefcase /> <p>Настройки</p>
//                   </Accordion.Header>
//                   <Accordion.Body>
//                     <div className="body-down">
//                       <CiSaveDown2 /> Настройки
//                     </div>
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="8">
//                   <Accordion.Header>
//                     <HiOutlineLogout /> <p>Выход</p>
//                   </Accordion.Header>
//                   <Accordion.Body>
//                     <div className="body-down">
//                       <CiSaveDown2 /> Настройки
//                     </div>
//                   </Accordion.Body>
//                 </Accordion.Item>
//               </Accordion>
//             </div>
//           </div>
//           <div className="right-panel">
//             <div className="rp-menu">
//               <div className="rp-btn">
//                 <AiOutlineBars style={{ fontSize: '30px' }} onClick={menuop} />
//               </div>
//               <AiOutlineClose onClick={menucl} className="closemenu" />
//               <div className="rp-m-profile">
//                 <HiOutlineUserCircle className="i-user" />
//                 <h1>Профиль</h1>
//               </div>
//               <div className="rp-m-all">
//                 <div className="rp-m-all-inp">
//                   <input type="search" />
//                   <HiOutlineSearchCircle className="i-search" />
//                 </div>
//                 <div className="rp-m-all-all">
//                   <HiOutlineMail />
//                   <HiOutlineUserCircle />
//                   {data.map((item) => {
//                     <p>{item.first_name}</p>;
//                   })}
//                   <HiOutlineLogout />
//                 </div>
//               </div>
//             </div>
//             <div className="rp-vvod">

//               {page === 1 ? (<Login />) : (<div></div>)}
//             </div>
//           </div>
//         </div>
//         <div className="down-panel">
//           <div className="dp-flex">
//             <div className="dp-domen">
//               <h1>©2023 CallToCall.ru</h1>
//             </div>
//             <div className="dp-about">
//               <a href="">
//                 <h1>Техподдержка</h1>
//               </a>
//               <p>Построено в Vitico.ru</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import logo from "./nimg/Logo_color 1.png";
import "./style/Dashboard.css";
import Accordion from "react-bootstrap/Accordion";
import { GoBriefcase } from "react-icons/go";
import { CiSaveDown2 } from "react-icons/ci";
import { BsClipboardCheck } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineCreditCard } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import axios from "axios";
import Login from "./Login";
import url from './host';
import Zvanoknastroyki from "./Zvanoknastroyki";

export default function Dashboard() {

  function menuop() {
    document.querySelector(".left-panel").style =
      "display: flex; position: absolute; top: 0; left: 0; z-index:10; transition: .7s; overflow: scroll; padding-bottom: 100px;height: 100vh;";
    document.querySelector(".closemenu").style = "display: flex"
  }
  function menucl() {
    document.querySelector(".left-panel").style =
      "display: flex; position: absolute; top: 0; left: -500; z-index:10; transition: .7s";
    document.querySelector(".closemenu").style = "display: none"
  }
  function userhover() {
    document.querySelector('.usernamehover').style = "display: flex"
  }
  const [page, setPage] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    var lo=JSON.parse(localStorage.getItem("userGet"))
axios.get(`${url}/auth/users/`, { headers:{ Authorization: "Bearer " +localStorage.getItem("token")}}).then((res) => {
res.data.map((user) => {
if (user.email===lo.email){
  setUser(user);
localStorage.setItem("getAdmin",JSON.stringify(user))
}
})
})
},[])
  return (
    <div>
      <div className="main">
        <div className="left-panel">
          <div className="l-panel-logo">
            <img src={logo} alt="" />
            <h1>
              Панель <br /> управления
            </h1>
          </div>
          <div className="l-panel-menu">
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <GoBriefcase /> <p>Рабочий стол</p>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="body-down">
                    <CiSaveDown2 /> Настройки
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <BsClipboardCheck /> <p>Онлайн - запись</p>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="body-down">
                    <CiSaveDown2 /> Настройки
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <HiOutlineUserGroup /> <p>Клиенты</p>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="body-down">
                    <CiSaveDown2 /> Настройки
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <HiOutlineChartSquareBar /> <p>Отчеты</p>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="body-down">
                    <CiSaveDown2 /> Настройки
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <BsTelephone /> <p>Обратный звонок</p>
                </Accordion.Header>
                <Accordion.Body>
                  <div onClick={() => {
                    setPage(1);
                  }} className="body-down">
                    <FiSettings /> Настройки
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <BsChatLeft /> <p>Чат на сайт</p>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="body-down">
                    <CiSaveDown2 /> Настройки
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <HiOutlineCreditCard /> <p>Тарифы</p>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="body-down">
                    <CiSaveDown2 /> Настройки
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  <GoBriefcase /> <p>Настройки</p>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="body-down">
                    <CiSaveDown2 /> Настройки
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  <HiOutlineLogout /> <p>Выход</p>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="body-down">
                    <CiSaveDown2 /> Настройки
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="right-panel">
          <div className="rp-menu">
            <div className="rp-btn">
              <AiOutlineBars style={{ fontSize: '30px' }} onClick={menuop} />
            </div>
            <AiOutlineClose onClick={menucl} className="closemenu" />
            <div className="rp-m-profile">
              <HiOutlineUserCircle className="i-user" />
              <h1>Профиль</h1>
            </div>
            <div className="rp-m-all">
              <div className="rp-m-all-inp">
                <input type="search" />
                <HiOutlineSearchCircle className="i-search" />
              </div>
              <div className="rp-m-all-all">
                <HiOutlineMail />
                <HiOutlineUserCircle onClick={userhover} />
                <div className="usernamehover">
                {user.username}
                </div>
                <div className="username">
                {user.username}
                </div>
                <HiOutlineLogout />
              </div>
            </div>
          </div>
          <div className="rp-vvod">
            {page === 1 ? (<Zvanoknastroyki />) : (<div></div>)}
          </div>
        </div>
      </div>
      <div className="down-panel">
        <div className="dp-flex">
          <div className="dp-domen">
            <h1>©2023 CallToCall.ru</h1>
          </div>
          <div className="dp-about">
            <a href="">
              <h1>Техподдержка</h1>
            </a>
            <p>Построено в Vitico.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
}
