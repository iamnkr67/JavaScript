const user = {
    username: "nitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function a(){
//     let username = "nitesh"
//     console.log(this.username);
// }

// a()

// const a = function () {
//     let username = "nitesh"
//     console.log(this.username);
// }

const a =  () => {
    let username = "nitesh"
    console.log(this);
}


// a()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "nitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()