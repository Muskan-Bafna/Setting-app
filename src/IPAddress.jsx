import React from "react";
import { Link } from "react-router-dom";

function IPAddress() {
  return (
    <>
      <section>
        <Link to={"/aboutphone"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-less-than"></i>
              <h3 className="display">IP address</h3>
            </div>
          </div>
        </Link>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>IPv4 address</h3>
          </div>
          <p>192.0.0.4</p>
        </div>
        <hr></hr>
        <div className="content">
          <div className="container">
            <h3>IPV6 address</h3>
          </div>
          <p>-2409:4081:9e00:853f::2a49:b712</p>
        </div>
      </section>
    </>
  );
}
export { IPAddress };
