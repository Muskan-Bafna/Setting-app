import React from "react";
import { Link } from "react-router-dom";

function Bluetooth() {
  return (
    <>
      <section>
        <Link to={"/"} className="Link">
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
            <h3>Bluetooth</h3>
          </div>
          <Link to={"/pair"} className="Link">
          <label className="switch">
            <input type="checkbox" />
            <span
              className="slider 
            round"
            ></span>
          </label>
          </Link>
        </div>
      </section>
    </>
  );
}
export { Bluetooth };
