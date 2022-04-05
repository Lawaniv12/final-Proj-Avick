// import { Drivers } from "../Drivers-Admin/db.js"

// console.log(Drivers)
function initMap() {
    var options = {
        zoom : 10,
        center: {lat:7.1329854, lng:3.4130886},
    }
    var map = new google.maps.Map(document.getElementById('map'), options)
    var marker = new google.maps.Marker({
        position : {lat: 7.1329854, lng:3.4130884},
        map:map,
    })
    var info = new google.maps.InfoWindow({
        content:`Passenger`
    })
    marker.addListener('click', function() {
        info.open(map, marker)
    })
    var marker2 = new google.maps.Marker({
        position : {lat: 7.0322854, lng:3.2110884},
        map:map,
    })

    var info2 = new google.maps.InfoWindow({
        content: `Passenger`
    })
    marker2.addListener('click', function() {
        info2.open(map, marker2)
    })

    
//  fetting user details and Driver details in on address 
    var marker3 = new google.maps.Marker({
        position : {lat: 6.922854, lng:3.4110884},
        map:map,
    })

    var info3 = new google.maps.InfoWindow({
        content: `Passenger`
    })
    marker3.addListener('click', function() {
        info3.open(map, marker3)
    })
    
    var marker4 = new google.maps.Marker({
        position : {lat: 6.902854, lng:3.3110884},
        map:map,
    })

    var info4 = new google.maps.InfoWindow({
        content: `Passenger`
    })
    marker3.addListener('click', function() {
        info4.open(map, marker4)
    })
    
    var marker5 = new google.maps.Marker({
        position : {lat: 6.922854, lng:3.2110884},
        map:map,
    })

    var info5 = new google.maps.InfoWindow({
        content: `Passenger`
    })
    marker5.addListener('click', function() {
        info5.open(map, marker5)
    })
    
}


// app modal desing code 
//  modal drop down
// close Event here 
// let closeBtn = document.querySelector('.close')
// let closeBtnReg = document.querySelector('#closeReg')
// let loginModal = document.querySelector('.login-modal')
// let registerModal = document.querySelector('#register')
// closeBtn.addEventListener('click', function(){
//     loginModal.style.top="-1000px";
// })
// Second Close Effect
// let closeErr = document.querySelector('.error')
// let smallClose = document.getElementById('cla')
// smallClose.addEventListener('click', function(){
//     closeErr.style.display="none";
// })
// explore button to bring in the login modal
// let explore=document.getElementById('dropbtn')
// explore.addEventListener('click', function () {
//     loginModal.style.top="20%";
// })
//  let exploreReg = document.getElementById("dropbtnReg")
//  exploreReg.addEventListener('click', function () {
//     registerModal.style.top="20%";
// })
// closeBtnReg.addEventListener('click', function(){
//     registerModal.style.top="-1000px";
// })

let connect = document.querySelector('.con')
if(!localStorage.getItem('connection')) {
    
}else {
    connect.style.display="block"
}

function accept() {
    alert("You've accepted")
    alert("You will be redirected shortly")
    let data = JSON.parse(localStorage.getItem('connection'))
    console.log(data)
    console.log(data[0]['connet']= true)
    let reConnect = [
        {
            connet:true
        }
    ]
    localStorage.setItem("connection", JSON.stringify(reConnect))

    console.log(data)
    connect.style.display="none"
    setInterval(function(){
        window.location="confirm-driver.html"
    }, 2000)
}