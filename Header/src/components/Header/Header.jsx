import React from "react";
import './Header.scss'
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="left">Logo</div>
          <div className="right">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Products</a>
            <a href="">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
