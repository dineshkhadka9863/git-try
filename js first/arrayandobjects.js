/* let users = [
    {
        name: "ram",
        addresses: [
            {
                title:"temporary",
                street:"kadaghari",
                ward:"3",
            },
            {
                title:"permanent",
                parmaAddress:"koteshwor",
                ward:"4",
            }
        ]
    },
    {
        name: "sita",
        addresses: [
            {
                title:"temporary",
                street:"baneshwor",
                ward:"3",
            },
            {
                title:"permanent",
                parmaAddress:"koteshwor",
                ward:"4",
            }
        ]
    }
] */
let users = [
    {
        name:"ram",
        address:{
            permanent:{
                district:"kathmandu",
                ward:"4",
            },
            temporary:{
                district:"sindhupalchok",
                ward:"5",
            }
        }
    },
    {
        name:"sita",
        address:{
            permanent:{
                district:"dolakha",
                ward:"4",
            },
            temporary:{
                district:"kathmandu",
                ward:"5",
            }
        }
    }
]
 console.log(users)



 let courses = [
    {
        title:"mern",
        classDuration:"1hour",
        classStarts:"3pm",
        classEnds:"4pm",
        students:[
            {
                name:"Dinesh",
                age:"24",
                phoneNumbers:["9862xxx","9824xx"],
                address:{
                    temporary:{
                        district:"Kathmandu",
                        street:"pepsicola",
                        ward:"4"
                    },
                    permanent:{
                        district:"Dolakha",
                        street:"don't know",
                        ward:"5"
                    }
                },
                educations:[
                    {
                        level:"SEE",
                        passOutYear:"2016AD",
                        GPA:"3.15",
                    },
                    {
                        level:"+2",
                        passOutYear:"2019AD",
                        GPA:"3.1",
                    },
                    {
                        level:"Bachelor",
                        passOutYear:"Not Yet",
                        GPA:"3.15",
                    },
                ]
            },
            {
                name:"Gaurab",
                age:"23",
                phoneNumbers:["9862xxx","9824xx"],
                address:{
                    temporary:{
                        district:"Kathmandu",
                        street:"pepsicola",
                        ward:"4"
                    },
                    permanent:{
                        district:"Khotang",
                        street:"don't know",
                        ward:"5"
                    }
                },
                educations:[
                    {
                        level:"SEE",
                        passOutYear:"2016AD",
                        GPA:"3.55",
                    },
                    {
                        level:"+2",
                        passOutYear:"2019AD",
                        GPA:"3.6",
                    },
                    {
                        level:"Bachelor",
                        passOutYear:"Not Yet",
                        GPA:"3.15",
                    },
                ]
            },
            
        ]
    },
    {title:"qa"}
 ]
 console.log(courses)


let schools = [
    {
        sName:"Monastic",
        classes:[
            {
                level:{
                class:"one",
                students:[
                    {
                        studentName:"Dinesh Khadka",
                        roll:"1",
                        age:"6",
                    },
                    {
                        studentName:"Dinesh Khadka",
                        roll:"1",
                        age:"6",
                    }
                ]
            }
        }
        ]
    }
]
 console.log(schools)