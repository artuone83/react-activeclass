import React, { forwardRef } from "react";

const styles = {
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
  ...styles.listItem,
  color: "black",
  borderBottom: "1px solid"
};

const navigationOptions = [
  {
    id: 1,
    option: "home"
  },
  {
    id: 2,
    option: "about"
  },
  {
    id: 3,
    option: "contact"
  }
];

const Navigation = forwardRef(
  ({ currentOption, handleNavOptionClick }, ref) => {
    const { nav, list, listItem } = styles;

    return (
      <nav ref={ref} style={nav}>
        <ul style={list}>
          {navigationOptions &&
            navigationOptions.map(({ id, option }) => {
              return (
                <li
                  key={name}
                  style={currentOption === option ? activeStyle : listItem}
                  data-name={option}
                  onClick={handleNavOptionClick}
                >
                  {option}
                </li>
              );
            })}
        </ul>
      </nav>
    );
  }
);

export default Navigation;
