// let arr = [1,2,[3,[4,5,6],7],8,9]
// let newArr = []

// function flatten(array) {
//   for (let item of array) {
//     if (Array.isArray(item)) {
//       flatten(item); // recursive call
//     } else {
//       newArr.push(item);
//     }
//   }
// }

// flatten(arr);
// console.log(newArr);

// let input = [
//     {
//         name: "John",
//         city: "New York",
//     },
//     {
//         name: "Alice",
//         city: "London",
//     },
//     {
//         name: "Bob",
//         city: "New York",
//     }
// ];

// let grouped = {};
// for (let person of input) {
//     if (!grouped[person.city]) {
//         grouped[person.city] = [];
//     }
//     grouped[person.city].push(person);
// }
// console.log(grouped);

// const convertTemp = (celciusTemp=0) => {
//     let farenheitTemp = 9/5 * celciusTemp + 32;
//     return farenheitTemp;
// }

// const userInput = document.querySelectorAll('.celciusTempBtn');
// for(let i = 0; i < userInput.length; i++){
//     const parsed = parseFloat(userInput[i].innerText);
//     const temp = isNaN(parsed) ? 0 : parsed;
//     userInput[i].addEventListener('click', () => {
//     console.log(convertTemp(temp));
// })
// }

// const truncateFn = (str) => {
//     if(str.length > 20){
//         console.log(str.substring(0,20) + '...')
//     }
// }

// truncateFn('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

// let today = new Date();
// let day = today.getDay();
// let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// console.log(`Today is: ${dayList[day]}`);

// let hours = today.getHours();
// let minutes = today.getMinutes();
// let seconds = today.getSeconds();

// let ampm = hours >= 12 ? 'PM' : 'AM';
// hours = hours % 12;
// hours = hours ? hours : 12; // the hour '0' should be '12
// minutes = minutes < 10 ? '0' + minutes : minutes;
// seconds = seconds < 10 ? '0' + seconds : seconds;

// let currentTime = `${hours}: ${minutes}: ${seconds} ${ampm}`;
// console.log(`Current Time: ${currentTime}`);

// let currentDate = new Date();
// let dd = currentDate.getDate();
// let mm = currentDate.getMonth() + 1;
// let yyyy = currentDate.getFullYear();

// if(dd || mm < 10){
//     dd = dd < 10 ? '0' + dd : dd;
//     mm = mm < 10 ? '0' + mm : mm;
// }

// console.log(currentDate = mm + '-' + dd + '-' + yyyy);
// console.log(currentDate = dd + '-' + mm + '-' + yyyy);
// console.log(currentDate = mm + '/' + dd + '/' + yyyy);
// console.log(currentDate = dd + '/' + mm + '/' + yyyy);

// let calculateAreaOfTriangle = (a,b,c) =>{
//     let s = (a + b + c)/2;
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
//     console.log(area);

// }

// calculateAreaOfTriangle(5,6,7)

// let rotateString = (str) => {
//     let temp = [];
//     // let strArr = str.split('');
//     return str.split('').reverse().join('');

//     // return temp.join('');
// }

// console.log(rotateString('w3resource'));

// const checkLeapYear = (year) => {
//     return (year % 100 === 0 ? year % 400 === 0 : year % 4 ===0)
// }

// console.log(checkLeapYear(2000));
// console.log(checkLeapYear(2021));
// console.log(checkLeapYear(2024));

// const checkFirstDayAsSunday = () => {
//     for (let y = 2014; y <= 2050 ; y++){
//         let day = new Date(y,0,1).getDay();
//         if(day === 0) {
//             console.log(`1st January of ${y} is a Sunday`);
//         }
//     }
// }

// checkFirstDayAsSunday()

//    let num = Math.ceil(Math.random() * 10);

// let inp = window.prompt("Enter a number between 1 and 10");
// if(inp === num){
//     console.log("Congratulations! You guessed the number.");
// }
// else{
//     console.log(`Sorry, the number was ${num}. Better luck next time!`);
// }

// let fileN = 'index.js';
// let extension = fileN.split('.').pop();
// console.log(`The extension of the file is: ${extension}`);

// let val = 13;
// let givenInp = window.prompt('Enter a number:');
// if(val > givenInp){
//     console.log(val - givenInp);
// }
// else {
//     console.log(2*(givenInp - val));
// }

// const checkSum = (n1, n2) => {
//     if (n1 + n2 == 50 || n1 == 50 || n2 == 50){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(checkSum(20, 30));
// console.log(checkSum(50, 0));

// const checkPyPresence = (str) => {
//     str.split().splice(0, 2, 'o');
// }

// console.log(checkPyPresence('node'));

// const swap = (str) => {
//     let final = [];
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++){
//         final.push(arr[i].charAt(arr[i].length - 1) + arr[i].slice(1, arr[i].length - 1) + arr[i].charAt(0));
//     }
//     return final.join(' ');
// }

// console.log(swap('world'));

// const findLargest = (arr) => {
//     let largest = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             return largest = arr[i]
//         }
//     }
// }

// console.log(findLargest([1, 2, 3, 4, 5, 8]));

// const is_array = (value) => {
//     Array.isArray(value) ? console.log('true') : console.log('false');
// }

// is_array('w3resource');
// is_array([1, 2, 3, 4, 5]);

// const cloneArr = (arr) => {
//     let newArr = [];
//     for (let i = 0; i<arr.length; i++){
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// console.log(cloneArr([1, 2, 3,[4, 5]]) );

// const joinArrElems = (arr) => {

//         let res = '';
//     for (let i = 0; i < arr.length; i++){
//      res = res + arr[i];
//     }
//     return res;
// }

// console.log(joinArrElems(['w', '3', 'r', 'e', 's', 'o', 'u', 'r', 'c', 'e']));

// const insertDashes = (num) => {
//     let arr = num.toString().split('');
//     let a = [];
//     for(let i = 1; i < arr.length; i++){
//         if(parseFloat(arr[i-1])%2 == 0 && parseFloat(arr[i])%2 == 0){
//             a.push('-',arr[i])
//         }
//         else{
//             a.push(arr[i]);
//         }
//     }
//     return a.join('');
// }

// console.log(insertDashes(205468)); // "0-2-4-6-8"

// let items = [-5,8,9,0,1,2,4,-4,-1];

// // Sort the array in ascending order
// items.sort(function(a, b) {
//   return a - b;
// });

// // Display the sorted array
// console.log("Sorted array in ascending order:");
// console.log(items);

// const checkMostFrequent = (arr) => {
//     let frequency = {};
//     for(let i = 0; i < arr.length; i++){
//         if(!frequency[arr[i]]){
//             frequency[arr[i]] = 1;
//         }
//         else {
//             frequency[arr[i]]++;
//         }
//     }
//     return frequency;
// }

// console.log(checkMostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])); // { '1': 2, '2': 2, '3': 2, '4': 2, '5': 2, '6': 2, '7': 2, '8': 2, '9': 2 }

// const printNestedArrayElems = (arr) => {
//     for (let i = 0; i < arr.length; i++){
//         let rowArr = [];
//         if (Array.isArray(arr[i])){
//             for(let j = 0; j < arr[i].length; j++){
//                 rowArr.push(`'${arr[i][j]}'`);
//             }
//         }
//         console.log(`Row ${i + 1}: ${rowArr.join(', ')}`);

//     }
// }

// printNestedArrayElems([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]])

// const sumOfSquares = (num) => {
//     let sum = 0;
//     let mul  = 1;
//     let arr = num.toString().split('');
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + Math.pow(parseFloat(arr[i]),2);
//         mul = mul * parseFloat(arr[i]);
//     }
//     return [sum, mul];
// }

// console.log(sumOfSquares(1234));

// const displayNum = (num) => {
//     let inputNum = document.getElementsByTagName('input').value;
//     let showNum = document.querySelector('.show_num');
//     showNum.innerText = inputNum;
//     console.log(inputNum);

// }

// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// let o = ["th","st","nd","rd"];

// const sumOfArraysByIndex = (arr1, arr2) => {
//     let sum = 0
//     for (let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             sum = arr1[i] + arr2[j];
//             if (i === j) {
//                 console.log(`Sum of elements at index ${i} is: ${sum}`);
//             }
//             else {
//                 console.log(`Sum of elements at index ${i} and ${j} is: ${sum}`);
//             }

//         }
//     }
//     console.log(sum);
// }

// // array1 = [1,0,2,3,4];
// // array2 = [3,5,6,7,8,13];

// sumOfArraysByIndex([1,0,2,3,4], [3,5,6,7,8,13]);

// // Function to calculate the sum of corresponding elements from two arrays
// function Arrays_sum(array1, array2) {
//   // Initialize an empty array to store the sum of corresponding elements
//   var result = [];

//   // Initialize counters for iterating through the arrays
//   var ctr = 0;
//   var x = 0;

//   // Check if array1 is empty, return an error message if true
//   if (array1.length === 0)
//     return "array1 is empty";

//   // Check if array2 is empty, return an error message if true
//   if (array2.length === 0)
//     return "array2 is empty";

//   // Iterate through arrays until the end of either array is reached
//   while (ctr < array1.length && ctr < array2.length) {
//     // Calculate the sum of corresponding elements and push it to the result array
//     result.push(array1[ctr] + array2[ctr]);
//     // Increment the counter
//     ctr++;
//   }

//   // Check if array1 is exhausted
//   if (ctr === array1.length) {
//     // Append the remaining elements from array2 to the result array
//     for (x = ctr; x < array2.length; x++) {
//       result.push(array2[x]);
//     }
//   } else {
//     // Append the remaining elements from array1 to the result array
//     for (x = ctr; x < array1.length; x++) {
//       result.push(array1[x]);
//     }
//   }

//   // Return the resulting array
//   return result;
// }

// // Output the result of the function with sample arrays
// console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

// let l1 = window.prompt('Enter array size')

// let array1 = []
// let array2 = []
// for(let i = 0; i < l1; i++){
//     array1.push(Math.ceil(Math.random() * 10))
//     array2.push(Math.ceil(Math.random() * 10))
// }

// let finalArray = array1.concat(array2);
// console.log(finalArray);

// for(let j = 0; j < finalArray.length - 1; j++){
//     let min_idx = j;
//     for(k = j+1; k < finalArray.length; k++){
//         if(finalArray[min_idx] > finalArray[k]){
//             min_idx = k;
//         }
//     }
//     let temp = finalArray[j];
//     finalArray[j] = finalArray[min_idx];
//     finalArray[min_idx] = temp;
// }
// console.log(finalArray);

// const evenLetters = (sentence) => {
//     let arrayOfStrs = sentence.split(' ')
//     console.log(arrayOfStrs.filter((item) => item.length%2===0).join(' '));

// }

// evenLetters('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.');

// const ifPalindrome = (word) => {
//     let wordArr = word.split('')
//     let reversedword = [];
//     for(let i = wordArr.length-1; i>=0; i--){
//         reversedword.push(wordArr[i])
//     }

//     if(word.toLowerCase() === reversedword.join('').toLowerCase()){
//         console.log('Palindrome');
//     }
//     else{
//         console.log('Not Palindrome');

//     }
// }

// ifPalindrome('madam');
// ifPalindrome('housewife');
// ifPalindrome('SOS');
// ifPalindrome('peep');
// ifPalindrome('wow');
// ifPalindrome('examples');
// ifPalindrome('palindrome');

// const ifArmstrong = (num) => {
//     let num1 = num;
//     let num2 = num;
//     let sum = 0;
//     let digits = 0;
//     while (num2 > 0) {
//         digits = digits + 1;
//         num2 = parseInt(num2 / 10);
//     }
//     console.log(digits)
//     do {
//         sum += Math.pow(num1%10, digits);
//         num1 = parseInt(num1 / 10);
//     } while(num1 > 0);
//     return num === sum;
// }

// console.log(ifArmstrong(123) ? "Armstrong" : "Not Armstrong");

// const isPalindrome = (num) => {
//     let num1 = num;
//     let rnum = 0;
//     while(num1 > 0) {
//         rnum = ((rnum*10) + (num1%10))
//         num1 = parseInt(num1/10)
//     }
//     return num === rnum;
// }

// console.log(isPalindrome(123) ? "Palindrome" : "Not Palindrome");

// const binarySearch = (arr, n) => {
//     arr.sort((a, b) => a - b);
//   let lowerb = 0;
//   let upperb = arr.length - 1;
//   while (lowerb <= upperb) {
//     let midv =  Math.floor((lowerb + upperb) / 2);
//     if (arr[midv] == n) {
//       console.log(`Found at position ${midv}`);
//     } else if (arr[midv] < n) {
//       lowerb = midv + 1;
//     } else if (arr[midv] > n) {
//       upperb = midv - 1;
//     }
//     else{
//         console.log('Not Found');
        
//     }
//   }
// };

// console.log(binarySearch([12,33,42,11,56,888,34,900,23,10], 888));

// const binarySearch = (arr, n) => {
//   arr.sort((a, b) => a - b); // Make sure array is sorted

//   let lowerb = 0;
//   let upperb = arr.length - 1;

//   while (lowerb <= upperb) {
//     let midv = Math.floor((lowerb + upperb) / 2);

//     if (arr[midv] === n) {
//       console.log(`Found ${n} at position ${midv}`);
//       return midv;
//     } else if (arr[midv] < n) {
//       lowerb = midv + 1;
//     } else {
//       upperb = midv - 1;
//     }
//   }

//   console.log(`${n} not found`);
//   return -1;
// };

// // Test with unsorted array
// console.log(binarySearch([12, 33, 42, 11, 56, 888, 34, 900, 23, 10], 888));

const findLongestPalindromicStr = (str) => {
  let words = str.split(" ");
  let palindromeWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].split("").reverse().join("")) {
      palindromeWords.push(words[i]);
    }
  }
  if (palindromeWords.length === 0) {
    console.log("No words found!");
    return;
  }
  let longestWord = '';
  for (let i = 0; i < palindromeWords.length; i++) {
    if (palindromeWords[i].length > longestWord.length) {
      longestWord = palindromeWords[i];
    }
  }
  console.log(longestWord);
};

findLongestPalindromicStr(
  "racecar Madam Arora saw a and a civic parked near a level radar beside the noon kayak."
);

