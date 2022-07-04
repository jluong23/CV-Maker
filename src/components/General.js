
// App.js

import React, { Component } from "react";

class General extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      edit: true,
    };
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    if(this.state.edit){
      // set state values to form inputs
      this.setState({
        name: e.target.name.value,
        email: e.target.email.value,
        phoneNumber: e.target.phone.value,
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
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" defaultValue={this.state.name}/>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" defaultValue={this.state.email}/>
        <label htmlFor="phone">Mobile Number: </label>
        <input type="text" name="phone" defaultValue={this.state.phoneNumber}/>
        <button type="submit">
            Save
        </button>
    </form>

    const savedForm =
    <form onSubmit={this.onSubmitTask}>
      <label> Name: {this.state.name} </label>
      <label> Email: {this.state.email} </label>
      <label> Mobile Number: {this.state.phoneNumber} </label>
      <button type="submit">
          Edit
      </button>
    </form>
    
    return(
      <div>
        <h2>Section 1 - General Information</h2>
        {this.state.edit ? editForm : savedForm}
      </div>
    );
  }
}

export default General;

