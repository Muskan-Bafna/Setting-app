import React from "react";
import { Link } from "react-router-dom";

function CalenderAlertRingtone() {
  return (
    <>
      <section>
        <Link to={"/sound"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3 className="display">Calender Alert Ringtone</h3>
            </div>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/notificationringtone"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Notification reminder</h3>
            </div>
            <span>
              Whistle <i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <hr></hr>
        <Link to={"/ringtonereminder"} className="Link">
          <div className="content">
            <div className="container">
              <h3>Ringtone reminders</h3>
            </div>
            <span>
              Early In The Morning <i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
      </section>
    </>
  );
}
export { CalenderAlertRingtone };
