/*Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1)
// const players1 = game.players[0];
// console.log(players1);

// const [players1] = game.players;
// console.log(players1);

// const [players1, players2] = game.players;
// const secondTeam = [...players2];
// console.log(players1, players2);
// console.log(players1, secondTeam);

//2
// const [gk, ...fieldPlayers] = players1;
// const [gk2, ...fieldPlayers2] = secondTeam;
// console.log(gk, fieldPlayers);
// console.log(gk2, fieldPlayers2);

//3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

//5
//nested destructuring
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

//6
// const printGoals = function (...numbersOfPlayers) {
//   console.log(`${numbersOfPlayers.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Coman', 'Pavard', 'Goretzka');
// printGoals(...game.scored);

//7
//TUTOR CODE
// team1 < team2 && console.log('Team 1 is likely to win');
// team2 < team1 && console.log('Team 2 is likely to win');
// const moreLikelyToWin =
//   (team1 < team2 && 'Team 1') || (team2 < team1 && 'Team 2');
// console.log(`${moreLikelyToWin} is more likely to win`);

/*///////////////////
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/

//1
// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// }

//2
// const gameOdds = Object.values(game.odds);
// let sum = 0;
// for (const odds of gameOdds) sum += odds;
// const average = sum / gameOdds.length;
// console.log(average);

//3
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(`Odd of victory ${game.team1}: ${team1}`);
// console.log(`Odd of draw: ${draw}`);
// console.log(`Odd of victory ${game.team2}: ${team2}`);

//TUTOR'S CODE
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}  ${odd}`);
// }

//4. BONUS

/*///////////////////////////////
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽ GOAL */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

//2
// gameEvents.delete(64);
// console.log(gameEvents);

//3
// const average = 90 / gameEvents.size;
// console.log(`An event happened, on average, every ${average} minutes`);

//TUTOR'S CODE. BONUS
// const extraTime = [...gameEvents.keys()].pop();
// console.log(extraTime);
// console.log(
//   `An event happened, on average, every ${
//     extraTime / gameEvents.size
//   }   minutes`
// );

// 4;
// for (const [time, event] of gameEvents) {
//   const str = time < 45 ? '[FIRST HALF]' : '[SECOND HALF]';
//   console.log(`${str} ${time}: ${event}`);
// }
//TUTOR'S CODE
// for (const [min, event] of gameEvents) {
//   const half = min < 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min} ${event}`);
// }

/*///////////////////////////////
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
*/

// document.body.append(document.createElement('textarea'));

// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure;
