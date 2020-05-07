import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Navigation from './Navigation';
import './style.css';

const textData = [
  {
    id: 1,
    text: 'Yes! I\'m active 💪'
  },
  {
    id: 2,
    text: 'My turn now 🤠'
  },
  {
    id: 3,
    text: 'Thanks for activating 😘'
  }
];

const activeStyle = {
  background: 'hotpink',
  color: 'white'
};

const App = ()=> {
  const [name, setName] = useState('Click element to add active class');
  const [activeId, setActiveId] = useState(null);
  const [navOption, setNavOption] = useState('');

  const handleClick = (id)=> ()=> {
    const activeElement = textData.find((item)=> item.id === id )

    activeElement && setActiveId(id)
    console.log(activeElement.id);
  }

  const handleNavClick = (event) => {
    const getName = event.target.getAttribute('data-name'); 
    setNavOption(getName);
  }

    return (
      <div>
        <Navigation currentOption={navOption} handleNavClick={handleNavClick} />
        <Hello name={name} />
        {textData.map(({id, text})=> {
          return <p 
            style={ id === activeId ? activeStyle : {}} key={id}
            onClick={handleClick(id)}>
            { id === activeId ? text : 'Activate me, please'}
          </p>
        })}
      </div>
    );
}

render(<App />, document.getElementById('root'));
