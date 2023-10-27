import React from "react";
import "./Sound.css";
import { Link } from "react-router-dom";

function SoundAndVibration() {
  return (
    <>
      <section>
        <Link to={"/"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3 className="display">Sound and vibration</h3>
            </div>
            <br></br>
            <div></div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Mute</h3>
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
            <h3>Vibrate</h3>
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
          <h3>
            Rington
            <br />
            <br />
          </h3>
          <input type="range"></input>
        </div>
        <hr></hr>
        <div className="content" id="rang">
          <h3>
            Media
            <br />
            <br />
          </h3>
          <input type="range"></input>
        </div>
        <hr></hr>
        <div className="content" id="rang">
          <h3>
            Notification
            <br />
            <br />
          </h3>
          <input type="range"></input>
        </div>
        <hr></hr>
        <div className="content" id="rang">
          <h3>
            Alarm
            <br />
            <br />
          </h3>
          <input type="range"></input>
        </div>

        <hr></hr>
        <Link to={"/btntoadjust"} className="Link">
          <div className="content">
            <div className="container">
              <h3>
                Use the volume buttons to adjust
                <br />
                <br />
                <h5>
                  Ring volume of incoming calls can be controlled using the side
                  volume buttons
                </h5>
              </h3>
            </div>
            <span>Rington</span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/simonecallring"} className="Link">
          <div className="content">
            <div className="container">
              <h3>SIM 1 incoming call ringtone</h3>
            </div>
            <span>
              {" "}
              Blue Metror Showers <i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/simtwocallring"} className="Link">
          <div className="content">
            <div className="container">
              <h3>SIM 2 incoming call ringtone</h3>
            </div>
            <span>
              Blue Metror Showers <i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/msgtone"} className="Link">
          <div className="content">
            <div className="container">
              <h3>SIM 1 Message tone</h3>
            </div>
            <span>
              Elegant<i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/twomsgtone"} className="Link">
          <div className="content">
            <div className="container">
              <h3>SIM 2 Message tone</h3>
            </div>
            <span>
              Elegant<i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/calenderalertringtone"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Calender alert ringtones</h3>
            </div>
            <span>
              <i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/notificationringtone"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Notification ringtone</h3>
            </div>
            <span>
              Whistel<i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Ascending ringtone</h3>
          </div>
          <span>
            <label className="switch">
              <input type="checkbox" />
              <span
                className="slider 
          round"
              ></span>
            </label>
          </span>
        </div>
        <hr></hr>
        <Link to={"/dialpad"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Dialpad touch tone</h3>
            </div>
            <span>
              classNameic<i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Touch sound</h3>
          </div>
          <span>
            <label className="switch">
              <input type="checkbox" />
              <span
                className="slider 
          round"
              ></span>
            </label>
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Screen lock sound</h3>
          </div>
          <span>
            <label className="switch">
              <input type="checkbox" />
              <span
                className="slider 
          round"
              ></span>
            </label>
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Screen capture tone </h3>
          </div>
          <span>
            <label className="switch">
              <input type="checkbox" />
              <span
                className="slider 
          round"
              ></span>
            </label>
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Message sent sound</h3>
          </div>
          <span>
            <label className="switch">
              <input type="checkbox" />
              <span
                className="slider 
          round"
              ></span>
            </label>
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>
              Touch feedback
              <br /> <br />
              <h5>
                Vibrate on tapping the bottom button or operating some functions
              </h5>
            </h3>
          </div>
          <span>
            <label className="switch">
              <input type="checkbox" />
              <span
                className="slider 
          round"
              ></span>
            </label>
          </span>
        </div>
      </section>
    </>
  );
}
export { SoundAndVibration };
