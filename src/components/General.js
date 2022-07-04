
// App.js

import React, { Component } from "react";

class General extends Component {
  constructor(){
    super();
  }

  onSubmitTask(e){
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <h2>Section 1 - General Information</h2>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name"/>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email"/>
          <label htmlFor="phone">Mobile Number: </label>
          <input type="text" id="phone"/>
          <button type="submit">
              Save
          </button>
        </form>
      </div>
    );
  }
}

export default General;

