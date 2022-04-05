// import { riderTrips } from "./db.js";
// import { RiderTransaction } from "./db.js";

let userWallet = JSON.parse(localStorage.getItem("wallet"))


let userId = localStorage.getItem('id')
userWallet.filter((item)=>{
    if(item.id === userId) {
        if(item.isSuccess === true) {
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
        <div class="flex-space-between green pd radius">
            <h4 class="white-text">${item.amount}</h4>
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
