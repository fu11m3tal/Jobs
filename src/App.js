import React from 'react';
import axios from 'axios';
import JobList from './Components/JobList.js';
// import data from './data.js';
import Cards from './Components/Card.js';
import PrimarySearchAppBar from './Components/Bar/AppBar.js';
import domtoimage from 'dom-to-image';
// import { arrowFunctionExpression } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      filter: [],
      saved: [],
      data: [],
      search: "search...",
      location: "location...",
    }
    this.handleURL = this.handleURL.bind(this);
    this.diagnose = this.diagnose.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.getListings = this.getListings.bind(this);
    this.filterListings = this.filterListings.bind(this);
    this.screenshot = this.screenshot.bind(this);
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

  screenshot() {
    console.log("Progress Snapshot Generated", document)
    domtoimage.toJpeg(document.getElementById('app'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        var date = Date();
        var path = '/Users/syoh/Desktop/Jobs/Development/Screenshots';
        link.download = `Snap: ${date}.jpeg`;
        link.href = dataUrl;
        link.click();
    });
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

  saveListing() {
    //Post to database
  }
  
  componentDidMount() {
    this.getListings();
  }
  componentDidUpdate() {

  }
  render() {
    return (
      <div className="Job">
        <button onClick={this.screenshot} >SCREEN SHOT</button>
        <img className="logo" src="logo.jpg" ></img>
        <PrimarySearchAppBar handleSearchInput={this.handleSearchInput} search={this.state.search} location={this.state.location}/>
        <JobList listings={this.state.listings} handleURL={this.handleURL}/>    
      </div>
    )
  }
}




export default App;
