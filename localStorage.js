<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local Storage</title>
</head>
<body>
 <h2>Local Storage</h2>
    <script>
         /*

         Local Storage is a web storage object which are not sent to server with each request. This data survives a full page refresh and even a browser restart.

        Methods provided by localStorage
           1. setItem(key, value) -> store key/value pair
           2. getItem(key)        -> get the value by key
           3. removeItem(key)     -> remove the key with its value
           4. clear()             -> delete everything
           5. key(index)          -> get the key on a given position
           6. length              -> the  number of stored items


         */

         let key = prompt("Enter key you want to set")
         let value = prompt("Enter value you want to set")

         localStorage.setItem(key,value)
         console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

    </script>
</body>
</html>
