import React from "react";
import "./PersonalHotspot.css";
import { Link } from "react-router-dom";

function PersonalHotspot() {
  return (
    <>
      <section>
        <Link to={"/"} className="Link">
          <div className="content">
            <div className="container" id="main">
              <i className="fa-solid fa-greater-than"></i>
              <h3 className="display">Personal Hotspot</h3>
            </div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>
              Wi-Fi hotspot <br />
              <br />
              <h5>
                Enable your personal hotspot to tether the internet
                connection.Tethering the mobile network will incur data
              </h5>
            </h3>
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
        <Link to={"/hotspotconfiguration"} className="Link">
          <div className="content">
            <div className="container">
              <h3>
                Hotspot configuration
                <br />
                <br />
                <h5>Name: muskan Password:0987654321</h5>
              </h3>
            </div>
            <i className="fa-solid fa-greater-than"></i>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/datause"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Data limit per use</h3>
            </div>
            <span>
              unlimited <i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/connectionsallowed"} className="Link">
          <div className="content">
            <div className="container">
              <h3>
                Number of connection allowed
                <br />
                <br />
                <h5>
                  The hotspot will be restarted whwn the number of connections
                  is changed
                </h5>
              </h3>
            </div>
            <span>1 connection</span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/offhotspot"} className="Link">
          <div className="content">
            <div className="container">
              <h3>
                Turn off hotspot automatically
                <br /> <br />
                <h5>
                  After exiting this inertface , if no devices are connected
                  within 10 minutes,
                  <br /> the Wi-Fi hotspot Will turn off automatically{" "}
                </h5>
              </h3>
            </div>
            <span>10 mminutes</span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/sharingmode"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Other sharing mode</h3>
            </div>
            <i className="fa-solid fa-greater-than"></i>
          </div>
        </Link>
      </section>
    </>
  );
}
export { PersonalHotspot };
