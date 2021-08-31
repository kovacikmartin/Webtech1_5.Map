var myMap = L.map("mapid").setView([48.152874, 17.073533], 17);

var layer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieGtvdmFjaWttNiIsImEiOiJja2d1dzdqY20wejF4MnNwOTFvMHZ6bjkyIn0.Srve4i5c9BhBV3nW9t8Ryg'
}).addTo(myMap);

L.Routing.control({
    waypoints: [
        L.latLng(),
        L.latLng(48.152874, 17.073533)
    ],
    fitSelectedRoutes: true,
    geocoder: L.Control.Geocoder.nominatim(),
}).addTo(myMap);


// coordinates were generated using geojson.io interactive site
var blocs = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            "name": "Blok A",
            "amenity": "College building",
            "popupContent": "Pedagogické oddelenie, Inšitút komunikácie a aplikovanej lingvistiky, Ústav jadrového a fyzikálneho inžinierstva"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                17.072547376155853,
                48.1519685614724
              ],
              [
                17.07254469394684,
                48.15182898379371
              ],
              [
                17.073869705200195,
                48.151821825953824
              ],
              [
                17.073872387409207,
                48.15196140365195
              ],
              [
                17.072547376155853,
                48.1519685614724
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "name": "Blok B",
            "amenity": "College building",
            "popupContent": "Ústav elektrotechniky, Ústav multimediálnych informačných a komunikačných technológií"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                17.07300066947937,
                48.15232645122139
              ],
              [
                17.07436054944992,
                48.15232645122139
              ],
              [
                17.07436054944992,
                48.15246602754695
              ],
              [
                17.07300066947937,
                48.15246602754695
              ],
              [
                17.07300066947937,
                48.15232645122139
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "name": "Blok C",
            "amenity": "College building",
            "popupContent": "Ústav elektroenergetiky a aplikovanej elektrotechniky, Ústav informatiky a matematiky"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                17.072812914848328,
                48.152831071526535
              ],
              [
                17.073875069618225,
                48.152831071526535
              ],
              [
                17.073875069618225,
                48.1529724358995
              ],
              [
                17.072812914848328,
                48.1529724358995
              ],
              [
                17.072812914848328,
                48.152831071526535
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "name": "Blok D",
            "amenity": "College building",
            "popupContent": "Ústav automobilovej mechatroniky, Ústav robotiky a kybernetiky"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                17.073191106319427,
                48.15333568686922
              ],
              [
                17.074373960494995,
                48.15333568686922
              ],
              [
                17.074373960494995,
                48.1534752604496
              ],
              [
                17.073191106319427,
                48.1534752604496
              ],
              [
                17.073191106319427,
                48.15333568686922
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "name": "Blok E",
            "amenity": "College building",
            "popupContent": "Ústav elektroniky a fotoniky"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                17.072820961475372,
                48.15384208663916
              ],
              [
                17.073891162872314,
                48.15384208663916
              ],
              [
                17.073891162872314,
                48.15398165884208
              ],
              [
                17.072820961475372,
                48.15398165884208
              ],
              [
                17.072820961475372,
                48.15384208663916
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "name": "Telocvičňa",
            "amenity": "College building",
            "popupContent": "Technologický inštitút športu"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                17.07255810499191,
                48.1535021014792
              ],
              [
                17.072820961475372,
                48.1535021014792
              ],
              [
                17.072820961475372,
                48.15445047551353
              ],
              [
                17.07255810499191,
                48.15445047551353
              ],
              [
                17.07255810499191,
                48.1535021014792
              ]
            ]
          ]
        }
      }
    ]
}

function getColor(bloc)
{
    return bloc == "Blok A" ? "#000000" :
           bloc == "Blok B" ? "#ff0000" :
           bloc == "Blok C" ? "#00ff00" :
           bloc == "Blok D" ? "#ffff00" :
           bloc == "Blok E" ? "#0000ff" :
           bloc == "Telocvičňa" ? "#9400d3" :
                                  "#ffffff";
}

L.geoJSON(blocs,{
    onEachFeature: function(feature, layer){
        if(feature.geometry.type=='Polygon')
        {
            layer.bindPopup(feature.properties.name + "<br>" + feature.properties.popupContent);
        }
    },
    style: function(feature){
        return{
            color: getColor(feature.properties.name)
        }
        
    }
}).addTo(myMap);


var busIcon = L.icon({
    iconUrl: 'img/bus.jpg',

    iconSize:     [40, 45], // size of the icon
    iconAnchor:   [20, 35], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
});

var tramIcon = L.icon({
    iconUrl: 'img/tram.jpg',

    iconSize:     [40, 45], // size of the icon
    iconAnchor:   [20, 35], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
});

L.marker([48.15413733508205, 17.075114250183105], {icon: busIcon}).addTo(myMap).bindPopup("ZOO: "+ "<br>" + "31, 39, N31");
L.marker([48.15461330778264, 17.074567079544067], {icon: busIcon}).addTo(myMap).bindPopup("ZOO: "+ "<br>" + "31, 39, 131, N31");
L.marker([48.1546562524708, 17.0757794380188], {icon: busIcon}).addTo(myMap).bindPopup("ZOO: "+ "<br>" + "30, 32, 37, N32");
L.marker([48.15406933862153, 17.076922059059143], {icon: busIcon}).addTo(myMap).bindPopup("ZOO: "+ "<br>" + "30, 32, 37, 92, N92, N32, N30");
L.marker([48.14791886505443, 17.072303295135498], {icon: busIcon}).addTo(myMap).bindPopup("Botanická záhrada: "+ "<br>" + "29, 32, N29, N32");
L.marker([48.148335839275624, 17.07202970981598], {icon: busIcon}).addTo(myMap).bindPopup("Botanická záhrada: "+ "<br>" + "29, 32, N29, N32");
L.marker([48.148129142177396, 17.072473615407944], {icon: tramIcon}).addTo(myMap).bindPopup("Botanická záhrada: "+ "<br>" + "4, 9");
L.marker([48.14813898491524, 17.0717816054821], {icon: tramIcon}).addTo(myMap).bindPopup("Botanická záhrada: "+ "<br>" + "4,9");


myMap.on("click", function(event){
    
    var obj;
    
    $.ajax({
        url:'https://nominatim.openstreetmap.org/reverse?format=geojson&lat=' + event.latlng.lat + '&lon=' + event.latlng.lng,
        type:'GET',
        dataType: "json",
        success: function(data){
            
            L.marker([event.latlng.lat, event.latlng.lng]).addTo(myMap).bindPopup(data.features[0].properties.display_name);
            //console.log(obj.features[0].properties.display_name);
        }
    });
})