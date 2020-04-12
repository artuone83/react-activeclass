import React, { Component, createRef } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
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
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Click element to add active class',
      active: null
    };
  }

  handleClick = (id)=> ()=> {
    const activeElement = textData.find((item)=> item.id === id )

    activeElement && this.setState({
      active: id
    })
    console.log(activeElement);
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        {textData.map(({id, text})=> {
          return <p 
            style={ id === this.state.active ? {background: 'hotpink', color: 'white'} : {}} key={id}
            onClick={this.handleClick(id)}>
            { id === this.state.active ? text : 'Activate me, please'}
          </p>
        })}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
