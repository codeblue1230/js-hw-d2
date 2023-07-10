//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parseData(aPerson) {
    for (let [key, value] of Object.entries(aPerson)) {
        if (Array.isArray(value) && value.length > 1) {
            console.log(`Favorite ${key} is ${value}`)
        } else if (Array.isArray(value) && value.length == 1) {
            console.log(value)
            for (let [subKey, subValue] of Object.entries(value[0]))
            console.log(subKey, subValue)
        } 
        else {
            console.log(`Favorite ${key} are ${value}`)
        }
    }
}

parseData(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        return (`My name is ${this.name} and I'm ${this.age} years old.`)
    }

    this.addAge = () => {
        this.age++
        return (`1 year has been added to your age. Your age is now ${this.age}.`)
    };
};

let marc = new Person("Marc", 24)
console.log(marc.printInfo())
console.log(marc.addAge())
console.log(marc.addAge())
console.log(marc.addAge())

let shannon = new Person("Shannon", 25)
console.log(shannon.printInfo())


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkStringLength = (aString) => {
    return new Promise((resolve, reject) => {
        if (aString.length > 10) {
            resolve(aString)
        } else {
            reject(aString)
        }
    })
};

checkStringLength("extraordinary")
    .then(() => {
        console.log("Big Word")
    })
    .catch(() => {
        console.log("Small Number")
    })

checkStringLength("small")
.then(() => {
    console.log("Big Word")
})
.catch(() => {
    console.log("Small Number")
})

// Codewars Problems

// Question 1 (I already completed this question using Python)
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8

// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

function numberToString(num) {
    return num.toString()
}

// Question 2 (First time attempting this problem)
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// It's pretty straightforward. Your goal is to create a function that removes the first 
// and last characters of a string. You're given one parameter, the original string. You 
// don't have to worry with strings with less than two characters.

function removeChar(str) {
    return str.slice(1, -1)
}