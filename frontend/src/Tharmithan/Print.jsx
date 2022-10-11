import React, { Component } from "react";

import Button from "react-bootstrap/Button";



class ReportPrint extends Component {

  render() {

    return (

      <div>

        <Button

          variant="dark"

          style={{ width: "220px" }}

          onClick={() => window.print()}

        >

          Print Activity Log

        </Button>

      </div>

    );

  }

}



export default ReportPrint;