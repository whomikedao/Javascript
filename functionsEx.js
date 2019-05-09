// var newArr = arr.filter(function(element){
//     return element > 0;
// })

var arr = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

// var newArr = arr.filter(function(element){
//      if(element % 2 == 0){
//         return element;
//     }
// });

// console.log(newArr);

// var newArr = arr.map(function(element){
//     return element ** 2;
// });

var cities = [ 
    { name: 'Los Angeles', temperature: 60.0}, 
    { name: 'Atlanta', temperature: 52.0 }, 
    { name: 'Detroit', temperature: 48.0 }, 
    { name: 'New York', temperature: 80.0 } ];

// var newArr = cities.filter(function(element){
//     if(element.temperature > 70){
//         return element.name;
//     }
// });

// var newArr = cities.map(function(element){
//     return element.name;

// })

// console.log(newArr);

var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var goodJob = people.forEach(function(element){
//     console.log("Good job " + element + "!");
// })

// console.log(goodJob);

// var sort = people.sort();

// console.log(sort);

var sortLength = people.map(function(element){
   return element.sort(element.a, element.b)
    
});