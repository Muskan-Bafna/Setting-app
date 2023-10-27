import React from "react";
import { Link } from "react-router-dom";

function HotspotConfiguration() {
  return (
    <>
      <section>
        <Link to={"/personal"} className="Link">
          <div className="content">
            <p>Cancle</p>
            <h3 className="display">Hotspot configuration </h3>
            <label className="switch">
              <p>Done</p>
            </label>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Network ID</h3>
          </div>
          <p>muskan</p>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Security</h3>
          </div>
          <p>WpA2PSK</p>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Password</h3>
          </div>
          <span>0987654321</span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>AP band</h3>
          </div>
          <p>2.4 GHz band</p>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Hide my hotspot</h3>
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
            <p>
              when the switch is enabled, you can manually add a network
              connection to this hotspot
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export { HotspotConfiguration };
