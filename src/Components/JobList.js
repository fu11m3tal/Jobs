import React from 'react';
import JobListEntry from './JobListEntry.js';

function Joblist(props) {
  var {listings} = props;
  var a = listings.filter((value, index) => (index < 10));
  var b = listings.filter((value, index) => (index >= 10 && index < 20));
  var c = listings.filter((value, index) => (index >= 20 && index < 30));
  var d = listings.filter((value, index) => (index >= 30 && index < 40));
  var e = listings.filter((value, index) => (index >= 40 && index < 50));
  var methods = { handleURL: props.handleURL }
  return (
    <div className="row">
      <div className="column">
        {a.map((entry, index) => (
          <JobListEntry key={index} entry={entry} methods={methods}/>
        ))}
      </div>
      <div className="column">
        {b.map((entry, index) => (
          <JobListEntry key={index} entry={entry} methods={methods}/>
        ))}
      </div>
      <div className="column">
        {c.map((entry, index) => (
          <JobListEntry key={index} entry={entry} methods={methods}/>
        ))}
      </div>
      <div className="column">
        {d.map((entry, index) => (
          <JobListEntry key={index} entry={entry} methods={methods}/>
        ))}
      </div>
      <div className="column">
        {e.map((entry, index) => (
          <JobListEntry key={index} entry={entry} methods={methods}/>
        ))}
      </div>
    </div>
  );
}

export default Joblist;
