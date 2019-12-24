import React from 'react';

import {CardList} from './components/card-list/card-list.component'

import './App.css';

import { SearchBox } from './components/search-box/search-box.component';


class App extends React.Component {

  // To access the states, 
  // We have to create constructor
  constructor() {

    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  }


  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users') 
    /* Api request in the URL which returns a promise */
      .then(response => response.json())
      .then(users => this.setState( {monsters: users} ))

  }


  // Here Arrow function automatically bind "this" to the place
  // where the arrow function is defined
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {

    const { monsters, searchField} = this.state // Obeject Destructuring
    
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    // Convert it into lowercase and then search if the string includes anything like searchField
    
    return (
      <div className="App">
        <h1>Monster's</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        ></SearchBox>

        <CardList 
          name='Saif' 
          monsters = {filteredMonsters}>
        </CardList>

      </div>
    );

  }


}

export default App;
