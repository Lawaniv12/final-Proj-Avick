// import { Driver } from "./db.js";
let userId = localStorage.getItem("dId")
let driver = JSON.parse(localStorage.getItem("regDriver"))


driver.filter((item)=> {
    if(item.id === userId) {
        document.getElementById('riderName').innerHTML = item.name;
        document.getElementById('riderName2').innerHTML = item.name;

    }
})