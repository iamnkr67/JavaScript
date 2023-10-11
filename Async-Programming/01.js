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

   -> kaie baar aapka final code depended hota hai kisi aur ke server par, is case mein humein nahi pata hota ki answer uske server se kab laut kar aayega, to hum kaya nahi kr skte is writing sync code, isse nipatne k liye hum log asyn code likh dete hai taaki blocking naa ho aur jab bhi answer aaye humara answer ke respect mein chalne wala code chal jaaye


*/

// setTimeout(callback, timeIn_millisecond)
console.log("hey")
setTimeout(function(){
    console.log("hey 2") // appear after 2 sec 
}, 2000)  
// callback function hamesa async code mein answer aane pe chalta hai

                /**********  JS is not ASYNCHRONOUS **********/



