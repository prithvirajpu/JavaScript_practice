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