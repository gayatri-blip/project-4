 import React from "react";
 import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";
 function Navbar(props) {
    

    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fix-top">
  <div className="container-fluid">
    <a className="navbar-brand text-warning" href="javascript:void(0)">FlipKart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
         <Link to="/Home"className="nav-link text-white">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Link" className="nav-link text-white">Link</Link>
        </li>
        <li className="nav-item">
          <Link to="/Login"className="nav-link text-white">Login</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"></input>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>


            
        </>
    )
}
export default Navbar;
