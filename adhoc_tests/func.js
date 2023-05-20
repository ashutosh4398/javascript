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