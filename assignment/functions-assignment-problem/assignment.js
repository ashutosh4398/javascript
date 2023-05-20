const sayHello = (name = "", saluation = "Hi", verbose_log = true) => {
  const greeting = saluation + " " + name;
  if (verbose_log) {
    console.log(greeting);
    return;
  }

  return greeting;
};

const checkInput = (cb = () => {}, ...inputs) => {
  if (inputs.length === 0) {
    return console.log(cb());
  }
  for (const inp of inputs) {
    if (!inp) {
      console.log(cb(inp));
    }
  }
};

sayHello("Ashutosh", "Hi");
sayHello("Ashutosh");

const greeting = sayHello("Ashutosh", "Hello", false);
console.log(greeting);

checkInput((inp) => {
  if (typeof inp === "undefined") {
    return "PLEASE PASS SOME INPUT";
  }
  return "HELLO, WE KNOW THAT THE STRING PASSED IS EMPTY, PROCESSING....";
});
