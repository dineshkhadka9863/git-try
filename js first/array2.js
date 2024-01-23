/* 
  array
    -elements
    -index
*/

/* 
  object
    let <objectName> = {
        <key> : <value>
        <key> : <value>
        <key> : <value>
        <key> : <value>
    }
    */

let course1 = {
  title: "mern",
  startTime: "3pm",
  endTime: "4pm",
  duration: "1hous",
  status: true,
};
let course2 = {
  title: "qa",
  startTime: "3pm",
  endTime: "4pm",
  duration: "1hous",
  status: true,
};
let courses = [course1,course2]

console.log(courses)


/* let livingRoom = {
    title:"livingRoom",
    color : "green",
    size : "200sq feet",
}
let kitchen = {
    title: "kitchen",
    color : "blue",
    size : "200sq feet",
}
let rooms = [livingRoom,kitchen]

console.log("before","rooms",livingRoom.title)
livingRoom.title = "living"
console.log("before","rooms",livingRoom.title)
 */



let rooms = [
    {
        title:"livingRoom",
        color:"green",
        size : "200sq foot",
    },
    {
        title:"kitchen",
        color:"green",
        size : "200sq foot",
    }
]
rooms[1].title = "ktch"

console.log(rooms[1].title)



let myMobile = {
  brand : "samsung",
  model : "s20",
  color: "white",
}
let myFriendMobile = {
  brand : "apple",
  model : "12",
  color: "white",
}

let mobiles = [
  {
    user: "ram",
    brand : "samsung",
    model : "s20",
    color: "white",
  },
  {
    user: "dinesh",
    brand : "app",
    model : "12",
    color: "white",
  }
]
mobiles[1].brand = "apple"
console.log("dinesh mobile brand is",mobiles[1].brand)
console.log("mobiles",mobiles)


let users= [
  {
    name:{
      firstName: "Ram",
      lastName: "Thapa",
    },
    address: {
      street: "koteshwor",
      ward: "5",
      provience: "3",
    },
    phones: [
      {
        number: "9863xxx",
        opendate: "9feb",
      },
      {
        number: "9863xxx",
        opendate: "9feb"
      }
    ]
  },
  {
    name:{
      firstName: "Dinesh",
      lastName: "Khadka",
    },
    address: {
      street:"kadaghari",
      ward: 8,
      provience: "3",
    },
    phones: [
      {
        number: "9863xxx",
        opendate: "9feb",
      },
      {
        number: "9863xxx",
        opendate: "9feb",
      }
    ]
  }
]
users[1].address.provience = "Bagmati"
users[1].phones[0].opendate = "1jan"
console.log(users)


let todosApiData = {
  data:{
    todos:[
      { title: "html", status: "completed"},
      { title: "css", status: "completed"},
      { title: "js", status: "completed"},
      
    ]
  }
}
todosApiData.data.todos[2].status = "pending"
console.log(todosApiData)

console.log(todosApiData.data.todos[0].title,"is",todosApiData.data.todos[0].status)
console.log(todosApiData.data.todos[1].title," is",todosApiData.data.todos[1].status)
console.log(todosApiData.data.todos[2].title," is",todosApiData.data.todos[2].status)