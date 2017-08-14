import React, { Component }from 'react';

import L from 'leaflet'
import 'leaflet-osm';
import $ from 'jquery';
import './leaflet.css'
import './map.css'

class Map extends Component {


  constructor() {
    super();
    this.state = {
      map: {},
    }
    this.map = {};
    this.moveendEvent = this.moveendEvent.bind(this);
    this.loadmap = this.loadmap.bind(this);
    this.addLayerSuc = this.addLayerSuc.bind(this);
    this.addLayerFail = this.addLayerFail.bind(this);
  }

  handleSubmit(e) {
   this.loadmap();
    e.preventDefault();
  }

  componentDidMount() {
    this.map = L.map('map2');
    this.loadmap();
    this.map.on('moveend', this.moveendEvent)
  }

  addLayerFail() {
    alert("Two many node in this area, choose an area with less node ")
  }

  moveendEvent(e) {
    console.log('< move start')
      // console.log('center:'+this.map.getCenter())
    var center = e.target.getCenter();
    var zoom = e.target.getZoom()
    console.log("zoom:" + zoom + "lat:" + center.lat + " " + "lng:" + center.lng)
    this.setState({
      map: {
        zoom: zoom,
        lat: center.lat,
        lon: center.lng,
      }
    }, function() {
      //pass state to paire ent state
      this.props.addMap(this.state.map)
    })

  }

  componentDidUpdate() {
    this.refs.lat.value = this.props.map.lat;
    this.refs.lon.value = this.props.map.lon;
    this.refs.zoom.value = this.props.map.zoom;
    console.log("sate update ")
  }

  addLayerSuc(xml) {
    new L.OSM.DataLayer(xml).addTo(this.map);
  }

  loadmap() {
    this.map.setView([this.props.map.lat, this.props.map.lon], this.props.map
      .zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map);
    console.log("loading map")
    let bounds = this.map.getBounds();
    let left = this.map.getBounds()._southWest.lng //sourWest lng
    let right = this.map.getBounds()._northEast.lng; //northEast lng
    let bottom = this.map.getBounds()._southWest.lat; // sourWest lat
    let top = this.map.getBounds()._northEast.lat; // northWest lat
    let url = "http://www.openstreetmap.org/api/0.6/map?bbox=" + left + "," +
      bottom + "," + right + "," + top;
    console.log(url);
    $.ajax({
      url: url,
      dataType: "xml",
      success: this.addLayerSuc,
      error: this.addLayerFail
    });
  }



  render() {
    return (

      < div >
      < div id = 'map2'
      className = 'mymap' > < /div> < h3 > Add project < /h3 >
      < form onSubmit = {
        this.handleSubmit.bind(this)
      } >
      < div >
      < label > Zoom < /label> < input type = "text"
      ref = "zoom" / >
      < /div>

      < div >
      < label > lat < /label> < input type = "text"
      ref = "lat" / >
      < /div>

      < div >
      < label > lon < /label> < input type = "text"
      ref = "lon" / >
      < /div> < input type = "submit"
      value = "Submit" / >
      < /form> < /div >
    );
  }
}

export default Map;
