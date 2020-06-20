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
      console.log(users)
    })
  }

  
  render() {
    return (
      <>
      <Search />
      <ResultList />
      </>
    );
  }

}

export default App;
