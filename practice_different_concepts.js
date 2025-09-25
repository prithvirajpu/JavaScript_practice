// switch statement
let day=5
switch (day){
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
}

// Function
function total(a,b){
    console.log(a+b)
}
total(10,20)
// Adding the function to a variable 
const multiple=function(a,b){
    console.log(a*b) 
}
multiple(10,2)

// Arrow function
const arrow =(a,b)=>{
    return a+b
}
console.log(arrow(10,2))

// Arrow function with single line of code
const single_line=(x,y)=>x*y
console.log(single_line(10,9))

// Array methods 

// Map
const arr=[1,2,3,4,5,6]
let answer=arr.map(i=>i*i)
console.log(answer)
// Filter
let result=arr.filter(i=>i%2==0)
console.log(result)