function Person(name, email, phone){
    this.name = name;
    this.email = email;
    this.phone = phone;
}

var michael = new Person('Michael', 'michael@hotmail.com', 7132778118);
console.log(michael);
var sonny = new Person('Sonny', 'sonny@gmail.com', 7133308004);

Person.prototype.greet = function(other) {
    console.log(`Hello ${other.name}, I am ${this.name}`);
};

console.log(michael.greet(sonny));
console.log(sonny.greet(michael));