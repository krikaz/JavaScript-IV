// classes

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
    this.gender = obj.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
}

class Student extends Person {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach(item => console.log(`${item}`));
  }
  PRAssignment(subject) {
    console.log(`${this.name } has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name } has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standUp times!​​​​​`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}



// objects creation

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const jack = new Instructor({
  name: 'Jack',
  location: 'Hammer',
  age: 24,
  gender: 'male',
  favLanguage: 'Go',
  specialty: 'Back-end',
  catchPhrase: 'Do it now'
});

const rose = new Instructor({
  name: 'Rose',
  location: 'Redtree',
  age: 21,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'Full Stack',
  catchPhrase: 'Fully fuller'
});

const johnny = new Student({
  name: 'Johnny',
  location: 'Little Town',
  age: 36,
  gender: 'male',
  previousBackground: 'Marine',
  className: 'WEBEU2',
  favSubjects: ['Html', 'CSS', 'JavaScript']
});

const jane = new Student({
  name: 'Jane',
  location: 'Deadwood',
  age: 28,
  gender: 'female',
  previousBackground: 'Poker Player',
  className: 'WEBEU2',
  favSubjects: ['Go', 'C++', 'C']
});

const maria = new Student({
  name: 'Maria',
  location: 'Seattle',
  age: 27,
  gender: 'female',
  previousBackground: 'Sniper',
  className: 'WEBEU2',
  favSubjects: ['Haskell', 'Java']
});

const aletta = new ProjectManager({
  name: 'Aletta',
  location: 'Singapore',
  age: 33,
  gender: 'female',
  gradClassName: 'CS50',
  favInstructor: 'Dan'
});

const ashley = new ProjectManager({
  name: 'Ashley',
  location: 'Cleveland',
  age: 29,
  gender: 'female',
  gradClassName: 'CS50',
  favInstructor: 'Jackie'
});

const vince = new ProjectManager({
  name: 'Vince',
  location: 'Riga',
  age: 25,
  gender: 'male',
  gradClassName: 'CS50',
  favInstructor: 'Brian'
});



// testing code

console.log('======== Testing Instructors =========');
console.log(fred.name, fred.location);
console.log(jack.age, jack.gender);
console.log(rose.favLanguage, rose.specialty, rose.catchPhrase);
fred.speak();
jack.demo('Ancient Rome History');
rose.grade(jane, 'Mathematics');

console.log('======== Testing Students =========');
console.log(johnny.name, johnny.location);
console.log(jane.age, jane.gender);
console.log(maria.previousBackground, maria.className, maria.favSubjects);
johnny.speak();
jane.listsSubjects();
maria.PRAssignment('go backend');
johnny.sprintChallenge('linux device driver');

console.log('======== Testing Project Managers =========');
console.log(ashley.name, ashley.location);
console.log(aletta.age, aletta.gender);
console.log(vince.gradClassName, vince.favInstructor);
ashley.standUp('WEBEU2');
aletta.debugsCode(maria, 'React');

