import React from "react";
import { Link } from "react-router-dom";

function ConnectionsAllowed() {
  return (
    <>
      <section>
        <Link to={"/personal"} className="Link">
          <div className="content" id="config">
            <h1 className="display">Number of connections allowed</h1>

            <label className="switch"></label>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>1 configuration</h3>
          </div>
          <h3>
            <i className="fa-solid fa-check"></i>
          </h3>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>2 connection</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>3 connection</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>4 connection</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>5 connection</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>6 connection</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>7 connection</h3>
          </div>
        </div>
      </section>
    </>
  );
}
export { ConnectionsAllowed };
