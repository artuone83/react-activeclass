import React from 'react';

const Navigation = ({currentOption, handleNavClick})=> {
  return <nav>
    <ul>
      <li style={currentOption === 'home' ? {color: 'green'} : {}} data-name="home" onClick={handleNavClick}>Home</li>
      <li style={currentOption === 'about' ? {color: 'green'} : {}} data-name="about" onClick={handleNavClick}>About</li>
      <li style={currentOption === 'contact' ? {color: 'green'} : {}} data-name="contact" onClick={handleNavClick}>Contact</li>
      <li style={currentOption === 'more' ? {color: 'green'} : {}} data-name="more" onClick={handleNavClick}>More</li>
    </ul>
  </nav>
}

export default Navigation;