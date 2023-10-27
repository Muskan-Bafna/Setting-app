import React from "react";
import { Link } from "react-router-dom";

function FontSize() {
  return (
    <>
      <section>
        <Link to={"/display"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3 className="display">Font size</h3>
            </div>
            <br></br>
            <div></div>
          </div>
        </Link>
        <hr></hr>
        <div className="content" id="rang">
          <h3 id="size">
            The size of dynamic fonts will be adjusted in supported apps.
            <br />
            The changes vary from different apps.
            <br />
            <br />
          </h3>
          <input id="size" type="range" className="mytag"></input>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3 id="default" className="display">
              Restore default
            </h3>
          </div>
          <br></br>
          <div></div>
        </div>
      </section>
    </>
  );
}
export { FontSize };
