
// App.js

import React, { Component } from "react";

class Education extends Component {
  constructor(){
    super();
    this.state = {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
      edit: true,
    };
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    if(this.state.edit){
      // set state values to form inputs
      this.setState({
        schoolName: e.target.schoolName.value,
        titleOfStudy: e.target.titleOfStudy.value,
        dateOfStudy: e.target.dateOfStudy.value,
        edit: !this.state.edit,
      });
    }else{
      // go back to edit mode
      this.setState({
        edit: !this.state.edit,
      });
    }
  }

  render() {
    const editForm =   
    <form onSubmit={this.onSubmitTask}>
      <label htmlFor="schoolName">School Name: </label>
      <input type="text" name="schoolName" defaultValue={this.state.schoolName}/>
      <label htmlFor="titleOfStudy">Title of Study: </label>
      <input type="text" name="titleOfStudy" defaultValue={this.state.titleOfStudy}/>
      <label htmlFor="dateOfStudy">Date of Study: </label>
      <input type="date" name="dateOfStudy" defaultValue={this.state.dateOfStudy}/>
      <button type="submit">
          Save
      </button>
    </form>

    const savedForm =
    <form onSubmit={this.onSubmitTask}>
      <label> School Name: {this.state.schoolName} </label>
      <label> Title of Study: {this.state.titleOfStudy} </label>
      <label> Date of Study: {this.state.dateOfStudy} </label>
      <button type="submit">
          Edit
      </button>
    </form>

    return(
      <div>
        <h2>Section 2 - Education Experience</h2>
        {this.state.edit ? editForm : savedForm}
      </div>
    );
  }
}

export default Education;

