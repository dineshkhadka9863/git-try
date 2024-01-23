
let todos = [
  { createdAt:"2020-10-11", title: "html", status: "completed"},
  { createdAt:"2020-10-11", title: "css", status: "completed"},
  { createdAt:"2020-10-11", title: "js", status: "completed"}, 
]
  todos[2].status = "pending"
  
  console.log(`${todos[0].title} is ${todos[0].status}`)
  console.log(todos[1].title,"is",todos[1].status)
  console.log(todos[2].title," is",todos[2].status)

/* string literal or template literal
   back tick   aabove tab
 */

  let firstName = "Dinesh"
  let lastName = "Khadka"
  let fullName = `${firstName} ${lastName}`

  console.log(fullName)


//   function

function calculateSum(a,b){
    console.log(`${a}+${b} = ${a+b}`)
}

calculateSum(1,2)
calculateSum(3,5)


function calculateDifference(input1, input2){
    console.log(`${input1} - ${input2} = ${input1 - input2}`)

}

calculateDifference(5,3)