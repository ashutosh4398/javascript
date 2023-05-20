function startGame() {
    console.log("GAME STARTED");
}

startGame();

const obj = {
    greet: startGame, // method
    newGreet: function() { // method
        console.log("new greet");
    }
};

obj.greet();
obj.newGreet();


const getFullName = function(
    fname,
    lname = fname.toUpperCase() === "ASHUTOSH"
                ? "DHONDKAR"
                : undefined
) {
    console.log(fname + " " + lname);
}

getFullName("a");


// we can pass objects as default arguments unlike python it does not results into mutability issues
const addUp = (args = []) => {
    let numSum = 0;
    for(const num of args) {
        numSum += num;
    }
    args.push("ashutosh");
    console.log(args);
    return numSum;
}

console.log(addUp());
console.log(addUp([1]));
console.log(addUp([1,2,3]));


const _addUsingRestOp = (...numbers) => {
    let sum = 0;
    console.log(typeof numbers); // object
    console.log(numbers); // [ 1, 2, 3, 10 ]
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

// we can use rest operator similar to args in python
const addUsingRestOp = (...numbers) => {
    numbers = [...numbers, 10];
    return _addUsingRestOp(...numbers);
}

console.log(addUsingRestOp(1,2,3));


// using arguments keyword where functions are defined using function keyword
const subMe = function() {
    let result = 0;
    console.log(typeof arguments); // object
    console.log(arguments); // [Arguments] { '0': 1, '1': 10 }
    for (const num of arguments) { // DONT USE IT IN PRODUCTION, NOT A GOOD APPROACH. WAS USED BEFORE REST OPERATOR
        result -= num;
    }
    return result;
}

console.log(subMe(1,10));