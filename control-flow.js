//  Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
 function changeArray(arr) {
    // Multiply the first four items by themselves
     for (let i = 0; i < 4 && i < arr.length; i++)
     { arr[i] *= arr[i]; }
     // Add 10 to the last two items
      for (let i = arr.length - 2; i < arr.length; i++)
       { arr[i] += 10; }
       return arr; }
       const changedArray = changeArray([2, 3, 4, 5, 6, 7]);
       console.log(changedArray);
    //Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
    let arrNum = [ 1, 2, 3, 4, 5,6,7,8,9];
     let i = 0;
      while (i < arrNum.length)
       { if (arrNum[i] === arrNum[3])
         { break; }
          console.log(arrNum[i]);
          i++; }
    //Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
    function processFruits(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (i === 1) {
                continue; }
                console.log(arr[i]); } }
                let fruits = ['Apple', 'Plum', 'Banana', 'Strawberries', 'Kiwi'];
                processFruits(fruits);
   // Write a function that accepts an array of strings and console.logs each element using a for loop.
    function logArrayElements(arr)
    { for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); } }
 // Example usage: let names = ['Mary', 'Cynthia', 'Kelvin', 'Jane']; logArrayElements(names);

   //Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 
         function reverseString(str){
        let reversed = '';
         let i = str.length - 1;
         while (i >= 0)
         { reversed += str[i]; i--; }
        return reversed; };
          let reversedString = reverseString("My name is Cynthia");
          console.log(reversedString);