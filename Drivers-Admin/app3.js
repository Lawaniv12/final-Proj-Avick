// import { Drivers } from "../Drivers-Admin/db.js"

// console.log(Drivers)
function initMap() {
    var options = {
        zoom : 10,
        center: {lat:7.1329854, lng:3.4130886},
    }
    var map = new google.maps.Map(document.getElementById('map'), options)


    var marker2 = new google.maps.Marker({
        position : {lat: 7.0322854, lng:3.2110884},
        map:map,
    })

    var info2 = new google.maps.InfoWindow({
        content: `
            <p> Your next destination </p>
        `
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
        content: `
                <p> Your current location</p>
         </a>`
    })
    marker3.addListener('click', function() {
        info3.open(map, marker3)
    })
    
    var line = new google.maps.Polyline({
            path: [{lat: 7.0322854, lng:3.2110884}, {lat: 6.922854, lng:3.4110884},],
             map: map
            });
    
    
}

let countbtn = document.getElementById('dropbtnReg')
let end = document.getElementById('end-show')
let count = 0;
countbtn.addEventListener('click', function() {
    let time = document.getElementById('timer') 
    count = 0;
    setInterval(()=>{
        count++
        time.innerHTML = `Time: ${count} seconds`
    }, 1000)
    end.style.display="block";
    countbtn.style.display='none'
    localStorage.removeItem("connection")

})

end.addEventListener('click', function(){
    document.getElementById('timer').style.display="none"
    sessionStorage.setItem('time', count)
    setInterval(function(){
        window.location="payment.html"
        
    },1000)
    
})

// // app modal desing code 
// //  modal drop down
// // close Event here 
// let closeBtn = document.querySelector('.close')
// let closeBtnReg = document.querySelector('#closeReg')
// let loginModal = document.querySelector('.login-modal')
// let registerModal = document.querySelector('#register')
// closeBtn.addEventListener('click', function(){
//     loginModal.style.top="-1000px";
// })
// // Second Close Effect
// // let closeErr = document.querySelector('.error')
// // let smallClose = document.getElementById('cla')
// // smallClose.addEventListener('click', function(){
// //     closeErr.style.display="none";
// // })
// // explore button to bring in the login modal
// // let explore=document.getElementById('dropbtn')
// // explore.addEventListener('click', function () {
// //     loginModal.style.top="20%";
// // })
//  let exploreReg = document.getElementById("dropbtnReg")
//  exploreReg.addEventListener('click', function () {
//     registerModal.style.top="20%";
// })
// closeBtnReg.addEventListener('click', function(){
//     registerModal.style.top="-1000px";
// })
