import React from 'react';
import axios from 'axios';
// import './App.css';
import SearchBar from './Components/SearchBar.js';
import JobList from './Components/JobList.js';
import data from './data.js';
import Cards from './Components/Card.js'
// import { arrowFunctionExpression } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      filter: [],
      data: [],
      search: "",
    }
    this.handleURL = this.handleURL.bind(this);
    this.diagnose = this.diagnose.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.getListings = this.getListings.bind(this);
    this.filterListings = this.filterListings.bind(this);
  }
  handleURL(e) {
    console.log(e.target.id)
    window.open(e.target.id, "_blank")
  }
  diagnose(name, e) {
    console.log("Function Executed");
    console.log("Name: ", name);
    console.log("Arguments: ");
    console.log("Event Target: ", e.target);
    console.log("State:", this.state)
  }
  handleSearchInput(e) {
    this.diagnose("handleSearchInput", e)
    var search = e.target.value;
    this.setState({search: search})
  }
  handleSearchButton(e) {
    this.diagnose("handleSearchButton", e)
    var search = this.state.search;
  }
  getListings(e) {
    axios.get('api/listings')
      .then((response) => {
        this.setState({listings: response.data})
      })
      .then(() => {
        this.filterListings(entry => (
          entry.title === "Full Stack developer"
        ))
      })
      .catch(error => {
        console.log(error);
      })
  }
  filterListings(cb) {
    var listings = this.state.listings;
    this.setState({filter: listings.filter(cb)})
  }
  componentDidMount() {
    this.getListings();
  }
  render() {
    return (
      <div className="Job">
        <h1>Crack into Software Engineering!</h1>
        <SearchBar handleSearchInput={this.handleSearchInput} search={this.state.search}/>
        <JobList listings={this.state.listings} handleURL={this.handleURL}/>    
      </div>
    )
  }
}




export default App;
