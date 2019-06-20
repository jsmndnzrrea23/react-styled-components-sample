import React, { Component } from 'react';
import styled from 'styled-components'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {      
    }
    this.redirect = this.redirect.bind(this)
  }

  redirect(){
    window.open('https://www.styled-components.com/docs/basics');
  }

  render(){
    return (
      <Wrapper>
        <Title>React using styled-components</Title>      
        <ButtonGroup>
          <Button onClick={()=> this.redirect()}>Get documentation</Button>
        </ButtonGroup>
      </Wrapper>    
    )
  }
}

const Wrapper = styled.div`
  background: papayawhip;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.p`
  font-size: 2em;
  color: #00000080;
`
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
const ButtonGroup = styled.div`
  display: flex;
`
const Spacer = styled.div`
  width: ${props => props.space + 'px'};
  height: ${props => props.space + 'px'};
`

export default App;
