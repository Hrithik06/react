// // Array Destrucuring
// //Array declaration
// const colors = ['red', 'green', 'blue'];

// // Destructuring assignment
// const [firstColor, secondColor, thirdColor] = colors;

// console.log(firstColor);  // Output: 'red'
// console.log(secondColor); // Output: 'green'
// console.log(thirdColor);  // Output: 'blue'

// const nums  = [1,2,3,4,5,6]
// const [one, two, ...rest] = nums
// console.log(one)
// console.log(two)
// console.log(rest)




// Object Destrucuring
// Object declaration
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     country: 'USA'
// };

// // Destructuring assignment
// const { firstName, lastName, age, gender = 'Male', country } = person;

// console.log(firstName); // Output: 'John'
// console.log(lastName);  // Output: 'Doe'
// console.log(age);       // Output: 30
// console.log(country);   // Output: 'USA'

// console.log(person)

function sum(numbers) {
    console.log(numbers)
    
    // return numbers.reduce((acc, val) => acc + val, 0);
  }
  
  console.log(sum(1, 2));                    // Output: 3
  console.log(sum(1, 2, 3, 4, 5));           // Output: 15
  console.log(sum(2, 4, 6, 8, 10, 12, 14));  // Output: 56
  
