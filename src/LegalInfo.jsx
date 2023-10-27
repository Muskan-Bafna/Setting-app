import React from "react";
import { Link } from "react-router-dom";

function LegalInfo() {
  return (
    <>
      <section>
        <Link to={"/aboutphone"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3 className="display">Legal information</h3>
            </div>
            <br></br>
            <div></div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Copyrights</h3>
          </div>
          <i className="fa-solid fa-greater-than"></i>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>End User Licence Agreement</h3>
          </div>
          <span>
            <i className="fa-solid fa-greater-than" />
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>vivo Privacy Policy</h3>
          </div>
          <span>
            <i className="fa-solid fa-greater-than" />
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Safety information</h3>
          </div>
          <span>
            <i className="fa-solid fa-greater-than" />
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Open source Lincense</h3>
          </div>
          <span>
            <i className="fa-solid fa-greater-than" />
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>System WebView Lincense</h3>
          </div>
          <span>
            <i className="fa-solid fa-greater-than" />
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Google legal</h3>
          </div>
          <span>
            <i className="fa-solid fa-greater-than" />
          </span>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>Regulatory compliance</h3>
          </div>
          <span>
            {" "}
            <i className="fa-solid fa-greater-than"></i>
          </span>
        </div>
      </section>
    </>
  );
}
export { LegalInfo };
