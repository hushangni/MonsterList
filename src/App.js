import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // need super to use state
    this.state = {
      monsters: [
        {
          name: 'Frank',
          id: '1'
        },
        {
          name: "Drac",
          id: '2'
        },
        {
          name: 'Zombie',
          id: '3'
        }
      ]
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then( res => this.setState({monsters: res}))
  }

  render(){
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}>          
          
        </CardList>
      </div>
    );
  }
}

export default App;
