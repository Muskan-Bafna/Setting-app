import React from "react";
import { Link } from "react-router-dom";

function AutoLock() {
  return (
    <>
      <section>
        <Link to={"/display"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3 className="display">Auto-Lock</h3>
            </div>
            <br></br>
            <div></div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>15 seconds</h3>
          </div>
          <h2>*</h2>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>30 seconds</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>1 minute</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>2 minutes</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>5 minutes</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>10 minutes</h3>
          </div>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>3o minutes</h3>
          </div>
        </div>
      </section>
    </>
  );
}
export { AutoLock };
