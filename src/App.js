import { Component } from 'react';

import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26,
      position: ''
    }
    this.nextYear = this.nextYear.bind(this)
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }
  
  render () {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
    return(
      <>
        <button onClick={this.nextYear}>+++</button>
        <h1>My name is {name}, surname - {surname}, 
            age - {years}, 
            position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Enter the job title</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </>
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