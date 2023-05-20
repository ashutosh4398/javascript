"use strict";
this.X = "HELLO WORLD";

const thisArg = {
    X : "ashutosh"
};

// // for arrow functions, it doesnt matter, the this argument will be always point to global this
// const someFun = (fname, mname, lname) => {
//     console.log(this.X);
//     console.log(fname + " " + mname + " " + lname );
// }

// const someFun2 = someFun.bind({X: 'FIRST_BIND'}, 'ASHUTOSH');
// const someFun3 = someFun2.bind({X: 'SECOND_BIND'}, 'NAYAN');



// for functions declared using function keyword, this argument will be the one passed to bind method
const someFun = function (fname, mname, lname) {
    console.log(this.X);
    console.log(fname + " " + mname + " " + lname );
}

const someFun2 = someFun.bind(thisArg, 'ASHUTOSH');
const someFun3 = someFun2.bind({X: 'SECOND_BIND'}, 'NAYAN');


someFun3("DHONDKAR");

