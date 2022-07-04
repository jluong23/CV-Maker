
// App.js

import React, { Component } from "react";

class Education extends Component {
  constructor(){
    super();
  }

  render() {
    return(
      <div>
        <h2>Section 2 - Education Experience</h2>
        <form>
          <label htmlFor="schoolName">School Name: </label>
          <input type="text" id="schoolName"/>
          <label htmlFor="titleOfStudy">Title of Study: </label>
          <input type="text" id="titleOfStudy"/>
          <label htmlFor="dateOfStudy">Date of Study: </label>
          <input type="date" id="dateOfStudy"/>
          <button type="submit">
              Save
          </button>
        </form>
      </div>
    );
  }
}

export default Education;

