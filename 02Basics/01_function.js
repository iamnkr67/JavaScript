function sayMyName(){
console.log("N")
console.log("I")
console.log("T")
console.log("E")
console.log("S")
console.log("H")
}

//sayMyName()

// function addTwoNumbers(number1, number2){ //parameter passed
//     console.log(number1 + number2)
// }

//  addTwoNumbers(2, 5)  // arguments passed

// function addTwoNumbers(number1, number2){ //parameter passed
//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// } 
// const result = addTwoNumbers(8,4)
// console.log("Result : ", result)

function loginUserMessage(username){
    if(!username){ // if(username === undefined) 
           console.log("Please enter a username.")
           return
    }
    return `${username}, just logged in`
}

// console.log(loginUserMessage("Nitesh"))

//--------------------------------------------------------------------

// functions with objects and array

// function calculateCartPrice(...num1){ //rest operator 
//        return num1
    
// }

// console.log(calculateCartPrice(200, 400, 600, 800))

const user = {
    username : "Nitesh",
    price : 199
}

function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username : "Sam",
    price : 399
})

//arrays
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 400, 100, 600]));

