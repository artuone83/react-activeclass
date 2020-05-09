import React, { forwardRef } from "react";

const style = {
  nav: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "AliceBlue",
    padding: "35px",
    color: "DarkOrange"
  },
  list: {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "flex-end"
  },
  listItem: {
    listStyleType: "none",
    marginRight: "20px",
    textTransform: "uppercase",
    cursor: "pointer"
  }
};

const activeStyle = {
  ...style.listItem,
  color: "black",
  borderBottom: "1px solid"
};

const Navigation = forwardRef(
  ({ currentOption, handleNavOptionClick }, ref) => {
    const { nav, list, listItem } = style;

    return (
      <nav ref={ref} style={nav}>
        <ul style={list}>
          <li
            style={currentOption === "home" ? activeStyle : listItem}
            data-name="home"
            onClick={handleNavOptionClick}
          >
            Home
          </li>
          <li
            style={currentOption === "about" ? activeStyle : listItem}
            data-name="about"
            onClick={handleNavOptionClick}
          >
            About
          </li>
          <li
            style={currentOption === "contact" ? activeStyle : listItem}
            data-name="contact"
            onClick={handleNavOptionClick}
          >
            Contact
          </li>
        </ul>
      </nav>
    );
  }
);

export default Navigation;
