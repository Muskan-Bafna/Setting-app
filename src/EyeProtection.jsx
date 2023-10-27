import React from "react";
import { Link } from "react-router-dom";

function EyeProtection() {
  return (
    <>
      <section>
        <Link to={"/display"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3 className="display">Eye Protection</h3>
            </div>
            <br></br>
            <div></div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <p>Adjust screen color to relieve visual fatigue.</p>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Manual</h3>
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
            <h3>Set time</h3>
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
        <div className="content" id="rang">
          <p>
            Screen color
            <br />
            <br />
            <input type="range" className="mytag"></input>
          </p>
        </div>

        <hr></hr>
        <div className="content">
          <div className="container">
            <p>warm screen colors can help relieve visual fatigue</p>
          </div>
        </div>
      </section>
    </>
  );
}
export { EyeProtection };
