
// var arr = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

// var newArr = arr.filter(function(element){
//     return element > 0;
// })

// var newArr = arr.filter(function(element){
//      if(element % 2 == 0){
//         return element;
//     }
// });

// console.log(newArr);

// var newArr = arr.map(function(element){
//     return element ** 2;
// });

// var cities = [ 
//     { name: 'Los Angeles', temperature: 60.0}, 
//     { name: 'Atlanta', temperature: 52.0 }, 
//     { name: 'Detroit', temperature: 48.0 }, 
//     { name: 'New York', temperature: 80.0 } ];

// var newArr = cities.filter(function(element){
//     if(element.temperature < 70){
//         return element.name;
//     }
// });

// console.log(newArr);

// var newArr = cities.map(function(element){
//     return element.name;

// })

// console.log(newArr);

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var goodJob = people.forEach(function(element){
//     console.log("Good job " + element + "!");
// })

// console.log(goodJob);

// var sort = people.sort();

// console.log(sort);

//make a function that adds the inner arrays
//correspond the sum to the respective inner array
// if sum of inner array a > b then return -1

// const companies= [
//     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];
//   const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  // for(let i = 0; i < companies.length; i++) {
  //   console.log(companies[i]);
  // }
  // forEach
  // companies.forEach(function(company) {
  //   console.log(company.name);
  // });
  // filter
  // Get 21 and older
  // let canDrink = [];
  // for(let i = 0; i < ages.length; i++) {
  //   if(ages[i] >= 21) {
  //     canDrink.push(ages[i]);
  //   }
  // }
  // const canDrink = ages.filter(function(age) {
  //   if(age >= 21) {
  //     return true;
  //   }
  // });
//   const canDrink = ages.filter(age => age >= 21);
  // Filter retail companies
  // const retailCompanies = companies.filter(function(company) {
  //   if(company.category === 'Retail') {
  //     return true;
  //   }
  // });
//   const retailCompanies = companies.filter(company => company.category === 'Retail');
  // Get 80s companies
//   const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
  // Get companies that lasted 10 years or more
//   const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
  // map
  // Create array of company names
  // const companyNames = companies.map(function(company) {
  //   return company.name;
  // });
  // const testMap = companies.map(function(company) {
  //   return `${company.name} [${company.start} - ${company.end}]`;
  // });
  // const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  // const ageMap = ages
  //   .map(age => Math.sqrt(age))
  //   .map(age => age * 2);
  // sort
  // Sort companies by start year
  // const sortedCompanies  = companies.sort(function(c1, c2) {
  //   if(c1.start > c2.start) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  // const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
  // Sort ages
  // const sortAges = ages.sort((a, b) => a - b);
  // console.log(sortAges);
  // reduce
  // let ageSum = 0;
  // for(let i = 0; i < ages.length; i++) {
  //   ageSum += ages[i];
  // }
  // const ageSum = ages.reduce(function(total, age) {
  //   return total + age;
  // }, 0);
  // const ageSum = ages.reduce((total, age) => total + age, 0);
  // Get total years for all companies
  // const totalYears = companies.reduce(function(total, company) {
  //   return total + (company.end - company.start);
  // }, 0);
//   const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
  // Combine Methods
//   const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0);
//   console.log(combined);

