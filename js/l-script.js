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

// getting the next destination value from the user js oppor fun warisi

let saveBtn = document.getElementById("changeLocation")
saveBtn.addEventListener('click', e => {
  e.preventDefault()
  
  if(document.getElementById("location").value === '') {
      alert("Please let know your next destination before")
  }else {
      localStorage.setItem("location", document.getElementById("location").value)
      window.location="../html/confirm-driver.html"
  }
})
