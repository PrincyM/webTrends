var map;
var addresses;
var mapMarkers = []; // defining an array of MapMarker object & initializing it
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.Address = address;
    }
    ;
    return MapMarker;
}());
var Toronto = { lat: 43, lng: -79.38 };
$.ajax({
    url: 'AClocations.json',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        // for(let i of data){
        //     console.log(i.address);
        // }
        addresses = data;
        for (var _i = 0, addresses_1 = addresses; _i < addresses_1.length; _i++) {
            var i = addresses_1[_i];
            console.log(i.address);
            // add map marker to array of map markers
            var newMapMarker = new MapMarker(i.address); // using address constructor here
            mapMarkers.push(newMapMarker);
        }
        console.log(mapMarkers);
    }
});
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: Toronto,
        zoom: 8
    });
    for (var _i = 0, addresses_2 = addresses; _i < addresses_2.length; _i++) {
        var cl = addresses_2[_i];
        var latlng = { lat: cl.lat, lng: cl.lon };
        var newMapMarker = new MapMarker(cl.address);
        mapMarkers.push(newMapMarker);
    }
    //let markersIndex: number = 0;
    for (var i = 0; i < 10; i++) {
        // setTimeout(() => {}, 1000);
        setLatitudeLongitude(i);
        // console.log(mapMarkers[i].Coordinates)
        addMarker(mapMarkers[1].Coordinates);
    }
    function setLatitudeLongitude(markersIndex) {
        //assigns lat and long for each map marker
        mapMarkers[markersIndex].Coordinates = getLatLng(mapMarkers[markersIndex].Address);
        //    setTimeout(() => {console.log(mapMarkers[markersIndex])}, 1000);
        console.log(mapMarkers[markersIndex].Coordinates);
    }
    function getLatLng(address) {
        geocoder.geocode({ address: address }, function (results, status) {
            //console.log(status)
            if (status === 'OK') {
                console.log('Latitude : ' + results[0].geometry.location.lat());
                console.log('Longitude : ' + results[0].geometry.location.lng());
                var coord = {
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                };
                // console.log(coord);
                return coord;
            }
            else {
                console.log('In else');
                setInterval(getLatLng(address), 2000);
            }
        });
    }
    function addMarker(coord) {
        //will place mapmarker based on coordinates
        var newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: "AC Locations to be at"
        });
    }
} // end of initMap()
initMap();
