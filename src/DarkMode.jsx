import React from "react";
import { Link } from "react-router-dom";

function DarkMode() {
  return (
    <>
      <section>
        <Link to={"/display"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3 className="display">Dark Mode</h3>
            </div>
            <br></br>
            <div></div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <p>
              Enabling Dark Mode will help the system save battery power. Some
              third-party apps may not display well due to adaptation issues
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Dark Mode</h3>
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
            <h3>Scheduled turn on</h3>
          </div>
          <label className="switch">
            <input type="checkbox" />
            <span
              className="slider 
        round"
            ></span>
          </label>
        </div>
      </section>
    </>
  );
}
export { DarkMode };
