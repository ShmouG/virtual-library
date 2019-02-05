import React from "react";

function Nav() {
  return (
    <nav style={{background: "rgb(26, 26, 27)", borderStyle: "solid", borderColor: "purple"}} className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Address List
      </a>
    </nav>
  );
}

export default Nav;
