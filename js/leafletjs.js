// Map initialization
var map = L.map('map').setView([23.6850, 90.3563], 10);

// Osm map
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map)

// OpenTopoMap
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
maxZoom: 17,
attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});


// Stadia.AlidadeSmoothDark
var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
minZoom: 0,
maxZoom: 20,
attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
ext: 'png'
});


// GoogleStreets
var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3']
});

// Stadia_AlidadeSatellite
var Stadia_AlidadeSatellite = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
minZoom: 0,
maxZoom: 20,
attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
ext: 'jpg'
});

// Marker
var myIcon = L.icon({
iconUrl: 'image/map-icon.png',
iconSize: [38, 40],
});

var singelMarker = L.marker([23.6850, 90.3563],{icon: myIcon, draggable: true});
var popup = singelMarker.bindPopup('BanglaDesh'+ singelMarker.getLatLng()).openPopup();
popup.addTo(map);
console.log(singelMarker.toGeoJSON());

var myIconLocation = L.icon({
iconUrl: 'image/my-location.png',
iconSize: [50, 65],
});

var myLocation = L.marker([24.006355, 89.249298],{icon: myIconLocation, draggable: true});
var popup = myLocation.bindPopup('BanglaDesh'+ singelMarker.getLatLng()).openPopup();
popup.addTo(map);
console.log(myLocation.toGeoJSON());

// GEOGSON
var pointJson = L.geoJSON(pointJson).addTo(map);
var lineJson = L.geoJSON(lineJson).addTo(map);
var polygonJson = L.geoJSON(polygonJson,{
onEachFeature: function (feature, layer) {
layer.bindPopup('<b>Name: </b>'+'Polygon');
},
style: {
    fillColor: 'blue',
    color: '#ddd'
}
}).addTo(map);

// layers-control
var baseMaps = {
"Osm map": osm,
"OpenTopoMap": OpenTopoMap,
"Stadia.AlidadeSmoothDark": Stadia_AlidadeSmoothDark,
"GoogleStreets": googleStreets,
"Stadia_AlidadeSatellite": Stadia_AlidadeSatellite,
};

var overlayMaps = {
"Marker": singelMarker,
"Marker": myLocation,
"PointJson": pointJson,
"LineJson": lineJson,
"PolygonJson": polygonJson,
};

var layerControl = L.control.layers(baseMaps, overlayMaps,{collapsed: false}).addTo(map);
