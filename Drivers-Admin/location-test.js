
// setting map options 
var myLatLng = {
    lat:7.1329854,
    lng:3.4130886,
}
var mapOptions = {
    center:myLatLng,
    zoom:7,
    mapTypeId:  google.maps.MapTypeId.ROADMAP
};

//CREATE A NEW MAP
var map = new google.maps.Map(document.getElementById('map'), mapOptions)

// creating direction 
var directionsService = new google.maps.DirectionsService();
// create a directionrenderer 

var  directionsDisplay = new google.maps.DirectionsRenderer()

//bind the direction to the map
directionsDisplay.setMap(map);

function calcRoute() {
    var request = {
        origin: document.getElementById('from').value,
        destination: document.getElementById('to').value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
    }
    console.log(request.destination)
    directionsService.route(request, (result, status) => {
        if(status == google.maps.DirectionsStatus.OK) {
            //get the distance and time 
            const output = document.querySelector('#output')
            output.innerHTML =`<div> form ${document.getElementById('from').value} <br> To: ${document.getElementById('to').value} <br> Driving distance: ${result.routes[0].legs[0].distance.text} <br> Duration : ${result.routes[0].legs[0].duration.text} </div>`

            //display the route
            directionsDisplay.setDirections(result)
        }else {
            // delete route from map
            directionsDisplay.setDirections({ routes: []})

            //center map

            map.setCenter(myLatLng)

            //
            output.innerHTML=`<div> could not retrive driving distance </div>`
        }
    })

}

// create auto complete
var options = {
    type: ['(cities']
}
var input1 = document.getElementById('from')
var autocomplete1 = new google.maps.places.Autocomplete(input1, options)

var input2 = document.getElementById('to')
var autocomplete2 = new google.maps.places.Autocomplete(input2, options)
