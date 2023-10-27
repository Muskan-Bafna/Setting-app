import React from "react";
import { Link } from "react-router-dom";

function SharingMode() {
  return (
    <>
      <section>
        <Link to={"/personal"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3 className="display">Other sharing mode</h3>
            </div>
            <br></br>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Share phone network via Bluetooth</h3>
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
            <h3>Share phone network via Bluetooth</h3>
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
        <Link to={"/help"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Help</h3>
            </div>
            <i className="fa-solid fa-greater-than"></i>
          </div>
        </Link>
      </section>
    </>
  );
}

export { SharingMode };
