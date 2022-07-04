
// App.js

import React, { Component } from "react";

class Practical extends Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div>
        <h2>Section 3 - Practical Experience</h2>
        <form>
          <label htmlFor="companyName">Company Name: </label>
          <input type="text" id="companyName"/>
          <label htmlFor="positionTitle">Position Title: </label>
          <input type="text" id="positionTitle"/>
          <label htmlFor="dateFrom">Date Started: </label>
          <input type="date" id="dateFrom"/>
          <label htmlFor="dateTo">Date Ended: </label>
          <input type="date" id="dateTo"/>
          <button type="submit">
              Save
          </button>
        </form>
      </div>
    );
  }
}

export default Practical;

