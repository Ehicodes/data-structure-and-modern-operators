'use strict';
//enhanced object literal. computing the property names
// const weekDays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekDays[5]]: {
//     open: 0, //Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//Enhanced ES6 Object Literal
// openingHours,

// order(starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// },

//Practical Application  of Destructuring
// orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//   console.log(
//     `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//   );
// },

// orderPasta(ing1, ing2, ing3) {
//   console.log(
//     `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//   );
// },
//rest parameter
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };
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

// //SETS
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Ehi'));
// console.log(ordersSet.size); //checking the size.
// console.log(ordersSet.has('Bread'));
// console.log(ordersSet.has('Pizza')); //checking if an element is in the set
// ordersSet.add('Garlic Bread'); //adding a new element to the set
// console.log(ordersSet);
// ordersSet.delete('Risotto'); //deleting an element
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// //Use case for sets. Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );
// //
// console.log(new Set('OsaigbovoEhinomen').size);

// //MAPS
// const rest = new Map();

// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// console.log(rest.get('name'));
// // console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear()
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1', 'Heading'));
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// //Map iteration
// const question = new Map([
//   ['question', 'What is the best programming languagen in the world'],
//   [1, 'C'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try Again'],
// ]);

// console.log(question);

// //convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// //convert map to array
// console.log([...question]);

// console.log([...question.keys()]);
// console.log(question.values());
// console.log(question.entries());

/*WORKING WITH STRINGS PART 3/////////////// 
//split and join
console.log('a+very+nice+string'.split('+'));
console.log('Osaigbovo Ehinomen'.split(' '));

const [firstName, lastName] = 'Osaigbovo Ehinomen'.split(' ');
console.log(firstName, lastName);

const newName = ['Miss.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//example
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('osaigbovo ehinomen');

//padding a string
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Ehi'.padStart(20, '+').padEnd(30, '+'));

//real world example of padding
const maskedCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(str, last);
  return last.padStart(str.length, '*');
};

console.log(maskedCreditCard(4378405356265));
console.log(maskedCreditCard('847348830284687620'));

///repeat
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
*/
/*//////////////////////WORKING WITH STRINGS PART 2////////////////////////////////// 
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

//comparing emails
const email = 'hello@ehi.o';
const loginEmail = '  Hello@Ehi.O \n';

const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
const emailChecker = function (emails) {
  console.log(emails === normalizedEmail);
};
const normalizedEmail = loginEmail.toLowerCase().trim();
emailChecker('hello@ehi.o');
emailChecker('hola@ehi.oe');
// console.log(email === normalizedEmail);
//fix capitalization in name

const passenger = 'eHiNoMeN';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//replacing parts of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boardin door 23!';

// console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

//Booleans
const plane2 = 'Airbus A320neo';
// console.log(plane.includes('A320'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW  Airbus family');
}

//Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

*/
/*/////////WORKING WITH STRINGS -PART 1///////////
console.log(plane);
console.log(plane[0]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.indexOf('Portugal'));

//A GOOD USE CASE
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(3));
console.log(airline.slice(1, -1));
const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/

/* STRINGS METHODS PRACTICE*/
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();
const flightsInfo = flights.split('+');

for (const flights of flightsInfo) {
  const [type, from, to, time] = flights.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(47);
  console.log(output);
}
