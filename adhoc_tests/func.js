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
                : lname
) {
    console.log(fname + " " + lname);
}

getFullName("a");