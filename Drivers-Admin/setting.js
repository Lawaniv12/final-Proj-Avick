

let userI =localStorage.getItem('dId')
let driverDetails = JSON.parse(localStorage.getItem("regDriver"))

driverDetails.filter((items)=> {
    if(items.id === userI) {
        document.getElementById('name').innerHTML = items.name
        document.getElementById('email').innerHTML = items.email
        document.getElementById('phone').innerHTML = items.phone
        // document.getElementById('gender').innerHTML = items.gender
        document.getElementById('')
    }
})