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
               <span style={
                {fontSize:30}
               }>WESTINE</span>  <br></br>
                Grand Resort
              </Link>
            </li>
            <li className="navbar-item" style={{paddingTop:20}}>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>

            <br></br>

            <li className="navbar-item" style={{paddingTop:20}}>
              <Link to="/card"className="nav-link">Buy</Link>
            </li>

            <br></br>

            <li className="navbar-item" style={{paddingTop:20}}>
              <Link to="/venues" className="nav-link">EVENT</Link>
            </li>

            <br></br>

            <li className="navbar-item" style={{paddingTop:20}}>
              <Link to="/AddRoom" className="nav-link">
                ROOM
              </Link>
            </li>
            <li className="navbar-item" style={{paddingTop:20}}>
              <Link to="/status" className="nav-link">
                ROOM STATUS
              </Link>
            </li>

            <br></br>

            <li className="navbar-item" style={{paddingTop:20}}>
              <Link to="/getemployees" className="nav-link">
                EMPLOYEE
              </Link>
            </li>

            <br></br>

            <li className="navbar-item" style={{paddingTop:20}}>
              <Link className="nav-link">EXPENSE</Link>
            </li>

            <br></br>

            <br></br>

            <li className="navbar-item" style={{paddingTop:20}}>
              <Link to="/viewVenues" className="nav-link">VIEW</Link>
            </li>

            <br></br>

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;