import React from "react";
import "./Display.css";
import { Link } from "react-router-dom";

function DisplayAndBrightness() {
  return (
    <>
      <section>
        <Link to={"/"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3 className="display">Display and brightness</h3>
            </div>
            <br></br>
            <div></div>
          </div>
        </Link>
        <hr></hr>
        <div className="content" id="rang">
          <p>
            Brightness
            <br />
            <br />
          </p>
          <input type="range" className="mytag"></input>
        </div>

        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Auto-brightness</h3>
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
        <Link to={"/eyeprotection"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Eye Protection</h3>
            </div>
            <span>
              On <i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/darkmode"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Dark Mode</h3>
            </div>
            <span>
              On<i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/autolock"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Auto-lock</h3>
            </div>
            <p>15 seconds</p>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Portrait orientation lock</h3>
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
        <Link to={"/fontstyle"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Font style</h3>
            </div>
            <i className="fa-solid fa-greater-than"></i>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/fontsize"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Font size</h3>
            </div>
            <i className="fa-solid fa-greater-than"></i>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Color Temperature Adjustment </h3>
          </div>
          <span>
            <i className="fa-solid fa-greater-than"></i>
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Full screen Display apps</h3>
          </div>
          <span>
            <i className="fa-solid fa-greater-than"></i>
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Display at the top of the screen</h3>
          </div>
          <span>
            <i className="fa-solid fa-greater-than"></i>
          </span>
        </div>
      </section>
    </>
  );
}
export { DisplayAndBrightness };
