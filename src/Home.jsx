import react from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Axios from "axios";

function MyFunctionalComponent() {
  return (
    <>
      <header>
        <h1>Settings</h1>
        <div className="wrap">
          <div className="search">
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"/>
          </div>
        </div>
      </header>
      <hr></hr>
      <section>
        <div className="content">
          <div className="container">
            <i className="fa-solid fa-plane-up"></i>
            <h3>Airplane mode</h3>
          </div>
          <label className="switch">
            <input type="checkbox" />
            <span
              className="slider 
                round"
            ></span>
          </label>
        </div>
        <Link to={"/personal"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-solid fa-wifi"></i>
              <h3>Personal Hotspot</h3>
            </div>
            <i className="fa-solid fa-greater-than"></i>
          </div>
        </Link>
        <Link to={"/bluetooth"} className="Link">
          <div className="content">
            <div className="container">
              <i className="fa-brands fa-bluetooth-b"></i>
              <h3>Bluetooth</h3>
            </div>
            <span>
              Off <i className="fa-solid fa-greater-than"></i>
            </span>
          </div>
        </Link>
        <Link to={"/sound"} className="Link">
          <div className="content">
            <div className="container">
              <span id="sound" className="material-symbols-outlined">
                volume_up
              </span>
              <h3>Sound and vibration</h3>
            </div>
            <i className="fa-solid fa-greater-than"></i>
          </div>
        </Link>
        <Link to={"/display"} className="Link">
          <div className="content">
            <div className="container">
              <span id="display" className="material-symbols-outlined">
                light_mode
              </span>
              <h3>Display and brightness</h3>
            </div>
            <i className="fa-solid fa-greater-than"></i>
          </div>
        </Link>
        <Link to={"/aboutphone"} className="Link">
          <div className="content">
            <div className="container">
              <span className="material-symbols-outlined">settings</span>
              <h3>About phone</h3>
            </div>
            <i className="fa-solid fa-greater-than"></i>
          </div>
        </Link>
      </section>
    </>
  );
}
export { MyFunctionalComponent };
