function initMap() {
    var options = {
        zoom : 8,
        center: {lat:7.1329854, lng:3.4130886},
    }
    var map = new google.maps.Map(document.getElementById('map'), options)
    var marker = new google.maps.Marker({
        position : {lat: 7.1329854, lng:3.4130884},
        map:map,
    })
}
