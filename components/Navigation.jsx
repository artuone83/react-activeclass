import React, { forwardRef } from 'react';

const style = {
  nav: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'AliceBlue',
    padding: '35px',
    color: 'DarkOrange'
  },
  list: {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  listItem: {
    listStyleType: 'none',
    marginRight: '20px',
    textTransform: 'uppercase',
    cursor: 'pointer',
  }
};

const activeStyle = {
  ...style.listItem,
  color: 'black',
  borderBottom: '1px solid'
}

const Navigation = forwardRef(({currentOption, handleNavOptionClick}, ref) => {
  return <nav 
    ref={ref}
    style={style.nav}>
    <ul style={style.list}>
      <li 
        style={currentOption === 'home'
          ? activeStyle
          : style.listItem}
        data-name="home"
        onClick={handleNavOptionClick}>Home</li>
      <li
        style={currentOption === 'about'
          ? activeStyle
          : style.listItem}
        data-name="about"
        onClick={handleNavOptionClick}>About</li>
      <li 
        style={currentOption === 'contact'
          ? activeStyle
          : style.listItem}
        data-name="contact"
        onClick={handleNavOptionClick}>Contact</li>
    </ul>
  </nav>
});

export default Navigation;