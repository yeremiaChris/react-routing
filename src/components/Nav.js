import React, { useState, useEffect } from "react";

function Nav() {
  const style = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/about" style={style}>
          <li>About</li>
        </Link>
        <Link to="shop" style={style}>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
