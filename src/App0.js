import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects:[]
    }
  }

//every time component is re rendered
  componentWillMount()
  {
    this.setState(
      {
        projects:[
          {
            zoom:20,
            lat:37.39,
            lon:-122.03
          }
        ]
      }
    )
  }

  handleAddProject(project)
  {
    console.log(project);
    let projects = [];
    projects.push(project);
    this.setState({projects:projects})
  }
  render() {
    return (
      <div className="App">

      <AddProject addProject={this.handleAddProject.bind(this)} projects={this.state.projects}/>
      <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
