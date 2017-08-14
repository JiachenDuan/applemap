App:  https://jiachenduan.github.io/applemap
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

Build and run:

  1. cd applemap
  2. npm run build 
  3. npm install -g serve   //skip it if already installed a STATIC server 
  4. serve -s build/

Issue: 
I see the OSM api have limit that if retrieved nodes reach certain number, it will reject the request, for the ease of the assignment, I just show error message on the console. If we can have all the OSM data and host our ow APIs, we can set the limit ourself. 

I wrote this project sometime during the weekend, it is not perfect, it may have some bugs here and there, just to demonstrate my front end skill.


        
      
