import React from "react";
import { Link } from "react-router-dom";

function AboutPhone() {
  return (
    <>
      <section>
        <Link to={"/"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3 className="display">About phone</h3>
            </div>
            <br></br>
            <div></div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h1>Funtouch OS</h1>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Model number</h3>
          </div>
          <span>vivo 1901</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>IMEI 1</h3>
          </div>
          <span>866281046981816</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>IMEI 2</h3>
          </div>
          <span>866281046981808</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Android version</h3>
          </div>
          <span>9</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Android security patch level</h3>
          </div>
          <span>2020-12-01</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Processor</h3>
          </div>
          <span>2.0 GHz Octa-core</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>CPU real-time data</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>RAM</h3>
          </div>
          <span>4 GB</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>vivo ROM</h3>
          </div>
          <span>Funtouch OS_9</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Software version</h3>
          </div>
          <span>PD1901BF_EX_A_1.70.9</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Baseband version</h3>
          </div>
          <span>MOLY.LR12A.R2.MP.V56.P149</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Kernel version</h3>
          </div>
          <span>4.9.117+</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Compile time</h3>
          </div>
          <span>2021-02-07</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Used time</h3>
          </div>
          <span>40:29:24</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Battery status</h3>
          </div>
          <span>Charging(AC)</span>
        </div>
        <hr></hr>
        <Link to={"/simonestatus"} className="Link">
          <div className="content">
            <div className="container">
              <h3>SIM 1Status</h3>
            </div>
            <span>
              {" "}
              <i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/simtwostatus"} className="Link">
          <div className="content">
            <div className="container">
              <h3>SIM 2Status</h3>
            </div>
            <span>
              {" "}
              <i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/ipaddress"} className="Link">
          <div className="content">
            <div className="container">
              <h3>IP address</h3>
            </div>
            <span>
              {" "}
              <i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Wi-Fi MAC address</h3>
          </div>
          <span>20:74:54:00:c5:93</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Bluetooth address</h3>
          </div>
          <span>Unavailable</span>
        </div>
        <hr></hr>
        <Link to={"/legalinfo"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Legal information</h3>
            </div>
            <span>
              {" "}
              <i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
      </section>
    </>
  );
}
export { AboutPhone };
