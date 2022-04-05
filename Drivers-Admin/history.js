// import { DriverTrips } from "./db.js";
// import { DriverTransaction } from "./db.js";

let userWallet = JSON.parse(localStorage.getItem("wallet"))


let userId = localStorage.getItem('dId')
userWallet.filter((item)=>{
    if(item.driverId === userId) {
        if(item.isSuccess === true) {
            document.getElementById('history').innerHTML +=`
        <div class="full-width gray margin-top-bottom radius" id="">
        <div class="flex gap">
            <h4><img src="img/Oval (1).svg" alt="" srcset="">Client Pick up location: </h4> 
            <h4> ${item.from}</h4>
        </div>
        <div class="flex gap">
            <h4><img src="img/Oval.svg" alt="" srcset="">Client destination</h4>
            <h4>${item.to}</h4>
        </div>
        <div class="flex-space-between green pd radius">
            <h4 class="white-text"></h4>
            <h5 class="white-text">Completed</h5>
        </div>
    </div>
        `
        }else {
            document.getElementById('history').innerHTML +=`
            <div class="full-width gray margin-top-bottom radius" id="">
            <div class="flex gap">
                <h4><img src="img/Oval (1).svg" alt="" srcset=""></h4> 
                <h4> ${item.from}</h4>
            </div>
            <div class="flex gap">
                <h4><img src="img/Oval.svg" alt="" srcset=""></h4>
                <h4>${item.to}</h4>
            </div>
            <div class="flex-space-between red pd radius">
                <h4 class="white-text">$300</h4>
                <h5 class="white-text">Completed</h5>
            </div>
        </div>
            `
        }
    }
})

userWallet.filter((item)=>{
    if(item.driverId === userId) {
        if(item.isSuccess === true) {
            document.getElementById('history').innerHTML +=`
            <div class="full-width gray margin-top-bottom radius" id="">
            <div class="flex-space-between pd">
                <h4 class="blue-text">${item.transType}</h4> 
                <h4> ${item.date}</h4>
            </div>
            <div class="flex gap">
                <h4><img src="img/${item.method}" alt="" srcset=""></h4>
                <h4> <small>Amount : </small>  $${item.amount}</h4>
            </div>
            <div class=" green pd radius">
                <h5 class="white-text">Completed</h5>
            </div>
        </div>
        `
        }else {
            document.getElementById('history').innerHTML +=`
            <div class="full-width gray margin-top-bottom radius" id="">
            <div class="flex-space-between pd">
                <h4 class="blue-text">${item.transType}</h4> 
                <h4> ${item.date}</h4>
            </div>
            <div class="flex gap">
                <h4><img src="img/${item.method}" alt="" srcset=""></h4>
                <h4> <small>Amount : </small>  $${item.amount}</h4>
            </div>
            <div class=" red pd radius">
                <h5 class="white-text">Completed</h5>
            </div>
        </div>
            `
        }
    }
})