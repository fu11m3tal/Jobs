import React from 'react';
import axios from 'axios';
import JobList from './Components/JobList.js';
import data from './data.js';
import Cards from './Components/Card.js';
import PrimarySearchAppBar from './Components/Bar.js'
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
        console.log(response.data.length)
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
        <img className="logo" src="logo.jpg" ></img>
        <PrimarySearchAppBar handleSearchInput={this.handleSearchInput} search={this.state.search}/>
        <JobList listings={this.state.listings} handleURL={this.handleURL}/>    
      </div>
    )
  }
}




export default App;
