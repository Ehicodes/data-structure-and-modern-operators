'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Destructuring Objects

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//New variable names (helpful when dealing with third party data)
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//another  useful for when dealing with third party data
//e.g reading a property that does not exist in a object

//we can set default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables while destructuring objects
let a = 111;
let b = 999;

const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj);
console.log(a, b);

/*
//DESTRUCTURING AN ARRAY
 const arr = [2, 3, 4]; 
const a = arr[0];
const b = arr[1];
const c = arr[2];

 const [x, y, z] = arr;
console.log(x, y, z);

 let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching Variables
//normal way
 const temp = main;
main = secondary;
secondary = temp;
console.log(main);
console.log(temp);

//Using destructuring
 [main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function using destructuring
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

//Nested Destructuring
//what happens if we have a nested array?
const nested = [12, 4, [5, 6]];
//👇🏻
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/
