import React, {Component} from 'react';
import L from 'leaflet'
import 'leaflet-osm';
import $ from 'jquery';
import './leaflet.css'
import './map.css'

class Map extends Component {


  constructor() {
    super();

    this.map = {};
    this.moveendEvent = this.moveendEvent.bind(this);
    this.mouseupEvent = this.mouseupEvent.bind(this);
    this.zoomendEvent = this.zoomendEvent.bind(this);
    this.mouseoutEvent = this.mouseoutEvent.bind(this);
    this.loadmap = this.loadmap.bind(this);
    this.addLayerSuc = this.addLayerSuc.bind(this);
    this.addLayerFail = this.addLayerFail.bind(this);
    this.addedLayer = {};
  }

  componentDidMount() {
    console.log("Did mount")
    this.map = L.map('map2');
    this.loadmap();
    this.map.on('moveend', this.moveendEvent);
    this.map.on('mouseup', this.mouseupEvent);
    this.map.on('zoomend', this.zoomendEvent);
    this.map.on('mouseout', this.mouseoutEvent);
  }


  // update sate when any event happens on map
  mapEventHandler(e) {
    var center = e.target.getCenter();
    var zoom = e.target.getZoom()

    console.log("zoom:" + zoom + "lat:" + center.lat + " " + "lng:" + center.lng)

    let map = {
        zoom: zoom,
        lat: center.lat,
        lon: center.lng,
      }
      //set parent map state
    this.props.addMap(map)
  }

  zoomendEvent(e) {
    console.log("zoom end:")
    this.mapEventHandler(e);
  }

  mouseupEvent(e) {
    console.log("Mouse up:")
    this.mapEventHandler(e);
  }
  mouseoutEvent(e) {
    console.log("Mouse out:")
    this.mapEventHandler(e);
  }
  moveendEvent(e) {
    //console.log("move end:")
    //this.mapEventHandler(e);
  }
  //when steate change, reload the map
  componentDidUpdate() {
    this.loadmap()
  }

  //method to load the map and add layer
  loadmap() {

    this.map.setView([this.props.map.lat, this.props.map.lon], this.props.map
      .zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map);
    console.log("loading map")
    this.addLayer()
  }
  //add layer to map
  addLayer() {
    //Get bounding box geo location from map bounds,so the layer
    // will add to the right place when map is paned
    let bounds = this.map.getBounds();
    let left = bounds._southWest.lng //sourWest lng
    let right = bounds._northEast.lng; //northEast lng
    let bottom = bounds._southWest.lat; // sourWest lat
    let top = bounds._northEast.lat; // northWest lat
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

  //method to handle ajax call success from OSM API
  addLayerSuc(xml) {
    //remove previous added layer before add new layer
    if (this.addedLayer) {
      this.map.removeLayer(this.addedLayer);
    }

    //change colors to following features
    let styles ={
      node:{color:'yellow'},
      way:{color:'red'},
      area:{color:'green'}
    }
    let options = {
      styles:styles
    }
    this.addedLayer = new L.OSM.DataLayer(xml,options);
    this.addedLayer.addTo(this.map);
  }

  // method to handle ajax call fail from OSM API
  addLayerFail() {
    //for the ease of the assignment, if use zoom or move to area has too
    //many nodes from OSM API, just show an alert, and no layer will added to the
    // new area
    console.error("Two many node in this area, choose an area with less node ")
  }
  render() {
    return ( < div id = 'map2'
      className = 'mymap' > < /div>
    );
  }
}

export default Map;
