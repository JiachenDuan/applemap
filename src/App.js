import React, {Component}from 'react';
import Projects from './Components/Projects';
import Map from './Components/Map';
import {hashHistory} from 'react-router';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      map: {}
    }
  }

  //every time component is re rendered
  componentWillMount() {

    this.setState({
        map: {
          zoom: 18,
          lat: 37.39,
          lon: -122.03
        }

      })
      // const path = `/zoom/${this.projects[0].zoom}/lat/${this.projects[0].lat}/lon/${this.projects[0].lon}`
      // hashHistory.push(path);
      // console.log(path)
  }

  handleAddaddMap(map) {
    console.log(map);

    this.setState({
      map: map
    })
  }
  render() {
    return ( < div className = "App" >

      < Map addMap = {this.handleAddaddMap.bind(this)}
      map = {
        this.state.map
      }
      />

      < /div>
    );
  }
}

export default App;
