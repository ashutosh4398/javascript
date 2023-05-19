function greet() {
    // creating a block scope for testing var availability
    {
        var name = "Ashutosh";
    }
    console.log(name);
}

greet();