import React, { Component } from 'react';
class ProjectItem extends Component {


  render() {

    return (
      <li className="Project">
       Zoom: {this.props.project.zoom} Lat: {this.props.project.lat} Lon: {this.props.project.lon}
      </li>
    );
  }
}

export default ProjectItem;
