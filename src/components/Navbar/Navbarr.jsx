import React from "react";
import { Link, redirect } from "react-router-dom";
import snacky from "../../Imgs/Snacky.png";
const Navbarr = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{
          marginLeft:"30%"
        }}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="" href="#">
                <img
                  src={snacky}
                  style={{ width: "130px", height: "auto" }}
                  alt="snack logo"
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                Prod Destacados
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                Contacto
              </a>
            </li>
          </ul>
          <div className="d-flex me-5" role="search">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/kawaii-french-fries.png"
              alt="kawaii-french-fries"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
