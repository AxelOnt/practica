import React from 'react';
import { Link, redirect } from 'react-router-dom';

const Navbarr = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="conteiner-fluid" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="#">
            <img src='src\Imgs\Snacky.png' width='180' height= "auto"></img>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="#">Productos Destacados</Link>
        </li>
      </ul>
      <ul>
      <li className="nav-item ">
          <Link>
            <img width='50' height='auto' src="https://img.icons8.com/ios/50/kawaii-french-fries.png" alt="kawaii-french-fries"/>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbarr;