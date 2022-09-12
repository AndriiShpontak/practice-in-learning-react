import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26,
      text: '+++'
    }
  }

  nexYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }
  
  render () {
    const {name, surname, link} = this.props;
    return(
      <div>
        <button onClick={this.nexYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
        <WhoAmI name='Andrii' surname="Shpontak" link="https://www.facebook.com/andrii.shpontak"/>
        <WhoAmI name='Arthur' surname="Smitt" link="https://www.instagram.com"/>
    </div>
  );
}

export default App;