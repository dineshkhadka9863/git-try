let blogs = [
    {
      title: "Exploring Tomorrow",
      created_at: "2024-01-19T13:01:03.486205+05:45",
    },
    {
      title: "Career in Web ",
      created_at: "2024-01-18T15:02:21.353832+05:45",
    },
    {
      title: "Degrees Dying",
      created_at: "2024-01-17T14:06:24.457394+05:45",
    },
    {
      title: "Career in Digital Marketing",
      created_at: "2024-01-17T11:02:40.936608+05:45",
    },
  ];

  

  function dates(num){
    let blog = blogs[num]
    let {title,created_at} = blog
    console.log(`${title} : ${formatdate(created_at)}`)
  }

  dates(0)
  dates(1)
  dates(2)
  dates(3)

  let members = [
    {
      name: "Ram",
      joined_at: "2024-01-19T13:01:03.486205+05:45",
    },
    {
      name: "Hari",
      joined_at: "2024-01-18T15:02:21.353832+05:45",
    },
    {
      name: "Sita",
      joined_at: "2024-01-17T14:06:24.457394+05:45",
    }
  ];


  function formatdate(date){
    return date.substring(0,8)
  }
  console.log("simplifiedDate",formatdate("24-01-17T14:06:24.457394+05:45"))


  function memberjoined(index){
    let member = members[index]
    let {name,joined_at} = member  // object destructuring
    console.log(`${name} joined at ${formatdate(joined_at)}`)
    return 
  }

  memberjoined(0)
  memberjoined(1)
  memberjoined(2)

  function sum(input1,input2){
    return 
  }
  console.log(sum(5,4))