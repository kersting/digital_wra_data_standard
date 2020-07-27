(this["webpackJsonpjsonforms-react-seed"]=this["webpackJsonpjsonforms-react-seed"]||[]).push([[0],{160:function(e){e.exports=JSON.parse('{"definitions":{"date_from":{"type":"string","format":"date-time","title":"Date From","description":"The date from when these properties are active. If these properties follow a change, then this Date From should equal the previous Date To."},"date_to":{"type":["string","null"],"format":"date-time","title":"Date To","description":"The date to when these properties are active."},"notes":{"type":["string","null"],"title":"Notes","description":"Notes relating to these properties."},"update_at":{"type":"string","format":"date-time","title":"Date of Update","description":"The date these properties were last updated."}},"type":"object","title":"IEA Wind Resource Assessment Data Model","description":"This Data Model schema is a digital representation of a meteorological mast used for measureing the wind resource of a potential wind farm.","properties":{"author":{"type":"string","title":"Author","description":"The person who created this file."},"organisation":{"type":"string","title":"Organisation","description":"The organisation the Author is from."},"date":{"type":"string","format":"date-time","title":"Date","description":"The date this file was created."},"version":{"type":"string","title":"Version","description":"The version of the IEA WRA Data Model his file is based on. The format of this follows Semantic Versioning with the year and month tag on after. E.g. 1.1.1-2020.07","examples":["1.1.1-2020.07"],"pattern":"^([0-9]{1,2})[.]([0-9]{1,2})[.]([0-9]{1,2})-([0-9]{4})[.]([0-9]{2})$"},"plant_name":{"type":["string","null"],"title":"Plant Name","description":"The name of the wind farm this met mast is associated with."},"plant_type":{"type":["string","null"],"title":"Plant Type","description":"The type of renewable generation plant it is.","enum":["onshore_wind","offshore_wind"],"examples":["onshore_wind"]},"measurement_location":{"type":"array","title":"Measurement Location","description":"This is the geographic location of the meteorological measurement station i.e. a met mast/tower or remote sensing device.","items":{"type":"object","title":"Measurement Location","description":"This is the geographic location of the meteorological measurement station i.e. a met mast/tower or remote sensing device.","properties":{"name":{"type":"string","title":"Name","description":"The name given to the measurement location i.e. to the met mast or remote sensing device."},"latitude_ddeg":{"type":"number","title":"Latitude [ddeg]","description":"Latitude coordinate in the Geographic Coordinate System using the WGS84 datum in decimal degrees. Latitude lines are parallel to the equator where their position ranges from -90 degrees at the south pole to 90 degrees at the north pole.","examples":[52.973],"minimum":-90,"maximum":90},"longitude_ddeg":{"type":"number","title":"Longitude [ddeg]","description":"Longitude coordinate in the Geographic Coordinate System using the WGS84 datum in decimal degrees. Longitude lines are perpendicular to the equator where their position ranges from 0\xb0 at Greenwich Mean Time increasing to +180\xb0 as you move eastward and decreasing to \u2212180\xb0 as you move westward.","examples":[-9.431],"minimum":-180,"maximum":180},"measurement_station_type_id":{"title":"Measurement Station Type","description":"The type of measurement station. This must be one of either mast, lidar or sodar.","type":"string","enum":["mast","lidar","sodar"],"examples":["mast"]},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"},"mast_properties":{},"logger_main_config":{},"measurement_point":{"type":"array","title":"Measurement Point","description":"This represents a point in space where a measurement takes place.","items":{"type":"object","properties":{"name":{"type":"string","title":"Name","description":"The name the measurement point is commonly referred to. This is the name that is used to refer to the data in an analysis and reporting."},"measurement_type_id":{"type":"string","title":"Measurement Type","description":"The type of measurement been made.","enum":["wind_speed","wind_direction","temperature","air_pressure","relative_humidity","voltage","current","solar_irradiation","vertical_wind_speed","wind_speed_turbulence","precipitation","ice_detection","solar_irradiation","soiling_loss_index","fog","compass_direction","gps_coordinates","illuminance","status","counter","other"],"examples":["wind_speed"]},"height_m":{"type":["number","null"],"title":"Height [m]","description":"The height (in meters) above ground level the measurement is taking place."},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"},"sensor_config":{"type":"array","title":"Sensor Configuration","description":"The sensor configuration that is programmed into the logging device.","items":{"type":"object","properties":{"slope":{"type":["number","null"],"title":"Logger Slope","description":"The slope programmed into the logger."},"offset":{"type":["number","null"],"title":"Logger Offset","description":"The offset programmed into the logger."},"sensitivity":{"type":["number","null"],"title":"Logger Sensitivity","description":"The sensitivity programmed into the logger."},"measurement_units":{"type":"string","title":"Measurement Units","description":"The measurement units of the values the sensor records.","enum":["m/s","deg","deg_C","deg_F","K","%","mbar","hPa","V","mA","ohm","Hz","mm","W/m^2","m/s^2","lux","-"]},"height_m":{"type":["number","null"],"title":"Logger Height [m]","description":"The height (in meters) programmed into the logger."},"serial_number":{"type":["string","null"],"title":"Serial Number","description":"The serial number of the sensor programmed into the logger."},"connection_channel":{"type":["string","null"],"title":"Connection Channel","description":"The connection channel the sensor is wired into on the logger."},"date_from":{"$ref":"#/definitions/date_from"},"date_to":{"$ref":"#/definitions/date_to"},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"},"column_name":{"type":"array","title":"Column Names","description":"The group of column names in the data file which relates to this sensor configuration.","items":{"type":"object","properties":{"column_name":{"type":"string","title":"Column Name","description":"The column name in the data file which relates to this sensor configuration."},"metric_id":{"type":"string","title":"Metric","description":"The metric or aggregation function e.g. \'average\' or \'maximum\' that this column records.","enum":["avg","sd","max","min","count","sum","median","mode","range","text"]},"is_ignored":{"type":"boolean","title":"Is Ignored","description":"If you want to ignore this column name, set to True."},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"}},"additionalProperties":false,"required":["column_name","is_ignored","metric_id"]}}},"additionalProperties":false,"required":["column_name","date_from","date_to","measurement_units"]}},"sensor":{"type":"array","items":{}},"mounting_arrangement":{"type":["array","null"],"title":"Mounting Arrangement","description":"This describes how the sensor is mounted onto the met mast.","items":{"type":"object","additionalProperties":false,"properties":{"mast_section_geometry_uuid":{"type":["null","string"],"format":"uuid","title":"Mast Section Geometry UUID","description":"The uuid to link this Measurement Point\'s mounting arrangement to the Mast Section Geometry."},"mounting_type_id":{"type":["string","null"],"title":"Mounting Type","description":"The mounting type the sensor is mounted onto the mast e.g. an anemometer top mounted above the mast or a pair of anemometers mounted in the goal post configuration.","enum":["side","goal_post","top"]},"boom_orientation_deg":{"type":["integer","null"],"title":"Boom Orientation [deg]","description":"The boom orientation of the horizontal boom the sensor is mounted on.","minimum":0,"maximum":360},"vane_dead_band_orientation_deg":{"type":["integer","null"],"title":"Vane Dead Band Orientation [deg]","description":"The wind vane dead band orientation.","minimum":0,"maximum":360},"orientation_reference_id":{"type":["string","null"],"title":"Orientation Reference","description":"The orientation reference the booms and vane dead band are measured against. E.g. magnetic north.","enum":["magnetic_north","true_north","grid_north"]},"tilt_angle_deg":{"type":["integer","null"],"title":"Tilt Angle [deg]","description":"The tilt angle of either the vertical upstand the sensor is mounted on.","minimum":-90,"maximum":90},"boom_oem":{"type":["string","null"],"title":"Boom OEM","description":"The boom OEM."},"boom_model":{"type":["string","null"],"title":"Boom Model","description":"The boom model."},"upstand_height_mm":{"type":["integer","null"],"title":"Upstand Height [mm]","description":"The height, measured in millimeters, of the upstand.","minimum":0},"upstand_diameter_mm":{"type":["integer","null"],"title":"Upstand Diameter [mm]","description":"The diameter, measured in millimeters, of the upstand.","minimum":0},"boom_diameter_mm":{"type":["integer","null"],"title":"Boom Diameter [mm]","description":"The diameter, measured in millimeters, of the boom.","minimum":0},"boom_length_mm":{"type":["integer","null"],"title":"Boom Length [mm]","description":"The length, measured in millimeters, of the boom.","minimum":0},"distance_from_mast_to_sensor_mm":{"type":["integer","null"],"title":"Distance Mast to Sensor [mm]","description":"The distance, measured in millimeters, of edge of the mast to the center of the sensor.","minimum":0},"date_from":{"$ref":"#/definitions/date_from"},"date_to":{"$ref":"#/definitions/date_to"},"notes":{"$ref":"#/definitions/notes"},"update_at":{"$ref":"#/definitions/update_at"}},"required":["boom_orientation_deg","mounting_type_id","date_from","date_to"]}}},"additionalProperties":false,"required":["name","measurement_type_id","height_m","sensor","sensor_config"]}}},"additionalProperties":false,"required":["name","latitude_ddeg","longitude_ddeg","measurement_station_type_id","measurement_point"]}}},"additionalProperties":false,"required":["author","organisation","date","version","measurement_location"]}')},161:function(e){e.exports=JSON.parse('{"type":"Control","scope":"#"}')},434:function(e,t,n){e.exports=n(753)},439:function(e,t,n){},602:function(e,t){},610:function(e,t){},612:function(e,t){},689:function(e,t,n){},753:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(14),a=n.n(r),s=(n(439),n(403)),m=n(180),d=n(11),l=n(230),c=n(836),u=n(228),p=n(401),h=n.n(p),g=n(400),f=n.n(g),_=(n(689),n(160)),y=n(161),v=n(111),b=n(229),w=n(397),T=n(398),O=n(404),j=n(399),E=n(405),S=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(O.a)(this,Object(j.a)(t).call(this,e))).state={rating:e.value,hoverAt:null},n}return Object(E.a)(t,e),Object(T.a)(t,[{key:"handleMouseOver",value:function(e){this.setState({hoverAt:e+1})}},{key:"handleMouseOut",value:function(){this.setState({hoverAt:null})}},{key:"handleClick",value:function(e){this.setState({rating:e+1})}},{key:"render",value:function(){var e=this,t=this.props.onClick;return i.createElement("div",{id:"#/properties/rating"},i.createElement("p",null,"Rating:"),[0,1,2,3,4].map((function(n){var o=null!=e.state.hoverAt?e.state.hoverAt:e.state.rating;return i.createElement("span",{onMouseOver:function(){return e.handleMouseOver(n)},onMouseOut:function(){return e.handleMouseOut()},onClick:function(){e.handleClick(n),t({value:n+1})},key:"".concat(e.props.id,"_").concat(n)},n<o?"\u2605":"\u2606")})))}}]),t}(i.Component);S.getDerivedStateFromProps=function(e,t){return t.rating!==e.value?{rating:e.value,hoverAt:t.hoverAt}:null};var C=Object(d.withJsonFormsControlProps)((function(e){var t=e.data,n=e.handleChange,o=e.path;return i.createElement(S,{value:t,onClick:function(e){return n(o,Number(e.value))}})})),M=n(13),x=Object(M.rankWith)(3,Object(M.scopeEndsWith)("rating")),A=f()({container:{padding:"1em"},title:{textAlign:"center",padding:"0.25em"},dataContent:{display:"flex",justifyContent:"center",borderRadius:"0.25em",backgroundColor:"#eeeeee"},demoform:{margin:"auto",padding:"1rem"}}),N={},k=h()(A)((function(e){var t=e.store,n=e.classes,r=Object(i.useState)(0),a=Object(m.a)(r,1)[0],p=Object(i.useState)(""),h=Object(m.a)(p,2),g=h[0],f=h[1],w=Object(i.useState)(N),T=Object(m.a)(w,2),O=T[0],j=T[1];return Object(i.useEffect)((function(){var e=function(){var e=function(e){return e?JSON.stringify(Object(b.get)(e.getState(),["jsonforms","core","data"]),null,2):""}(t);f(e)};t.subscribe(e),e()}),[t]),Object(i.useEffect)((function(){f(JSON.stringify(O,null,2))}),[O]),o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",{className:"App-title"},"Form Prototype"))),o.a.createElement(c.a,{container:!0,justify:"center",spacing:1,className:n.container},o.a.createElement(c.a,{item:!0,sm:12},0===a&&o.a.createElement("div",{className:n.demoform},o.a.createElement(d.JsonForms,{schema:_,uischema:y,data:O,renderers:[].concat(Object(s.a)(v.materialRenderers),[{tester:x,renderer:C}]),cells:v.materialCells,onChange:function(e){e.errors;var t=e.data;return j(t)}})),1===a&&o.a.createElement("div",{className:n.demoform,id:"form"},t?o.a.createElement(l.Provider,{store:t},o.a.createElement(d.JsonFormsReduxContext,null,o.a.createElement(d.JsonFormsDispatch,null))):null)),o.a.createElement(c.a,{item:!0,sm:12},o.a.createElement(u.a,{variant:"h3",className:n.title},"Rendered JSON"),o.a.createElement("div",{className:n.dataContent},o.a.createElement("pre",{id:"boundData"},g)))))})),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=n(77),P=n(402),R={jsonforms:{cells:v.materialCells,renderers:v.materialRenderers}},J=Object(L.combineReducers)({jsonforms:Object(M.jsonformsReducer)()}),W=Object(L.createStore)(J,R,Object(P.devToolsEnhancer)({}));W.dispatch(M.Actions.init({name:"Send email to Adrian",description:"Confirm if you have passed the subject\nHereby ...",done:!0,recurrence:"Daily",rating:3},_,y)),W.dispatch(M.Actions.registerRenderer(x,C)),a.a.render(o.a.createElement(k,{store:W}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/digital_wra_data_standard",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/digital_wra_data_standard","/service-worker.js");D?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):$(e)}))}}()}},[[434,1,2]]]);
//# sourceMappingURL=main.cc4ab0fa.chunk.js.map