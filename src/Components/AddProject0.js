//
// import React, { Component } from 'react';
//
// import L from 'leaflet'
// import ls from 'leaflet-osm';
// import $ from 'jquery';
//
// import axios from 'axios';
// import './map.css'
// class AddProject extends Component {
//
//
//  constructor()
//  {
//    super();
//    this.state = {
//      newProject:{},
//
//    }
//    this.map = {};
//
//    this.moveendEvent = this.moveendEvent.bind(this);
//    this.loadmap = this.loadmap.bind(this);
//    this.addLayerSuc = this.addLayerSuc.bind(this);
//  }
//
//   handleSubmit(e){
//
//
//       // this.setState(
//       //   {
//       //     newProject:{
//       //       zoom:this.refs.zoom.value,
//       //       lat:this.refs.lat.value===''?37.39:this.refs.lat.value,
//       //       lon:this.refs.lon.value===''?-122.03:this.refs.lon.value,
//       //     }
//       //   },function()
//       //   {
//       //     //pass state to paire ent state
//       //     this.props.addProject(this.state.newProject)
//       //   }
//       // )
//       console.log("")
//       // this.map.setView([this.props.projects[0].lat, this.props.projects[0].lon], this.props.projects[0].zoom);
//       this.map.setView([this.refs.lat.value, this.refs.lon.value], this.refs.zoom.value);
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
//       let left =  parseInt(this.refs.lon.value) - 0.0023;
//       let right = parseInt(this.refs.lon.value) + 0.001;
//       let bottom = parseInt(this.refs.lat.value);
//       let top = parseInt(this.refs.lat.value) + 0.003;
//       let url = "http://www.openstreetmap.org/api/0.6/map?bbox="+left+","+bottom+","+right +","+top;
//       console.log(url);
//     $.ajax({
//
//          url: url,
//          dataType: "xml",
//          success: this.addLayerSuc
//
//         });
//       // this.loadmap();
//     e.preventDefault();
//   }
//
//   componentDidMount()
//   {
//     this.map = L.map('map2');
//     this.loadmap();
//     this.map.on('moveend',this.moveendEvent)
//  }
//
//
//
// moveendEvent(e)
// {
//
//     console.log('< move start')
//     // console.log('center:'+this.map.getCenter())
//
//   var center =  e.target.getCenter();
//   var zoom = e.target.getZoom()
//   console.log("zoom:"+zoom + "lat:"+ center.lat + " " + "lng:"+center.lng)
//   this.setState(
//     {
//       newProject:{
//         zoom:zoom,
//         lat:center.lat,
//         lon:center.lng,
//       }
//     },function()
//     {
//       //pass state to paire ent state
//       this.props.addProject(this.state.newProject)
//
//     }
//   )
//
// }
//
//   componentDidUpdate()
//   {
//     this.refs.lat.value = this.props.projects[0].lat;
//     this.refs.lon.value = this.props.projects[0].lon;
//      this.refs.zoom.value =  this.props.projects[0].zoom;
//    console.log("sate update ")
//   }
//   addLayerSuc(xml)
//   {
//     console.log(L)
//      console.log(xml)
//
//             new L.OSM.DataLayer(xml).addTo(this.map);
//   }
//
//   loadmap() {
//
//     this.map.setView([this.props.projects[0].lat, this.props.projects[0].lon], this.props.projects[0].zoom);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
//     console.log("loading map")
//
//           let left =  this.props.projects[0].lon - 0.0023;
//           let right = this.props.projects[0].lon + 0.001;
//           let bottom = this.props.projects[0].lat;
//           let top = this.props.projects[0].lat + 0.003;
//           let url = "http://www.openstreetmap.org/api/0.6/map?bbox="+left+","+bottom+","+right +","+top;
//           console.log(url);
//         $.ajax({
//
//              url: url,
//              dataType: "xml",
//              success: this.addLayerSuc
//
//             });
//
//     //add layer
//   //   let url='http://www.openstreetmap.org/api/0.6/map?bbox=-122.0323,37.390,-122.029,37.393';
//   //
//   //   axios.get(url).
//   //   then(function(response)
//   //   {
//   //     // var gson =osm_geojson(response);
//   //
//   //
//   //     // console.log(L)
//   //     console.log(L)
//   //
//   //       new L.OSM.DataLayer(response).addTo(this.map);
//   //
//   //   })
//   //   .catch(function(error)
//   //     {
//   //       console.log(error)
//   //     })
//   }
//
//
//   render() {
//
//
//     return (
//
//       <div >
//       <div id='map2' className='mymap'> </div>
//       <h3>Add project</h3>
//         <form onSubmit={this.handleSubmit.bind(this)}>
//         <div>
//         <label> Zoom </label>
//         <input type="text" ref="zoom" />
//         </div>
//
//         <div>
//         <label> lat </label>
//         <input type="text" ref="lat" />
//         </div>
//
//
//         <div>
//         <label> lon </label>
//         <input type="text" ref="lon" />
//         </div>
//         <input type="submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }
// }
//
// export default AddProject;
