import React from "react";
import { Link } from "react-router-dom";

function Pair() {
  return (
    <>
      <section>
        <Link to={"/bluetooth"} className="Link">
          <div className="content">
            <div className="container">
            <i className="fa-solid fa-less-than"></i>
              <h3 className="display">Bluetooth</h3>
            </div>
            <br></br>
            <div></div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
          <Link to={"/bluetooth"} className="Link">
            <h3>Bluetooth</h3>
            </Link>
          </div>
          <label className="switch">
            <input type="checkbox" />
            <span
              className="slider 
            round"
            ></span>
          </label>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Device name</h3>
          </div>
          <p>vivo 1901</p>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <p>Paired devices</p>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <h3>Airdopes 131</h3>
          </div>
          <i className="fa-solid fa-greater-than"></i>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Airdopes 141</h3>
          </div>
          <i className="fa-solid fa-greater-than"></i>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>BM-R7</h3>
          </div>
          <i className="fa-solid fa-greater-than"></i>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>BT DONGLE</h3>
          </div>
          <i className="fa-solid fa-greater-than"></i>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>BT Speaker</h3>
          </div>
          <i className="fa-solid fa-greater-than"></i>
        </div>
        </section>
    </>
  );
}
export {Pair};
