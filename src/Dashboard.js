import React, { Component } from "react";
import logo from "./nimg/Logo_color 1.png";
import "./style/Dashboard.css";
import Accordion from "react-bootstrap/Accordion";
import { GoBriefcase } from "react-icons/go";

class Dashboard extends Component {
  render() {
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
                      <GoBriefcase /> Рабочий стол
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="right-panel"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
