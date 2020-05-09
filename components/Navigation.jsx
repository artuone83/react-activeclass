import React from 'react';

const style = {
  nav: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'grey',
    padding: '35px',
    color: 'white'
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
    cursor: 'pointer'
  }
};

const Navigation = React.forwardRef(({currentOption, handleNavOptionClick}, ref)=> {
  return <nav 
    ref={ref}
    style={style.nav}>
    <ul style={style.list}>
      <li 
        style={currentOption === 'home' ? {...style.listItem, color: 'aquamarine'} : style.listItem}
        data-name="home"
        onClick={handleNavOptionClick}>Home</li>
      <li
        style={currentOption === 'about' ? {...style.listItem, color: 'aquamarine'} : style.listItem}
        data-name="about"
        onClick={handleNavOptionClick}>About</li>
      <li 
        style={currentOption === 'contact' ? {...style.listItem, color: 'aquamarine'} : style.listItem}
        data-name="contact"
        onClick={handleNavOptionClick}>Contact</li>
    </ul>
  </nav>
});

export default Navigation;