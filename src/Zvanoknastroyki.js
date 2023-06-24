import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import React, { useEffect } from "react";
import "./klient.css";
import { CiCirclePlus } from "react-icons/ci";
import url from "./host";
import axios from "axios";
export default function Zvanoknastroyki() {
  const companyName = localStorage.getItem("nameCompany");
  useEffect(() => {
    document.querySelectorAll(".allinput")[0].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).username;
    document.querySelectorAll(".allinput")[1].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).email;
    document.querySelectorAll(".allinput")[2].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).social_network;
    document.querySelectorAll(".allinput")[3].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).password;
    document.querySelectorAll(".allinput")[4].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).phone;
    document.querySelectorAll(".allinput")[5].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).organization;
    document.querySelectorAll(".allinput")[6].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).requisite;
    document.querySelectorAll(".allinput")[7].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).inn;
    document.querySelectorAll(".allinput")[8].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).kpp;
    document.querySelectorAll(".allinput")[9].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).ogrn;
    document.querySelectorAll(".allinput")[10].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).registered_adress;
    document.querySelectorAll(".allinput")[11].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).actual_adress;
    document.querySelectorAll(".allinput")[12].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).manager;
    document.querySelectorAll(".allinput")[13].value = JSON.parse(
      localStorage.getItem("getAdmin")
    ).staff;
  }, []);
  function dataPost() {
    var DataPost = {
      username: (document.querySelectorAll(".allinput")[0].value).length > 2?document.querySelectorAll(".allinput")[0].value:null,
      email: (document.querySelectorAll(".allinput")[1].value).includes('@')?document.querySelectorAll(".allinput")[1].value:null,
      social_network: (document.querySelectorAll(".allinput")[2].value).length > 2?document.querySelectorAll(".allinput")[2].value:null,
      phone: (document.querySelectorAll(".allinput")[4].value).length > 2?document.querySelectorAll(".allinput")[4].value:null,
      organization: (document.querySelectorAll(".allinput")[5].value).length > 2?document.querySelectorAll(".allinput")[5].value:null,
      requisite: (document.querySelectorAll(".allinput")[6].value).length > 2?document.querySelectorAll(".allinput")[6].value:null,
      inn: (document.querySelectorAll(".allinput")[7].value).length > 2?document.querySelectorAll(".allinput")[7].value:null,
      kpp: (document.querySelectorAll(".allinput")[8].value).length > 2?document.querySelectorAll(".allinput")[8].value:null,
      ogrn: (document.querySelectorAll(".allinput")[9].value).length > 2?document.querySelectorAll(".allinput")[9].value:null,
      registered_adress: (document.querySelectorAll(".allinput")[10].value).length > 2?document.querySelectorAll(".allinput")[10].value:null,
      actual_adress: (document.querySelectorAll(".allinput")[11].value).length > 2?document.querySelectorAll(".allinput")[11].value:null,
      manager: (document.querySelectorAll(".allinput")[12].value).length > 2?document.querySelectorAll(".allinput")[12].value:null,
      staff: (document.querySelectorAll(".allinput")[13].value).length > 2?document.querySelectorAll(".allinput")[13].value:null,
    };

    console.log(DataPost);

    axios
      .put(
        `${url}/auth/users/${JSON.parse(localStorage.getItem("getAdmin")).id}/`,
        DataPost,
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      .then((res) => {
        window.location = "/dashboard";
      })
      .catch((err) => {
        alert("Error");
      });
  }
  function zakroy() {
    document.querySelector(".firmadiv1").style = "display:none";
  }
  return (
    <div className="firmadiv1">
      <div className="firma1">
        <h1 className="nameCompanyh1">
          {JSON.parse(localStorage.getItem("getAdmin")).organization}
        </h1>
        <button className="firma1but">
          ID: {JSON.parse(localStorage.getItem("getAdmin")).id}
        </button>
      </div>
      <div className="line"></div>
      <div className="firma2">
        <h1>Логин</h1>
        <button></button>

        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput firma7b"
        />
      </div>
      <div className="firma3">
        <h1>E-mail</h1>

        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput firma7b"
        />
      </div>
      <div className="firma4">
        <h1>Соц сеть</h1>
        <button className="">
          <CiCirclePlus />
        </button>

        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput "
        />
      </div>
      <div className="firma5">
        <h1>Пароль</h1>


        <input
          type="password"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput firma7b"
        />
      </div>
      <div className="line"></div>
      <div className="firma6">
        <h1>Раб телефон:</h1>
        <button className="firma14b">
          <CiCirclePlus />
        </button>

        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput "
        />
      </div>
      <div className="firma7 ">
        <h1>Компания</h1>


        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput firma7b"
        />
      </div>
      <div className="line"></div>
      <div className="firma7">
        <h1>Реквизиты:</h1>


        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput firma8b"
        />
      </div>
      <div className="firma7">
        <h1>ИНН</h1>


        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput firma9b"
        />
      </div>
      <div className="firma7">
        <h1>КПП</h1>


        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput firma10b"
        />
      </div>
      <div className="firma7">
        <h1>ОГРН</h1>


        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput firma11b"
        />
      </div>
      <div className="firma7">
        <h1>Юридический адрес</h1>


        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput firma12b"
        />
      </div>
      <div className="firma7">
        <h1>Фактический адрес</h1>
        

        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput firma12b"
        />
      </div>
      <div className="firma7">
        <h1>Руководители</h1>
        <button className="firma13b">
          <CiCirclePlus />
        </button>

        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput"
        />
      </div>
      <div className="line"></div>
      <div className="firma7">
        <h1>Сотрудники</h1>
        <button className="firma14b">
          <CiCirclePlus />
        </button>

        <input
          type="text"
          style={{
            border: "none",
            borderLeft: "1px dashed white",
            marginLeft: "20px",
            background: "00000000",
            color: "white",
            height: "30px",
            paddingLeft: "12px",
          }}
          className="allinput"
        />
      </div>
      <div className="firma_div2">
        <button
          onClick={() => {
            dataPost();
          }}
        >
          Редактировать
        </button>
        <button onClick={zakroy} className="firma_butt2">
          Закрыть
        </button>
      </div>
    </div>
  );
}
