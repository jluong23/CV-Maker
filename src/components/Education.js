
// App.js

import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor(){
    super();
    this.state = {
      experience: {
        id: uniqid(),
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
      },
      edit: false,
      experiences: [],
    };
  }

  setExperiences = (newExperiences) => {
    this.setState({
      experiences: newExperiences,
    })
  }

  onAddExperience = (e) => {
    let newExp = {
      id: uniqid(),
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
    }
    this.setState({
      experiences: this.state.experiences.concat(newExp)
    })
  }

  onEditExperience = (e, id) => {
    e.preventDefault();
    if(this.state.edit){
      //save results of edit form in state
      this.setState({
        experience: {
          schoolName: e.target.schoolName.value,
          titleOfStudy: e.target.titleOfStudy.value,
          dateOfStudy: e.target.dateOfStudy.value,
        },
      });
      debugger;
      var newExperiences = this.state.experiences.slice();
      let index = newExperiences.findIndex((exp) => exp.id === id);
      newExperiences[index] = this.state.experience;
      this.setExperiences(newExperiences);
    }
    // flip boolean of edit mode state
    this.setState({
      edit: !this.state.edit,
    });
  }

  // a generic edit form for the current experience in state
  createEditForm = () => {
    return (
      <form onSubmit= {(e) => {this.onEditExperience(e, this.state.experience.id)}}>
        <label htmlFor="schoolName">School Name: </label>
        <input type="text" name="schoolName" defaultValue={this.state.experience.schoolName}/>
        <label htmlFor="titleOfStudy">Title of Study: </label>
        <input type="text" name="titleOfStudy" defaultValue={this.state.experience.titleOfStudy}/>
        <label htmlFor="dateOfStudy">Date of Study: </label>
        <input type="date" name="dateOfStudy" defaultValue={this.state.experience.dateOfStudy}/>
        <button type="submit">
            Save
        </button>
      </form>
    )
  }

  render() {
    // map over all experiences in array
    const allExperiences = this.state.experiences.map((experience) => {
      return(
      <form key={experience.id} onSubmit = {(e) => {this.onEditExperience(e, experience.id)}} >
        <label> School Name: {experience.schoolName} </label>
        <label> Title of Study: {experience.titleOfStudy} </label>
        <label> Date of Study: {experience.dateOfStudy} </label>
        <button type="submit">
            Edit
        </button>
      </form>
      )
    })

    const overview = (
      <div>
        {allExperiences}
        <button onClick={(e) => {this.onAddExperience(e)}}>
        Add New
        </button>
      </div>
    )
    

    return(
      <div>
        <h2>Section 2 - Education Experience</h2>
        {this.state.edit ? this.createEditForm() : overview}
      </div>
    );
  }
}

export default Education;

