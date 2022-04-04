import { Rider } from "./db.js";

let userId = sessionStorage.getItem('id')
let riderDetails = JSON.parse(localStorage.getItem("reg"))

riderDetails.filter((items)=> {
    if(items.id === userId) {
        document.getElementById('name').innerHTML = items.name
        document.getElementById('email').innerHTML = items.email
        document.getElementById('phone').innerHTML = items.phone
        document.getElementById('gender').innerHTML = items.gender
        document.getElementById('')
    }
})