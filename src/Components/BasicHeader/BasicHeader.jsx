import React from "react";
import { Link } from "react-router-dom";

import "./BasicHeader.style.scss";
const BasicHeader = props => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="header-logo"></div>
        <Link to="/projects">Home</Link>
      </div>
    </React.Fragment>
  );
};

export default BasicHeader;
