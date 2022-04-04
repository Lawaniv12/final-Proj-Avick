import { Rider } from "./db.js";
let userId = sessionStorage.getItem("id")
let allRider = JSON.parse(localStorage.getItem("reg"))
console.log(allRider)

allRider.filter((item)=> {
    if(item.id === userId) {
        document.getElementById('riderName').innerHTML = item.name;
        document.getElementById('riderName2').innerHTML = item.name;

    }
})