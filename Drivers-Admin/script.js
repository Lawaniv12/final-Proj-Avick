import { Driver } from "./db.js";
let userId = sessionStorage.getItem("id")

Driver.filter((item)=> {
    if(item.id === userId) {
        document.getElementById('riderName').innerHTML = item.name;
        document.getElementById('riderName2').innerHTML = item.name;

    }
})