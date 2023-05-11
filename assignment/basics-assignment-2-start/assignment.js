const task3Element = document.getElementById('task-3');

function greetOnStart() {
    alert("Hey there!");
}

function sayHelloToLoggedinUser(username) {
    alert(`Hello ${username}!`);
}

function generateFullName(fname, mname, lname) {
    return fname + mname + lname
}

greetOnStart();
sayHelloToLoggedinUser("Ashutosh");

task3Element.addEventListener('click', greetOnStart);
alert(generateFullName("Ashutosh", "Nayan", "Dhondkar"));

