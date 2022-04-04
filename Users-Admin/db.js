export let Rider = [
    {
        id : "r001",
        name : "Lawani Victor",
        email: "victorlawani12@gmail.com",
        password: "victor12",
        dob: "June 12 1990",
        gender:"male",
        phone: "08164950695"
    },
    {
        id : "r002",
        name : "Olajide Samson",
        email: "samsonjide@gmail.com",
        password: "samson12",
        dob: "Novermber 8 1990",
        gender:"male",
        phone: "08154191827"
    },
    {
        id : "a003",
        name : "Chinoso",
        email: "victorlawani@gmail.com",
        password: "victor12",
        dob: "June 12 1990",
        gender:"female",
        phone: "08123456789"
    }
]
export let RiderTransaction = [
    {
        id : "r001",
        date: "March 2nd 2020 ",
        amount: "$40",
        transType: "Deposit",
        isSuccess:true,
        method: "cc-mastercard.svg"
    },
    {
        id : "r001",
        date: "March 4th 2022 ",
        amount: "$60",
        transType: "Deposit",
        isSuccess:true,
        method: "Shape (1).svg"
    },
    {
        id : "r002",
        date: "March 4th 2022 ",
        amount: "$60",
        transType: "Deposit",
        isSuccess:true,
        method:"social-color-1-logo-paypal.svg"
    },
    {
        id : "r001",
        date: "March 4th 2022 ",
        amount: "$20",
        transType: "Deposit",
        isSuccess:false,
        method: "cc-mastercard.svg"

    },
    {
        id : "r001",
        date: "March 4th 2022 ",
        amount: "$60",
        transType: "withdraw",
        isSuccess:true,
        method: "cc-mastercard.svg"
    }
]
export let riderTrips = [
    {
        id : "r001",
        date: "March 4th 2022 ",
        from: "Kobape Iyano church, Abule Egba",
        to:"Tech Hub, Ogun state",
        transType: "withdraw",
        isSuccess:true,
        
    },
    {
        id : "r001",
        date: "March 5th 2022 ",
        from: "Isale Igbehin",
        to:"Laderin, Ikereku",
        transType: "withdraw",
        isSuccess:true,
        
    },

    {
        id : "r001",
        date: "March 5th 2022 ",
        from: "Isale Igbehin",
        to:"Laderin, Ikereku",
        transType: "withdraw",
        isSuccess:false,
        
    },
]