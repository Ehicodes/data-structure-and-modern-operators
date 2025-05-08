'use strict';
//enhanced object literal. computing the property names
const weekDays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, //Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Enhanced ES6 Object Literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Practical Application  of Destructuring
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  //rest parameter
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//looping over object names in an indirect way
//PROPERTY NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// // for (const day of properties) {
// //   console.log(day);
// // }
// let openStr = `The restaurant is open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr = openStr + `${day}, `;
// }

// console.log(openStr);

// // //PROPERTY VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // //ENTIRE OBJECT
// // //ENTRIES
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`on the ${key} we open at ${open} and close at ${close}`);
// }

/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours.fri?.open);

//EXAMPLE
const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

for (const day of days) {
  // restaurant.openingHours[day]  same as openingHours.mon  openingHours.tues
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//CALLING METHODS (OPTIONAL CHAINING)
console.log(restaurant.orderRissoto?.(0, 1) ?? 'method does not exist');

//ARRAYS (OPTIONAL CHAINING)

const users = [
  { name: 'Ehi', email: 'hello@ehi.os' },
  { age: 18, job: 'Student' },
];

console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.age ?? 'User array  empty');

if (users.length > 0) console.log(users[0].name, users[1].age);
else console.log('user array empty');
*/

//FOR LOOP

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

/*
/////////the nullish coalescing operator
 restaurant.numGuests = 0;
 const guests2 = restaurant.numGuests || 10;
 console.log(guests2);
//the nullish coalescing operator
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
////////////////////////////////////////////////
// SHORT CIRCUITING (&& AND ||)

console.log('---- OR -----');
//Logical operators use any data type, return any data, short-circuiting
 console.log(3 || 'Jonas'); // 3
 console.log('' || 'Jonas'); //jonas
 console.log(true || 0); //true
 console.log(undefined || null); //null

 console.log(undefined || 0 || '' || 'Hello' || 3 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//we can use short circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND -----');

console.log(0 && 'Jonas'); //0
console.log(7 && 'Jonas'); // Jonas
console.log('Hello' && 23 && null && 'jonas'); //null

//PRACTICAL EXAMPLE
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// AND OPERATOR
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

*/

/*
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
 restaurant.orderDelivery({
   time: '23:30',
   address: 'Via del Sole, 21',
  mainIndex: 2,
   starterIndex: 2,
 });

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

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

// restaurant.orderPizza('mushrooms', 'onion', 'Olives', 'spinach');
*/

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

//SETS
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Ehi'));
console.log(ordersSet.size); //checking the size.
console.log(ordersSet.has('Bread'));
console.log(ordersSet.has('Pizza')); //checking if an element is in the set
ordersSet.add('Garlic Bread'); //adding a new element to the set
console.log(ordersSet);
ordersSet.delete('Risotto'); //deleting an element
console.log(ordersSet);
