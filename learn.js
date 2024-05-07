//Define function welcome() that will receive one argument, your name, and greet you with your name.
function welcome(name) {
  return `Hello, ${name}!`;
}
//Define a function printToTwenty() that will print the numbers from 0 to 20 to the console ( don’t forget we have to invoke/call the function to see it working )
function printToTwenty() {
  for (let i = 0; i <= 20; i++) {
    console.log(i);
  }
}
//Define a function printNumbers() that receives one argument and prints the numbers from 0 to whatever number we pass to it as an argument

function printNumbers(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}
//Define a function printArrElements(someArr) that will loop through array and print all the elements of that array. Use the following array to pass it as an argument to the function you have just defined:
function printArrElements(someArr) {
  for (let i = 0; i < someArr.length; i++) {
    console.log(someArr[i]);
  }
}