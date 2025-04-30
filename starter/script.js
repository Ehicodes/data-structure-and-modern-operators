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

  //Practical Application  of Destructuring
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  //rest parameter
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`Here is your pizza made with ${mainIngredient}`);
    console.log(
      `Here is your pizza made with ${mainIngredient} and ${otherIngredients}`
    );
  },
};
//1) DESTRUCTURING

//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on the LEFT side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rissoto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, rissoto, otherFoods);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);
// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

//2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(2, 3, 7, 2);
add(3, 4, 6, 6, 5, 3, 4);

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'Olives', 'spinach');

/*
////////////////////////////////////
// //THE SPREAD OPERATOR (...)
// const arr = [7, 8, 9];
// //using the spread operator to add new elements to an array

// const newArr = [1, 2, ...arr];
// console.log(...newArr); // 1 2 7 8 9

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(...newMenu);

// //Two use cases of the spread operator
// //Copy Array(create shallow copies of array)
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //Joining 2 arrays or more together
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //Iterables: arrays, strings, maps, sets, NOT objects
// const str = 'Ehi';
// const letters = [...str, ' ', 'O.'];
// console.log(letters);
// console.log(...str);

// //using the spread operator to pass arguments to a function
// //Real world example
// const ingredients = [
//   // prompt("Let's  make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //old way

// restaurant.orderPasta(...ingredients); //new way

// //objects
// const newRestaurant = { foundedIn: 1986, ...restaurant, founder: 'Guiseppe' }; //we created a new object
// console.log(newRestaurant);

// //copying objects using (...)
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// console.log(restaurantCopy);
// console.log(restaurant);

// //Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// //New variable names (helpful when dealing with third party data)
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //another  useful for when dealing with third party data
// //e.g reading a property that does not exist in a object

// //we can set default values
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// //Mutating Variables while destructuring objects
// let a = 111;
// let b = 999;

// const obj = {
//   a: 23,
//   b: 7,
//   c: 14,
// };

// ({ a, b } = obj);
// console.log(a, b);

// //Nested Objects
// const {
//   fri: { open: welcome, close: goodbye },
// } = openingHours;
// console.log(welcome, goodbye);

/*
//DESTRUCTURING AN ARRAY
 const arr = [2, 3, 4]; 
const a = arr[0];
const b = arr[1];
const c = arr[2];

 const [x, y, z] = arr;
console.log(x, y, z);

 let [main, , secondary] = restaurant.categories
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
