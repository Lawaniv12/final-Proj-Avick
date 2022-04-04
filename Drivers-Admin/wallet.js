
import { DriverTransaction } from "./db.js";

let userId = sessionStorage.getItem('id')
DriverTransaction.filter((item)=>{
    if(item.id === userId) {
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