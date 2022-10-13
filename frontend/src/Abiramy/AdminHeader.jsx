import React from "react";

import { Image } from "react-bootstrap";

import { Link } from "react-router-dom";

import hotel from "../Abiramy/images/hotel.png";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        {/* <Image variant="top" src={hotel} width="200px" height="80px" /> */}

        {/* <Link className="navbar-brand" to="/">
          WESTINE Grand Resort
        </Link> */}

        <div className="collapse navbar-collapse">
          <br></br>

          <ul className="navbar-nav">
            <li></li>

            <li></li>

            <li className="navbar-item">
              <Link to="/" className="nav-link">
                <span style={{ fontSize: 35 }}>
                  WESTINE <br></br>
                  Grand Resort
                </span>
              </Link>
            </li>
            <li className="navbar-item" style={{ paddingTop: 30 }}>
              <Link to="/" className="nav-link">
                <span style={{ fontSize: 25 }}>HOME</span>
              </Link>
            </li>

            <br></br>

            <li className="navbar-item" style={{ paddingTop: 30 }}>
              <Link to="/Fdash" className="nav-link">
                <span style={{ fontSize: 25 }}>DINING</span>
              </Link>
            </li>

            <br></br>

            <li className="navbar-item" style={{ paddingTop: 30 }}>
              <Link to="/venues" className="nav-link">
                <span style={{ fontSize: 25 }}>EVENT</span>
              </Link>
            </li>

            <br></br>

            <li className="navbar-item" style={{ paddingTop: 30 }}>
              <Link to="/AddRoom" className="nav-link">
                <span style={{ fontSize: 25 }}>ROOM</span>
              </Link>
            </li>
            <li className="navbar-item" style={{ paddingTop: 30 }}>
              <Link to="/status" className="nav-link">
                <span style={{ fontSize: 25 }}>ROOM STATUS</span>
              </Link>
            </li>

            <br></br>

            <li className="navbar-item" style={{ paddingTop: 30 }}>
              <Link to="/getemployees" className="nav-link">
                <span style={{ fontSize: 25 }}>EMPLOYEE</span>
              </Link>
            </li>

            <br></br>


            <li className="navbar-item">
              <Link to="/viewexpense" className="nav-link">EXPENSE</Link>
 
            <li className="navbar-item" style={{paddingTop:30}}>

              <Link className="nav-link">
                <span style={{ fontSize: 25 }}>EXPENSE</span>
              </Link>
 
            </li>

            <br></br>

            <br></br>

            <li className="navbar-item" style={{ paddingTop: 30 }}>
              <Link to="/viewVenues" className="nav-link">
                <span style={{ fontSize: 25 }}>VIEW</span>
              </Link>
            </li>

            <br></br>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
