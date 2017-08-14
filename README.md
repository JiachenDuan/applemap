This project is to demonstrate integration of OSM map to web page. It uses leaflet to render map and add layers from OSM API.  Uses leaflet-osm to parse the OSM data XML and add to map layers. 

I choosed the create-react-app package to boostrap the project. ReactJs framework to help me on the routing function and also the state management of the app.

 When zoom or pan the map, URL will change the zoom/lat/lng accordingly.  Change the URL parameters and hit enter, map will change accordingly as well. 

Project structure: 
- Applemap
   - Src
   - Components 
       -  Map.js   // contains the main logic of map rendering, add layer, event handling
       -  App.js  // have the router configuration 
       -  Package.json  // has all the dependency and scripts to run the start/build 

I wrote this project sometime during the weekend, it is not perfect, it may have some bugs here and there, just to demonstrate my front end skill.


        
      
