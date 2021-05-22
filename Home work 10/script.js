sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

winter_sports = sports.slice(0,5);
summer_sports = sports.slice(5, sports[length-1]);

fruits_S = summer_sports.splice(2,2);
fruits_W = winter_sports.splice(2,1);
fruits = fruits_W.concat(fruits_S);

console.log(`***Winter sports***`);
console.log(`${winter_sports[0].join(`: `)}`);
console.log(`${winter_sports[1].join(`: `)}`);
console.log(`${winter_sports[2].join(`: `)}`);
console.log(`${winter_sports[3].join(`: `)}`);
console.log(``);

console.log(`***Summer sports***`);
console.log(`${summer_sports[0].join(`: `)}`);
console.log(`${summer_sports[1].join(`: `)}`);
console.log(`${summer_sports[2].join(`: `)}`);
console.log(`${summer_sports[3].join(`: `)}`);
console.log(``);

console.log(`***Fruits***`);
console.log(`${fruits[0].join(`: `)}`);
console.log(`${fruits[1].join(`: `)}`);
console.log(`${fruits[2].join(`: `)}`);