import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items =[
    { id: "1", name: "Vivair" },
    { id: "2", name: "Avianca" },
    { id: "3", name: "Satena" },
  ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-lg">
          <Link to="/" className="text-decoration-none navbar-brand">
           Viajes Colombia
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {items.map((item) => (
                <li className="nav-item" key={item.id}>
                  <Link to={item.name} className="text-decoration-none nav-link active hovers">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
