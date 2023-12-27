// Map
const arr = [5, 1, 3, 2, 6]
//double
console.log(arr.map(i => i * 2))

//triple
console.log(arr.map(i => i * 3))

//binary
console.log(arr.map(i => i.toString(2)))

//Filter
//odd nums
const arr1 = [5, 1, 3, 2, 6, 9]
console.log(arr1.filter(i => (i % 2 != 0)))
function isOdd(x) {
    return x % 2
}
function isEven(x) {
    return x % 2 == 0
}
console.log(arr1.filter(isOdd))
console.log(arr1.filter(isEven))

//Reduce
function findSum(arr1) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i]
    }
    return sum;
}
console.log(findSum(arr1))
// Reduce iterates on each element of array
//Sum
console.log(arr1.reduce((acc, curr) => acc += curr, 0))

//max
console.log(arr1.reduce(function (max, curr) {
    if (curr > max) {
        max = curr
    }
    return max
}
    , 0))


const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
];

// list of full names

console.log(users.map(i => (i.firstName + ' ' + i.lastName)))


//particular age count

const output = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        // acc[curr.age] = ++acc[curr.age]
        acc[curr.age]++
    } else {
        acc[curr.age] = 1
    }

    return acc
}, {})

console.log(output)

//first name of all whoose age is less than 30

const op1 = users.filter(x => x.age < 30).map(x => x.firstName)
console.log(op1)

//using reduce
const op2 = users.reduce(function (acc, curr) {
    if (curr.age < 30) {
        acc.push(curr.firstName)
    }
    return acc

}, [])

console.log(op2)
