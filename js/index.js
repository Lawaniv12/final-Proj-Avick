let array =['Essential Goods', "Supplies", "Prospects", "People", "Employess"]

// CODE FOR SLIDE SHOW 
let count = 0
let textSliding = document.querySelector('#changing-text')
setInterval(() => {
    textSliding.innerHTML= array[count]
    
     if(count === array.length - 1  ) {
         count = 0;
     }
     count ++
    
}, 1000);

let array2 =['Essential Goods', "Supplies", "Prospects", "People", "Employees", "Ideas", "Interviewees"]
let images = [ 
        {
            reveiw: "As a student, it’s hard to complete my class work around a schedule. I started driving more with Lyft and realized it was the perfect opportunity to make money and work on my own time! Driving with Lyft gives me freedom in my schedule to focus on school, which is my main priority.",
            name: "Harold",
            date: "Driving with Lyft since 2020",
            images: "driver1.png"
        },

        {
            reveiw:"I m a disabled Marine Corps veteran, and because of my disability, I'm no longer able to work in a structured environment. The few hours a week that I drive connects me to my community and gives me extra money to help make ends meet",
            name:"Christine",
            date: "Driving with Lyft since 2020",
            images: "driver2.png"
        },

        {
            reveiw:"My motto is very simple. It doesn't cost you a penny to be nice and kind, but it will cost you everything if you're not. If I'm free and somebody needs my help, I'll be the first one to jump in, in a heartbeat",
            name:"Marry",
            date: "Driving with Lyft since 2020",
            images: "driver4.png"
        },
        {
            reveiw:"My motto is very simple. It doesn't cost you a penny to be nice and kind, but it will cost you everything if you're not. If I'm free and somebody needs my help, I'll be the first one to jump in, in a heartbeat",
            name:"Victor",
            date: "Driving with Lyft since 2020",
            images: "driver1.png"
        },
        {
            reveiw:"My motto is very simple. It doesn't cost you a penny to be nice and kind, but it will cost you everything if you're not. If I'm free and somebody needs my help, I'll be the first one to jump in, in a heartbeat",
            name:"Adroit",
            date: "Driving with Lyft since 2020",
            images: "driver2.png"
        },
        {
            reveiw:"My motto is very simple. It doesn't cost you a penny to be nice and kind, but it will cost you everything if you're not. If I'm free and somebody needs my help, I'll be the first one to jump in, in a heartbeat",
            name:"Jame",
            date: "Driving with Lyft since 2020",
            images: "driver4.png"
        },


]

// CODE FOR SLIDE SHOW 
let count2 = 1
let sliderMinus = document.querySelector('#counter-one')
let slider = document.querySelector('#counter')
let sliderPlusName = document.querySelector('#counterOneName')
let sliderMinusName = document.querySelector('#counter-oneName')
let sliderName = document.querySelector('#counterName')
let sliderPlusDate = document.querySelector('#counterOneDate')
let sliderMinusDate = document.querySelector('#counter-oneDate')
let sliderDate = document.querySelector('#counterDate')
let sliderPlus = document.querySelector('#counterOne')
let slideImage = document.getElementById('slideImage')
let slideMinusImage = document.getElementById('slideImage-one')
let slidePlusImage = document.getElementById('slideImageOne')

    slider.innerHTML= images[count2]['reveiw']
    sliderPlus.innerHTML = images[count2 + 1]['reveiw']
    sliderMinus.innerHTML =images[count2 - 1]['reveiw']
    
    slideImage.innerHTML = `<img src="/imgs/${images[count2]['images']}" class="small-image margin-top">` 
    slidePlusImage.innerHTML = `<img src="/imgs/${images[count2 + 1]['images']}" class="small-image margin-top">` 
    slideMinusImage.innerHTML = `<img src="/imgs/${images[count2 - 1]['images']}" class="small-image margin-top">` 

    sliderName.innerHTML += images[count2]['name']
    sliderPlusName.innerHTML += images[count2 + 1]['name']
    sliderMinusName.innerHTML += images[count2 - 1]['name']

    sliderDate.innerHTML= images[count2]['date']
    sliderPlusDate.innerHTML = images[count2 + 1]['date']
    sliderMinusDate.innerHTML =images[count2 - 1]['date']
setInterval(() => {
    count2 ++
    slider.innerHTML= images[count2]['reveiw']
    sliderPlus.innerHTML = images[count2 + 1]['reveiw']
    sliderMinus.innerHTML =images[count2 - 1]['reveiw']

    sliderName.innerHTML = images[count2]['name']
    sliderPlusName.innerHTML = images[count2 + 1]['name']
    sliderMinusName.innerHTML = images[count2 - 1]['name']

    sliderDate.innerHTML= images[count2]['date']
    sliderPlusDate.innerHTML = images[count2 + 1]['date']
    sliderMinusDate.innerHTML =images[count2 - 1]['date']

    slideImage.innerHTML = `<img src="imgs/${images[count2]['images']}" class="small-image margin-top">` 
    slidePlusImage.innerHTML = `<img src="imgs/${images[count2 + 1]['images']}" class="small-image margin-top">` 
    slideMinusImage.innerHTML = `<img src="imgs/${images[count2 - 1]['images']}" class="small-image margin-top">` 

    
    if(count2 === array.length - 1  ) {
        count2 =   1;
        sliderPlus.innerHTML=images[0]['reveiw']
        sliderPlusName.innerHTML=images[0]['name']
        sliderPlusDate.innerHTML=images[0]['date']
        slidePlusImage.innerHTML = `<img src="imgs/${images[count2 + 1]['images']}" class="small-image margin-top">` 
    }
    // if(count2 === 1 ) {
    //     sliderMinus.innerHTML = array2[0]
    // }else {
    //     sliderMinus.innerHTML = array2[count2 + 1]
    // }

    
}, 6000);

//  modal drop down
// close Event here 
let closeBtn = document.querySelector('.close')
let closeBtnReg = document.querySelector('#closeReg')
let loginModal = document.querySelector('.login-modal')
let registerModal = document.querySelector('#register')
closeBtn.addEventListener('click', function(){
    loginModal.style.top="-1000px";
})
// Second Close Effect
let closeErr = document.querySelector('.error')
let smallClose = document.getElementById('cla')
smallClose.addEventListener('click', function(){
    closeErr.style.display="none";
})
// explore button to bring in the login modal
let explore=document.getElementById('dropbtn')
explore.addEventListener('click', function () {
    loginModal.style.top="20%";
})
 let exploreReg = document.getElementById("dropbtnReg")
 exploreReg.addEventListener('click', function () {
    registerModal.style.top="20%";
})
closeBtnReg.addEventListener('click', function(){
    registerModal.style.top="-1000px";
})

