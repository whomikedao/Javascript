(function(){
    console.log('hello world');
})()

var name = function(name){
    console.log('my name is ' + name)
}
name("alfie")

var adamsFunction = function(name){
    return "what's up" + name
}

var result = adamsFunction("Mike");

var add = function(num1, num2){
    return num1 + num2
}

var subtract = function(num1, num2){
    return num1 - num2
}

var calc = function(num1, num2, operation){
    return operation(num1, num2)
}

var result = calc(4, 5, add);

console.log(result);

var myArray = [1, 2, 4, 6, 7, 3, 9];

myArray.forEach(function(index){

    console.log(index);

});