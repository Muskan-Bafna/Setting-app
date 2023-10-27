import React from "react";
import { Link } from "react-router-dom";

function DataUse() {
  return (
    <>
      <section>
        <Link to={"/personal"} className="Link">
          <div className="content">
            <div className="container" id="data">
              <i className="fa-solid fa-less-than"></i>
              <h1 className="display">Data limit per use</h1>
            </div>
            <label className="switch"></label>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Unlimited</h3>
          </div>
          <h3>
            <i className="fa-solid fa-check"></i>
          </h3>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>20 MB</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>30 MB</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>50 MB</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>100 MB</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Custom</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export { DataUse };
