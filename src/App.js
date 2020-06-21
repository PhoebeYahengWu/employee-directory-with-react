import React, { Component } from 'react';
import './App.css';
import API from './utils/API'
import Search from './components/Search/Search';
import ResultList from './components/ResultList/ResultList';


class App extends Component {

  state = {
    allUsers: [],
    filteredResults: []
  }


  componentDidMount() {
    API.getData()
    .then(users => {
      this.setState({
        allUsers: users.data.results,
        filteredResults: users.data.results
      })
    })
  }

  handleChange = e => {
    const searchTerm = e.target.value;
    const newFilteredUsers = this.state.allUsers.filter(user => user.name.first.indexOf(searchTerm)>=0);
    this.setState({filteredResults: newFilteredUsers})
  }

  render() {
    return (
      <>
      <Search handleChange={this.handleChange}/>
      <ResultList users={this.state.filteredResults}/>
      </>
    );
  }

}

export default App;
