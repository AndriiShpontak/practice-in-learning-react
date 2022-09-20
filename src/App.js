import React,{ Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

import './App.css';

const EmpItem = styled.div`
  padding: 20 px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${props => props.active ? 'orange' : 'black'};
  }
  input {
    display: block;
    margin-top: 10px;
  }
`;

const Header = styled.h2`
  font-size: 20px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0,0,0, .2);
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

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
      <EmpItem active>
        <Button onClick={this.nextYear}>+++</Button>
        <Header>My name is {name}, surname - {surname}, 
            age - {years}, 
            position - {position}</Header>
        <a href={link}>My profile</a>
        <form>
          <span>Enter the job title</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </EmpItem>
    )
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

const DunamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(child, {className: 'shadow p-3 m-3 border'})
            })
        }
    </div>
  )
}

function App() {
  return (
    <Wrapper>
      

      <BootstrapTest
          left = {
            <DunamicGreating color={'primary'}>
              <h2>This well was hard</h2>
              <h2>Hello world!</h2>
             </DunamicGreating>
          }

          right = {
            <DunamicGreating color={'primary'}>
              <h2>Rigth!</h2>
             </DunamicGreating>
          }
      />

        <WhoAmI name='Andrii' surname="Shpontak" link="https://www.facebook.com/andrii.shpontak"/>
        <WhoAmI name='Arthur' surname="Smitt" link="https://www.instagram.com"/>
    </Wrapper>
  );
}

export default App;