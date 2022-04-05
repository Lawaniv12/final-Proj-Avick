let arr = []
arr.push(
    {
        id: "",
    name : "",
    email: "",
    password: "",
    dob: "",
    gender:"",
    phone: "",
    // bvn : userBvn
    }
)
if(!localStorage.getItem("regDriver")) {
localStorage.setItem("regDriver", JSON.stringify(arr))
}else {
    console.log("Already set")
}
// creating a users login for getting users data from localsgitrafe
let login = document.querySelector('#lsubmit')
let driver = JSON.parse(localStorage.getItem("regDriver"))
login.addEventListener('click', (e) => {
    e.preventDefault()

    let userLogin = document.querySelector("#lusername").value
    let loginPass = document.querySelector("#lpassword").value
    
     driver.some((item)=> {
        if(item.email === userLogin && item.password === loginPass) {
            
                //  alert("You will be redirect shortly")
                let id = item.id
                 localStorage.setItem('dId', id)
               document.querySelector('#lusername').value=""
                 document.querySelector('#lpassword').value=""
    
               setInterval(()=>{
                  window.location="../Drivers-Admin/index.html"
                 }, 3000)
    
            }else {
                alert("Incorrect login details !")
             }
            
         })
    
        
    
    loginPass=""
})



let reg = document.getElementById('reg')
reg.addEventListener('click', (e)=> {
    e.preventDefault()
  
    let arr = JSON.parse(localStorage.getItem("regDriver"))
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let username = document.getElementById('Dlicense').value
    let password = document.getElementById('password').value
    let bvn = document.getElementById('bvn').value;

    if(fname === "" || lname ==="" || email==="" || username ==="" || password === "" || bvn === "") {
        // let erro =document.querySelector("#error2")
        // let closeErr = document.querySelector('.error2')
        // closeErr.style.display="block"
        //      erro.innerHTML = "Incorect login credentials"
        //      document.querySelector('#fname').value=""
        //      document.querySelector('#lname').value=""
        alert("Please non of the input field must be empty")
    }else {
        let userid  = "r"+ (arr.length + 1)
        // console.log(userid) 
        
        console.log('Hello')
        let userName = fname + " " +lname;
        let data = {
            id: userid,
            name : userName,
            email: email,
            password: password,
            dob: "June 12 1990",
            gender:"male",
            phone: "08164950695",
            // bvn : userBvn
        }
        arr.push(data)
        // Rider.push(data)
        // console.log(Rider)
        console.log(arr)
        localStorage.setItem('regDriver',JSON.stringify(arr))
        alert('Registration Successful')
        document.getElementById('fname').value = "";
        document.getElementById('lname').value = '';
        document.getElementById('email').value="";
        document.getElementById("username").value = "";
        document.getElementById("password").value ="";
        // let erro =document.querySelector("#error2")
        // let closeErr = document.querySelector('.error2')
        // closeErr.style.backgroundColor="green"
        // closeErr.style.display="block"
        //      erro.innerHTML = "Reg successfull you will be redirect to login"
        //      document.querySelector('#fname').value=""
        //      document.querySelector('#lname').value=""

        
        //      setInterval(()=>{
        //         registerModal.style.display ="none"
        //     loginModal.style.top="10%"
        //     }, 3000)
            
    }
    
})