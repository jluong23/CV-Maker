
// App.js

import React, { Component } from "react";

class Practical extends Component {
  constructor(){
    super();
    this.state = {
      companyName: "",
      positionTitle: "",
      dateStarted: "",
      dateEnded: "",
      edit: true,
    };
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    if(this.state.edit){
      // set state values to form inputs
      this.setState({
        companyName: e.target.companyName.value,
        positionTitle: e.target.positionTitle.value,
        dateStarted: e.target.dateStarted.value,
        dateEnded: e.target.dateEnded.value,
        edit: !this.state.edit,
      });
    }else{
      // go back to edit mode
      this.setState({
        edit: !this.state.edit,
      });
    }
    console.log(this.state);
  }

  render() {
    const editForm =         
      <form onSubmit={this.onSubmitTask}>
        <label htmlFor="companyName">Company Name: </label>
        <input type="text" name="companyName" defaultValue={this.state.companyName}/>
        <label htmlFor="positionTitle">Position Title: </label>
        <input type="text" name="positionTitle" defaultValue={this.state.positionTitle}/>
        <label htmlFor="dateStarted">Date Started: </label>
        <input type="date" name="dateStarted" defaultValue={this.state.dateStarted}/>
        <label htmlFor="dateEnded">Date Ended: </label>
        <input type="date" name="dateEnded" defaultValue={this.state.dateEnded}/>
        <button type="submit">
            Save
        </button>
    </form>

    const savedForm = 
      <form onSubmit={this.onSubmitTask}>
        <label htmlFor="companyName">Company Name: {this.state.companyName}</label>
        <label htmlFor="positionTitle">Position Title: {this.state.positionTitle}</label>
        <label htmlFor="dateStarted">Date Started: {this.state.dateStarted}</label>
        <label htmlFor="dateEnded">Date Ended: {this.state.dateEnded}</label>
        <button type="submit">
            Edit
        </button>
      </form>

    return(
      <div>
        <h2>Section 3 - Practical Experience</h2>
        {this.state.edit ? editForm : savedForm}

      </div>
    );
  }
}

export default Practical;

