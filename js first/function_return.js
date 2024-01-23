/* let todos = [
    { createdAt:"2020-10-11", title: "html", status: "completed"},
    { createdAt:"2020-10-11", title: "css", status: "completed"},
    { createdAt:"2020-10-11", title: "js", status: "completed"}, 
]
todos[2].status = "pending"

function webstatus(createdAt,title,status){
    console.log(`In ${createdAt} ${title} is ${status}`);
}

webstatus(todos[0].createdAt, todos[0].title, todos[0].status)

 */


let todos = [
    { createdAt:"2020-10-11", title: "html", status: "completed"},
    { createdAt:"2020-10-11", title: "css", status: "completed"},
    { createdAt:"2020-10-11", title: "js", status: "completed"}, 
]
todos[2].status = "pending"

function printStatus(todos){
    
    console.log(`${todos.title} is created at ${todos.createdAt} and  ${todos.status}`);
}

printStatus(todos[1])
printStatus(todos[2])
printStatus(todos[0])



function returnExample(value){
    return value*2

}
function sum(a,b) {
    return a+b
}
console.log(sum(returnExample(5), (returnExample(2))));
console.log(returnExample(10))

