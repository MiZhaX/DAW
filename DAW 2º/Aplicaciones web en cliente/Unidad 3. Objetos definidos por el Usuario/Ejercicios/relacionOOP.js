// Task 1
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(food){
        if(this.stomach.length < 10) this.stomach.push(food);
        else console.log(this.name + " tiene el estómago lleno");
    }

    poop(){
        this.stomach = [];
    }

    toString(){
        console.log(this.name + ", " + this.age);
    }
}

// Task 2
class Car{
    constructor(model, milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons){
        this.tank += gallons;
    }

    drive(distance){
        if((distance / this.milesPerGallon) > this.tank){
            this.odometer += gallons * this.milesPerGallon;
            return "I ran out of fuel at " + this.odometer + " miles!";
        } else{
            this.tank -= distance / this.milesPerGallon;
            this.odometer += distance;
        }
        
    }
}

// Task 3
class Lambdasian {
    constructor({ name, age, location }) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Task 4
class Instructor extends Lambdasian {
    constructor({ name, age, location, specialty, favLanguage, catchPhrase }) {
        super({ name, age, location });
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

// Task 5
class Student extends Lambdasian {
    constructor({ name, age, location, previousBackground, className, favSubjects }) {
        super({ name, age, location });
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listSubjects() {
        return `Loving ${this.favSubjects.join(', ')}!`;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

// Task 6
class ProjectManager extends Instructor {
    constructor({ name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor }) {
        super({ name, age, location, specialty, favLanguage, catchPhrase });
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}