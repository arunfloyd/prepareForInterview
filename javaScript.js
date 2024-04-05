//toString
//Didnt change the original array
let bikes = ['Yamaha', 'Honda', 'TVS', 'Bajaj']

console.log(bikes.toString())
    //join
    //concatenate
console.log(bikes.join("*"))
console.log(bikes)
    //pop()
    //remove the last element in the array
console.log(bikes.pop())
console.log(bikes)
    //push()
    //add to the last space in the array
    //changes the original array
console.log(bikes.push('Ducatti'))
console.log(bikes)
    //shift()
    //delete to first of array
    //changes the original array
console.log(bikes.shift())
console.log(bikes)
    //unshift()
    //add to first of array
    //changes the original array
console.log(bikes.unshift('Bentley'))
console.log(bikes)
    //delete 
    //delete elements array
let deleted = ['Hai']
console.log(delete deleted[0])
console.log(deleted)
    //concat()
    //add two or more arrays with it
    //returns new array
let deletes = ['Hai']
console.log(deletes.concat(bikes))
    //sort
    //overwrite original array
console.log(bikes.sort())
    //splice()
    //add or remove array elements
    //over write original arrray
    //syntax = arrayname.splice(index,howmany,item,item)
console.log(bikes.splice(1, 2))
let biker = ['Yamaha', 'Honda', 'TVS', 'Bajaj']
biker.splice(1, 3, 'a', 'b')
console.log(biker)
    //slice
    //it creates a new array
    //syntax = arrayName.slice(start,end)
let bi = ['Yamaha', 'Honda', 'TVS', 'Bajaj']
let bii = bi.slice(1, 3)
console.log(bii)
    //reverese()
    //overwrite the array
console.log(bi.reverse())

//isArray
//checks the Array or not
//syntax =Array.isArray(obj)
console.log(Array.isArray(bi))
    //indexOf
    //gives the output to the user by th eposition of the given values
    //syntax = arrayName.indexOf(value to find)
    //left to right
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(a.indexOf(6, 5))

//lastIndexOf()
//start from right to left
console.log(a.lastIndexOf(3))
console.log(a.lastIndexOf(3, 5))

//find()
//finds the first element satisfy the condition
//syntax = find((element)=>{conditon})
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log("Find:", b.find((element) => element > 4));
//findIndex
//find the index value of the specified condition

//includes
//return true if the array condains the value
//arrayName.includes(value)


//every()
//checks the condition to all the values in the array
//syntax =every((element)=>{/condiotion/})

let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log("Find :", c.every((x) => x >= 1));

//some()
//atleast a element in the array passes


//fill
//fill the value to the array at the specified postion
//syntax =arrayName.fill(value,start,end)

let d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log("Fill ", d.fill('*', 2, 4))

//copyWithin
//values in the array can be passed from one place to another
//copyWithin(target,start,end)

// let e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// console.log(e.copyWithin(0, 1, 5))

// //valueOf
// //returns the aray itself without changing the original array
// console.log("Value: ", e.valueOf())

//forEach()
//each element in the array
//not executed for empty values

const words = ['apple', 'banana', 'orange'];

// Using flatMap to split each word into its characters and flatten the result
const characters = words.flatMap(word => word.split(''));

console.log(characters);
// Output: ['a', 'p', 'p', 'l', 'e', 'b', 'a', 'n', 'a', 'n', 'a', 'o', 'r', 'a', 'n', 'g', 'e']