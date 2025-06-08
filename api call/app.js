console.log("api calling ")

// function 
// 3 type 

// function declaration
async  function getData(){
    const response =await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"GET"
    })

   //  string 
   //JSON.parse() -> string -> convert jvascript object
   const resData = await response.json(); // jvascript object
   console.log(resData)
}

getData();



// function expressions
// arrow function   -> react / nextjs 



// api data -> json string 
// convert -> .json()
// JSON.parse 


// add two number 

function add(a,b){
    console.log(a+b)
}
add(3,5);

// sub mul div

// data type in javascript 
// 1 primitive 


// primitive : trick ☀️sun-bs🚎

// s -> string 
// u -> undefined
// n -> number 
// n -> null
// b -> boolean 
// b -> BigInt
// s -> symbol
// properties -> immutable (value not changed)
// typeof -> give the data type of the variable

const name = "snhu"

console.log(typeof name); // string


// 2 non -pirmitive 

