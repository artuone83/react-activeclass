import React from 'react';

const Navigation = ({currentOption, handleNavOptionClick})=> {
  return <nav>
    <ul>
      <li 
        style={currentOption === 'home' ? {color: 'green'} : {}}
        data-name="home"
        onClick={handleNavOptionClick}>Home</li>
      <li
        style={currentOption === 'about' ? {color: 'green'} : {}}
        data-name="about"
        onClick={handleNavOptionClick}>About</li>
      <li 
        style={currentOption === 'contact' ? {color: 'green'} : {}}
        data-name="contact"
        onClick={handleNavOptionClick}>Contact</li>
    </ul>
  </nav>
}

export default Navigation;