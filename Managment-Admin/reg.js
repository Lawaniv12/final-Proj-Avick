let arr= []
let reg = document.getElementById('btn')
reg.addEventListener('click', (e)=> {
    e.preventDefault()
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if(fname === "" || lname ==="" || email==="" || username ==="" || password === "") {
        // let erro =document.querySelector("#error2")
        // let closeErr = document.querySelector('.error2')
        // closeErr.style.display="block"
        //      erro.innerHTML = "Incorect login credentials"
        //      document.querySelector('#fname').value=""
        //      document.querySelector('#lname').value=""
        alert("Please non of the input field must be empty")
    }else {
        // let userid  = "r"+ (Rider.length + 1)
        // console.log(userid) 
        
        console.log('Hello')
        let userName = fname + " " +lname;
        let data = {
            id: "r001",
            name : userName,
            email: email,
            password: password,
            dob: "June 12 1990",
            gender:"male",
            phone: "08164950695"
        }
        arr.push(data)
        // Rider.push(data)
        // console.log(Rider)
        console.log(arr)
        localStorage.setItem('Admin',JSON.stringify(arr))
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