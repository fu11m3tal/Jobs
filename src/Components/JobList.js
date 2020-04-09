import React from 'react';
import JobListEntry from './JobListEntry.js';

function Joblist(props) {
  var {listings} = props || [];
  var a = listings.filter((value, index) => (index < 10));
  var b = listings.filter((value, index) => (index >= 10 && index < 20));
  var c = listings.filter((value, index) => (index >= 20 && index < 30));
  var d = listings.filter((value, index) => (index >= 30 && index < 40));
  var e = listings.filter((value, index) => (index >= 40 && index < 50));
  var columns = [a, b, c, d, e];
  var methods = { handleURL: props.handleURL }
  return (
    <div className="row">
      {columns.map((column, index) => (
        <div key={index} className="column">
          {column.map((entry, index) => (
            <JobListEntry key={index} entry={entry} methods={methods}/>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Joblist;
