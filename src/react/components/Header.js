import React from "react";

function Header(location) {
  console.log(location);

  if (!location) {
    return false;
  }

  return <p>{location}</p>;
}

export default Header;
