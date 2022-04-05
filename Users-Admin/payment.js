let time = sessionStorage.getItem("time")
console.log(time)

document.getElementById('time').innerHTML =`${time}seconds`;

let distance = sessionStorage.getItem('distance')
console.log(distance)
document.getElementById('km').innerHTML = `${distance}mi`

let amount = (+distance * 20) + time  
console.log(amount)
document.getElementById("amount").innerHTML = ` Amount : $ ${amount}`
sessionStorage.setItem('amount', amount)