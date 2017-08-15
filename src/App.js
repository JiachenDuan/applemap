import React, {Component} from 'react';
import Map from './Components/Map';
import {hashHistory} from 'react-router';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {
        zoom: this.props.params.zoom===undefined?18:this.props.params.zoom,
        lat: this.props.params.lat===undefined?37.39:this.props.params.lat,
        lon: this.props.params.lng===undefined?-122.03:this.props.params.lng
      }
    }
  }

  //every time component is re rendered
  componentWillMount() {
    this.addHashHistory()
  }

  componentWillReceiveProps(nextProps) {
    const zoom = nextProps.params.zoom;
    const lat = nextProps.params.lat;
    const lon = nextProps.params.lng;
    this.setState({
      map: {
        zoom: zoom,
        lat: lat,
        lon: lon
      }
    }, function() {
      console.log(this.state)
    })
  }
  addHashHistory()
  {
    const path =
      `/zoom/${this.state.map.zoom}/lat/${this.state.map.lat}/lng/${this.state.map.lon}`
    hashHistory.push(path);
    console.log(path)
  }
  handleAddaddMap(map) {
    console.log(map);

    this.setState({
      map: map
    }, function() {
      this.addHashHistory()
    })
  }
  render() {
    return ( < div className = "App" >
      < Map addMap = {
        this.handleAddaddMap.bind(this)
      }
      map = {
        this.state.map
      }
      /> < /div>
    );
  }
}

export default App;
