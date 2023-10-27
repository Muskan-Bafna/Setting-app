import React from "react";
import { Link } from "react-router-dom";

function DialpadTouchTone() {
  return (
    <>
      <section>
        <Link to={"/sound"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h1 className="display">Dialpad touch tone</h1>
            </div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Mute</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>classic</h3>
          </div>
          <h3>
            <i className="fa-solid fa-check"></i>
          </h3>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Scale</h3>
          </div>
        </div>
      </section>
    </>
  );
}
export { DialpadTouchTone };
