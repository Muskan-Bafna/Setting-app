import React from "react";
import "./Fontstyle.css";
import { Link } from "react-router-dom";

function FontStyle() {
  return (
    <>
      <section>
        <Link to={"/display"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3>Font style</h3>
            </div>
            <br></br>
            <div></div>
          </div>
        </Link>
        <hr></hr>
        <div className="content" id="para">
          <p className="para1">Default</p>
          <p className="para1">classNameic fonts</p>
        </div>

        <hr></hr>
        <div className="content">
          <div className="container">
            <p className="para2">Download more</p>
          </div>
        </div>
      </section>
    </>
  );
}
export { FontStyle };
