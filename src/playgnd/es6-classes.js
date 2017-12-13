class Person{
  constructor(name = 'Anonymous',age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}`;
  }
  getDesc(){
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Student extends Person{
  constructor(name,age,major) {
    super(name,age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDesc(){
    let desc = super.getDesc();
    return this.hasMajor()?(desc + ` with major in ${this.major}`):desc;
  }
}

const me = new Student('Sairaj Sawant',19,'IT');
console.log(me.getDesc());

const other = new Student('Shadab shaikh',20);
console.log(other.getDesc());
