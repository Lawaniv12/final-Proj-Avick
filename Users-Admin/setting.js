let userId =localStorage.getItem('id')
let driverDetails = JSON.parse(localStorage.getItem("reg"))

driverDetails.filter((items)=> {
    if(items.id === userId) {
        document.getElementById('name').innerHTML = items.name
        document.getElementById('email').innerHTML = items.email
        document.getElementById('phone').innerHTML = items.phone
        // document.getElementById('gender').innerHTML = items.gender
        document.getElementById('')
    }
})