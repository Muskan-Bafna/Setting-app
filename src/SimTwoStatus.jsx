import React from "react";
import { Link } from "react-router-dom";

function SimTwoStatus() {
  return (
    <>
      <section>
        <Link to={"/aboutphone"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3 className="display">SIM 2Status</h3>
            </div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Network</h3>
          </div>
          <p>airtel</p>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Signal strength</h3>
          </div>
          <p>-117 dBm 23 asu</p>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Mobile network type</h3>
          </div>
          <span>LTE</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>service state</h3>
          </div>
          <span>In service</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Roaming</h3>
          </div>
          <span>Not roaming</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Mobile network state</h3>
          </div>
          <p>Disconnected</p>
        </div>
      </section>
    </>
  );
}
export { SimTwoStatus };
