import React from "react";
import { Link } from "react-router-dom";

function RingtoneReminder() {
  return (
    <>
      <section>
        <Link to={"/calenderalertringtone"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-greater-than"></i>
              <h3 className="display">Ringtone reminder</h3>
            </div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Custom ringtone</h3>
          </div>
          <h3>
            {" "}
            <i className="fa-solid fa-greater-than"></i>
          </h3>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <p>system ringtone</p>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <h3>Beautiful Touching</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Clock Alert</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Crisp Ring</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Cycle Oscillation</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Early In The Morning</h3>
          </div>
          <h2>
            <i className="fa-solid fa-check"></i>
          </h2>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Fine Day</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Flush of dawn</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Get Up Action</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Glassy Lustre</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Lights</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Moonlight</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Morning Scene</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Sound Of The Sea</h3>
          </div>
        </div>
        <hr></hr>
        <div class="content">
          <div class="container">
            <h3>Thump</h3>
          </div>
        </div>
      </section>
    </>
  );
}
export { RingtoneReminder };
