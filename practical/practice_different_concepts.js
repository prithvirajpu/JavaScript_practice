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

arr=[1,2,3,4,5,6];
arr2=[99,98,97,96]
// Map -----------------------creates new array and iterating every element

// const answer=arr.map((n)=>n**2)
// console.log(answer)

// Filter----------------------creating new array and gives the elements that pass the condition

// const answer=arr.filter((n)=>n%2==0)
// console.log(answer)

// Find the square of even and cube of odd--------

// const answer=arr.map((n)=>n%2==0?n**2:n**3)
// console.log(answer)

// Find-------------------------------finding the element if not gives undefined

// const answer=arr.find((n)=>{
//     return n===5
// })
// console.log(answer)

//findIndex------------------------finding the index of the element if not gives undefined

// const answer =arr.findIndex((n)=>{
//     return n===5
// })
// console.log(answer)

//concat--------------------------------merging two arrays together

// const answer=arr.concat(arr2)   
// console.log(answer)

let numbers = [5, 10, 15, 20, 25, 30];
//shift----------------------------
numbers.shift()//removing the first element

// pop-------------------------------
numbers.pop()//removing the last element

//unshift--------------------------
numbers.unshift(100)//adding the element to the first index

console.log(numbers)
const answer=numbers.filter((n)=>n%2==0).map((n)=>n**2)
console.log(answer)

//includes--------------------------
console.log(answer.includes(100))//checking if the element includes in the array

//toString---------------------------
console.log(answer.toString())//convert to string

//join-------------------------------
let ans=numbers.join('---')//to seperate the elements
console.log(ans)

//splice-----------------------------can select some specific elements and remove and add some element to that position 
numbers.splice(0,2,1000,2000)//(startindex,endindex,elementto add here ,can add n elements....)
console.log(numbers)

//slice-----------------------------do not remove the element just fetching from the start index to end index
const fetched=numbers.slice(2,5)
console.log(fetched)

//sort---------------------------------
check=[5,4,6,3,67,1]
console.log(check.sort())

//reverse
console.log(check.reverse())

//isArray
console.log(Array.isArray(check))

//reduce-----------------------=------to summarise the value like max,min,avg,sum
const output=check.reduce((acc,curr)=>{
    //  if (acc<curr){
        acc+=curr
    //  }
     return acc
},0)
console.log(output)