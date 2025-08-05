import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white px-4">
      <Link className="navbar-brand" to="/">
        Recipe Book
      </Link>
    </nav>
  );
}

export default Navbar;
