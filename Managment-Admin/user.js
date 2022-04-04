let user = JSON.parse(localStorage.getItem("reg"))

user.forEach(element => {
    document.getElementById("body").innerHTML += `
    <tr>
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${element.phone}</td>
    <td>${element.gender}</td>
    <td>Edit</td>
    <td>Rider </td>
  </tr>
    `
});
let riderNum = user.length
console.log(riderNum)
let drivers = JSON.parse(localStorage.getItem("regDriver"))
drivers.forEach(element => {
    document.getElementById("bodyReg").innerHTML += `
    <tr>
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${element.phone}</td>
    <td>${element.gender}</td>
    <td>Edit</td>
    <td>Driver </td>
  </tr>
    `
});
let driverNum = drivers.length
console.log(driverNum)
document.getElementById('rider').innerHTML = `${riderNum} Registered Users`
document.getElementById('driver').innerHTML = ` ${driverNum} Registered Drivers`