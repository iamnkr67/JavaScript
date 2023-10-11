/*
   Synchronous  ->  single-thread, one operation or program run at a time.

   Asynchronous ->  multi-threaded, more than one operations or programs can run in
                    parallel.  "sare kaam ek sath suru kardo, jiska answer pehle aajaye uska jawaab dedena"

        task a - 5sec
        task b - 2sec
        task c - 15sec
        task d - 1sec

    kaise pata chalta hai ki hum sync code likh rahe hai ya async ? 

   **********************
   *    setTimeout      *
   *    setInterval     *
   *    promises        *            agr ye sb dikhe toh Async code likh rahe hai. 
   *    fetch           *            agar yesa kuch nahi dikhe toh sync code likh  
   *    axios           *            rahe hai jaise "console.log("12)" ye sync code 
   *    XMLHttpRequest  *            kehlayega 
   **********************

   -> kaie baar aapka final code depended hota hai kisi aur ke server par, is case mein humein 
   nahi pata hota ki answer uske server se kab laut kar aayega, to hum kaya nahi kr skte is 
   writing sync code, isse nipatne k liye hum log asyn code likh dete hai taaki blocking naa ho 
   aur jab bhi answer aaye humara answer ke respect mein chalne wala code chal jaaye


*/

// setTimeout(callback, timeIn_millisecond)
// console.log("hey")
// setTimeout(function(){
//     console.log("hey 2") // appear after 2 sec 
// }, 2000)  

// callback function hamesa async code mein answer aane pe chalta hai

                /**********  JS is not ASYNCHRONOUS **********/

// main stack --> execution (sync)
// side-stack --> background-processing, when completes come to main-stack (async)

// console.log("hey");
// console.log("hey2");
// setTimeout(function(){
//     console.log("hey3");
// }, 0);
// console.log("hey4");

/*
  Output will be :
---------------------
 hey
 hey2
 hey4
 hey3
*/


/* 
Explaination : Js synchronous(single-threaded) hai toh phele main-stack me jitna code hoga
wo chalega chahe async code me timeout 0sec kyu na ho...

main stack (sync code)         side stack (async code)
*************                    ************
*           *                    *          *
*-----------*                    *          *
*   hey4    *                    *   hey3   *
*-----------*                    *          *
*    hey2   *                    *          *
*-----------*                    ***********
*    hey    *
*************


 jab main stack khali hoga tab program sidestack ko check karega aur agar result aagya
 hoga tab sidestack ka code main stack mein aajayega and then output karega 

 so, js is not async(multi-threading). asyn code maya hai :)

*/

/*

callback => function hai , ye sirf tab chlta hai jb async code ka completion ho jata hai
-------------
assyn code chalenane k liye
-------------
fetch  
axios 
promises
setTimeout
setInterval
XMLHttpRequest
-------------------

callbacks
then catch
async await

*/

//Promise() -> constructor function hota hai 



// var ans = new Promise((res, rej)=>{
//    if(true){
//     return res();
//    }
//    else
//      return rej();
// })

// ans
// .then(function(){
//     console.log("Resolved");
// })
// .catch(function(){
//     console.log("Reject");
// })
//output : Resolved (if condition is true ), Reject (if cond. is false)

//user will ask for a number between 0 to 9, if the number is below 5 resolve else reject

// var ans = new Promise((res, rej)=>{
//     var num = Math.floor(Math.random()*10)
//     if(num<5){
//         return res();
//     }
//     else
//        return rej();
// })
// ans
// .then(function(){
//     console.log("below");
// })
// .catch(function(){
//     console.log("above");
// })


// sabse pahle ghar par aao, gate kholo gate lagao phir uske baad
// khana pakao instagram chalao sojao kyuki tum thak gaye ho

// var ans = new Promise(function(res, rej){
//     return res("sabse pahle ghar par aao");
// })

// var p2 = ans
// .then(function(data){
//     console.log(data)
//     return new Promise(function(res, rej){
//        return res("gate kholo aur gate lagao")
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data)
//     return new Promise(function(res, rej){
//         return res("Khana Pakko khana khao")
//     })
// })

// var p4 = p3.then(function(data){
//     console.log(data)
//     return new Promise(function(res, rej){
//         return res("Instagram pe reel dekho")
//     })
// })

// var p5 = p4.then(function(data){
//     console.log(data)
//     return new Promise(function(res, rej){
//         return res("sojao")
//     })
// })

//async-wait

/* koi bhi yesa function jisme aap async code likhenge, kyoki async code hai toh aap
 promises ka istemal kar sakte hai, jab uska answer aayega aapko then lagana padega,
us then ko lagane se bachne ke liye, aap async await ka istemal kar sakta hai. */

// async function abcd(){
//     let raw = await fetch(`https://randomuser.me/api/`)
//     let ans = await raw.json();
//     console.log(ans); // pending 

//     //dekho jab bhi koi code async hai aapko uske liye wait karna padta 
//     // hai kyu ki hume nahi pata uska answer kab aayega
// }
// abcd();

// # 5 use cases ekdum real world waale 
// node mein jab db
//fetch
//setTimeout
//setInterval


// [concepts aside]
//concurrency and parallelsim 
//concurrency => js mein sync code and async ek saath process ho raha tha ye hai concurrency
//parallelism =>  focus jaada karta hai different processors and unke cores par kaam ko chalaane par
//throttling => kisi code ko control karna number of executions