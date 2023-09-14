
// const tinderUser = new Object() //singelton object

const tinderUser = {}  //non-singelton object

 tinderUser.id = "123abc"
 tinderUser.name ="Sammy"
 tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser ={
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "nitesh",
            lastname : "kumar"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1 : "a", 
    2 : "b",
    3 : "c"
}
const obj2 = {
    4 : "d",
    5 : "e",
    6 : "f"
}

// const obj3 = {
//     obj1, obj2
// }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "nkr@nkr"
    },

    {
        id : 2,
        email : "nkr@n"
    }
]

// console.log(users[1].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'))
// console.log(tinderUser.propertyIsEnumerable('name'))

const course = {
    coursename : "js",
    price : "999",
    courseInstructor : "nitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course //destructuring 
// console.log(courseInstructor)
console.log(instructor)

// {
//     "name" : "Nitesh",
//     "coursename" : "Js",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]


