let map: any;
let addresses : any[];
let mapMarkers : MapMarker[] = []; // defining an array of MapMarker object & initializing it
// interface
interface LatLng {
    lat: number,
    lng: number
}

class MapMarker{
    Address: string;
    LatLng: LatLng;

    public constructor(address: string){
      this.Address = address;
    };
}

let Toronto : LatLng = { lat: 43, lng: -79.38 };

$.ajax({
    url: 'AClocations.json',
    dataType: 'json',
    success: function(data) {

        console.log(data)
        // for(let i of data){
        //     console.log(i.address);
        // }
        addresses =  data;
        for(let i of addresses){
            console.log(i.address);

            // add map marker to array of map markers
            let newMapMarker : MapMarker = new MapMarker(i.address); // using address constructor here
            mapMarkers.push(newMapMarker);
        }

        console.log(mapMarkers);
    }

});

function initMap(){
   map = new google.maps.Map(
     document.getElementById("map"),
     {
         center: Toronto,
         zoom: 8
     }
   );

   for(let cl of addresses) {
    let latlng : LatLng = { lat: cl.lat, lng: cl.lon};
    let newMapMarker : MapMarker = new MapMarker(cl.address);
    mapMarkers.push(newMapMarker);
}

//let markersIndex: number = 0;
    for(let i = 0; i < 10; i++) {
        
        // setTimeout(() => {}, 1000);
        setLatitudeLongitude(i);
        // console.log(mapMarkers[i].Coordinates)
        addMarker(mapMarkers[1].Coordinates);
    }

        function setLatitudeLongitude(markersIndex : number) : void {
            //assigns lat and long for each map marker
            mapMarkers[markersIndex].Coordinates = getLatLng(mapMarkers[markersIndex].Address);  
        //    setTimeout(() => {console.log(mapMarkers[markersIndex])}, 1000);
        console.log(mapMarkers[markersIndex].Coordinates)
        }



        function getLatLng(address : string) : LatLng {
        
            geocoder.geocode(
                {address: address},
                function(results, status) {
                    //console.log(status)
                    if(status === 'OK') {
                        console.log('Latitude : ' + results[0].geometry.location.lat());
                        console.log('Longitude : ' + results[0].geometry.location.lng());
                        var coord = {
                            lat: results[0].geometry.location.lat(), 
                            lng: results[0].geometry.location.lng() 
                        };
                        // console.log(coord);
                        return coord;
                        
                    } else {
                        console.log('In else');
                        setInterval( getLatLng(address), 2000);
                        
                    }
                }
            );
    
       }


       function addMarker(coord : LatLng) : void {
        //will place mapmarker based on coordinates
        
        let newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: `AC Locations to be at`
        });
   }

} // end of initMap()

initMap();