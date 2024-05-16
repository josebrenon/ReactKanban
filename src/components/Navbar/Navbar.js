import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar" style={{backgroundColor: '#0079bf'}}>
      <div className="container-fluid">
        <a className="navbar-brand text-light mx-auto fs-1" href="#">
          <img src="https://dabeng.github.io/img/reactjs.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-center me-2" />
          ReactKanban
        </a>
      </div>
    </nav>
  );
}
