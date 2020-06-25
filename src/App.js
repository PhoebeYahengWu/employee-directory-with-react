import React, { Component } from 'react';
import './App.css';
import API from './utils/API'
import Search from './components/Search/Search';
import ResultList from './components/ResultList/ResultList';


class App extends Component {

  state = {
    allUsers: [],
    filteredResults: [],
    searchTerm: ""
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
    const newFilteredUsers = this.state.allUsers.filter(user => user.name.first.indexOf(searchTerm)>=0 || user.name.last.indexOf(searchTerm)>=0 || user.email.indexOf(searchTerm)>=0 || user.phone.indexOf(searchTerm)>=0 || user.location.city.indexOf(searchTerm)>=0 || user.location.country.indexOf(searchTerm)>=0);
    this.setState({filteredResults: newFilteredUsers})
  }

  handleFormSubmit = e => {
    const searchTerm = e.target.value;
    const newFilteredUsers = this.state.allUsers.filter(user => user.name.first.indexOf(searchTerm)>=0);
    this.setState({filteredResults: newFilteredUsers})
  }

  render() {
    return (
      <>
      <Search 
      handleChange={this.handleChange}
      searchTerm={this.state.searchTerm}
      handleFormSubmit={this.handleFormSubmit}
      />
      <ResultList users={this.state.filteredResults}/>
      </>
    );
  }

}

export default App;
