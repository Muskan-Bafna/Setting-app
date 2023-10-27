import React from "react";
import { Link } from "react-router-dom";

function Help() {
  return (
    <>
      <section>
        <Link to={"/sharingmode"} className="Link">
          <div class="content">
            <div class="container">
              <i class="fa-solid fa-less-than"></i>
              <h3 className="display">Help </h3>
            </div>
            <br></br>
          </div>
        </Link>
        <hr></hr>
        <div class="content">
          <div class="container">
            <h3>Share phone network via Wi-Fi </h3>
          </div>
          <br></br>
        </div>
        <div class="content">
          <div class="container">
            <p>
              1. Choose "muskan" from "Wi-Fi" on your computer or other device.
              <br />
              2. Enter the password when prompted
            </p>
          </div>
        </div>
        <div class="content">
          <div class="container">
            <h3>Share phone network via Bluetooth</h3>
          </div>
        </div>
        <div class="content">
          <div class="container">
            <p>
              1. Pair vivo with your computer or other device.
              <br />
              2. Connect to vivo from computer or other device
            </p>
          </div>
        </div>
        <div class="content">
          <div class="container">
            <h3>Share phone network via USB</h3>
          </div>
        </div>
        <div class="content">
          <div class="container">
            <p>
              1. Connect your phone to your PC with a USB cable.
              <br /> 2.Choose "muskan" from your Computer"s network connection
              services.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export { Help };
