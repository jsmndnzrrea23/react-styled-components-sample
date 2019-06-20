import React, { Component } from 'react';
import styled from 'styled-components'
import _ from 'lodash'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {     
      data: null, 
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render(){
    const { data } = this.state
    const newData = _.take(data, 4);

    return (
      <Wrapper>
        <Section>
          <Title>Button</Title>
          <Spacer space={20}/> 
          <ButtonGroup>
            <Button>Default Button</Button>
            <Spacer space={10} />
            <Button primary>Primary Button</Button>
          </ButtonGroup>
        </Section>
        <Section>
          <Title>Table</Title>
          <Spacer space={20}/> 
          <Table>
            <TableRow>
              <TableColumn>
                Name
              </TableColumn>              
              <TableColumn>
                Age
              </TableColumn>                            
            </TableRow>
            <TableRow>
              <TableColumn>
                Hannah Cruz
              </TableColumn>              
              <TableColumn>
                23 yrs. old
              </TableColumn>                            
            </TableRow>            
            <TableRow>
              <TableColumn>
                Skylar Gray
              </TableColumn>              
              <TableColumn>
                2 yrs. old
              </TableColumn>                            
            </TableRow>                        
          </Table>
        </Section>        
        <Section>
          <Title>Fetch sample data from jsonplaceholder</Title>
          <Spacer space={20}/> 
          {newData.map(dd => {
            return (
              <Text key={dd.id}>{dd.id} {dd.body}</Text>
            )})
          }
        </Section>
      </Wrapper>    
    )
  }
}

const Wrapper = styled.div`
  background: papayawhip;
  min-height: calc(100vh - 4em);
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Section = styled.section`
  margin: 1em;
  padding: 1em;
  width: calc(100% - 4em);
  background-color: #00000030;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.div`
  font-size: 2em;
  color: #fff;
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
//Table custom
const Table = styled.div`
  display: flex;
  flex-direction: column;
`
const TableRow = styled.div`
  display: flex;
  &:nth-child(1){
    background-color: #00000020;
  }
`
const TableColumn = styled.div`
  display: flex;
  padding: 5px;
  border: 1px solid #00000060;
  min-width: 200px;
`
const Text = styled.p`
  font-size: 0.9em;
`

export default App;
