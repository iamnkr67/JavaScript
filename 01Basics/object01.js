//objects

//singelton  -> Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally

// Object.create


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Nitesh",
    "full name" : "Nitesh Kumar",
    age : 18,
    [mySym]: "mykey1",
    location : "Siwan",
    email : "nitesh@google.com",      
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

 //console.log(JsUser.email) // got output, but not standard to use JsUser.email
//  console.log(JsUser["email"]) // standard accessing of objects
//  console.log(JsUser["full name"])
//  console.log(JsUser[mySym])

//  console.log()

 JsUser.email = "nitesh@nkr.com"
 //Object.freeze(JsUser)  // no changes can be done now as it freezes JsUser 
 JsUser.email = "nitesh@microsoft.com"

//  console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User")
 }

 JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
 }

 JsUser.greeting()
 JsUser.greetingTwo()

