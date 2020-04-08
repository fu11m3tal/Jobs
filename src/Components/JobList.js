import React from 'react';
import JobListEntry from './JobListEntry.js';

function Joblist(props) {
  var {listings} = props
  var methods = { handleURL: props.handleURL }
  return (
    <div className="list">
      <h1>Job Listings</h1>
      {listings.map((entry, index) => (
        <JobListEntry key={index} entry={entry} methods={methods}/>
      ))}
    </div>
  );
}

export default Joblist;
