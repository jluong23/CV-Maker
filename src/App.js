// App.js

import React, { Component } from "react";
import Education from "./components/Education";
import General from "./components/General";
import Practical from "./components/Practical";
import './app.css';


class App extends Component {
  constructor(){
    super();
  }


  render() {
    return (
      <div>
        <h1>CV Maker</h1>
        <General></General>
        <Education></Education>
        <Practical></Practical>
      </div>
    );
  }
}

export default App;
