// question 1
class Course {
    #price; // specifying private properties
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    get price() {
        return `$ ${this.#price}`;
    }

    set price(val) {
        console.log("SETTER")
        if (val < 0) {
            throw "Cannot set negative value";
        }
        this.#price = val;
    }

    // question 2
    courseRate() {
        const rate = parseFloat(this.length)/this.#price;
        console.log(`You get ${rate.toFixed(2)} mins for each dollar paid`);
    }

    courseSummary() {
        let desc = `Course name: ${this.title}\n` +
            `Course Price: ${this.price}\n` +
            `Course length: ${this.length} mins\n`;
        
        if (this.numOfExercises) {
            desc += `Number of Exercises: ${this.numOfExercises}`;
        }
        console.log(desc);
    }
}

const jsCourse = new Course("JS COURSE", 120, 800);
const pythonCourse = new Course("Python BootCamp", 40, 150);

console.log(jsCourse);
console.log(pythonCourse);

// question 2
jsCourse.courseRate();
pythonCourse.courseRate();

jsCourse.courseSummary();
pythonCourse.courseSummary();

// question 3
class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log("publishing the course...")
    }
}

const practicalCourse = new PracticalCourse("React JS", 200, 199, 60);
const theoryCourse = new TheoreticalCourse("Machine Learning Bootcamp", 300, 299);
console.log(practicalCourse);
console.log(theoryCourse);

practicalCourse.courseRate()
practicalCourse.courseSummary();

theoryCourse.courseRate();
theoryCourse.courseSummary()
theoryCourse.publish();