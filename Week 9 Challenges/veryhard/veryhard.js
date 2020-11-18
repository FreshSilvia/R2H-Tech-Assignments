function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  };

  Person.prototype.exercise = function() {
    console.log('Yayyy we almost done!!');
  };

  Person.prototype.fetchJob = function() {
    console.log(`${this.name} is a ${this.job}.`);
  };

  const person = new Person('John', 'Mechanic', 25);
  person.fetchJob();
  person.exercise();

  //Constructor Programmer
  function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age);
  
    this.languages = languages;
    this.busy = true;
  };

Programmer.prototype.completeTask = function() {
    this.busy = false;
};

Programmer.prototype.acceptNewTask = function() {
    this.busy = true;
};

Programmer.prototype.offerNewTask = function() {
    if(this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`)
    } else {
        console.log(`${this.name} would love to take on a new responsibility.`)
    }
};

Programmer.prototype.learnLanguage = function(newlanguage) {
    this.languages.push(newlanguage);
};

Programmer.prototype.listLanguages = function() {
    console.log(this.languages);
};


const programmer = new Programmer('Tim Smith', 'Programmer', 2, ['JS']);

programmer.completeTask();
programmer.acceptNewTask();
programmer.learnLanguage('html');
programmer.listLanguages();
programmer.offerNewTask();