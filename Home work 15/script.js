const sports = [
	['🤺','fencing'],
	['⛸','figure skating'],
	['⛷','skier'],
	['🏂','snowboarder'],
	['🏌','golfing'],
	['🚣','rowing boat'],
	['🏊','swimming'],
	['🤸','gymnastics'],
	['🤾','handball']
];

const winners = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],

	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],

	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],

	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],

	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],

	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],

	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],

	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],

	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];

const olympic = ['🔵','⚫','🔴','🟡','🟢'];

const medals = [
	['🥇','gold'],
	['🥈','silver'],
	['🥉','bronze'],
];

const continents = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

const flags = [
	['fr','🇫🇷'],
	['it','🇮🇹'],
	['us','🇺🇸'],
	['ca','🇨🇦'],
	['ru','🇷🇺'],
	['no','🇳🇴'],
	['jp','🇯🇵'],
	['au','🇦🇺'],
	['gb','🇬🇧'],
	['se','🇸🇪'],
	['ro','🇷🇴'],
	['ua','🇺🇦'],
	['dk','🇩🇰'],
	['de','🇩🇪']
];

medals[0].push('gold');
medals[1].push('silver');
medals[2].push('darkorange');

function getContinent(country){
     let winneContinent = continents.filter(function(item){
          return item[0] === country;
     })
        return winneContinent[0][1];
};

function getMedal(medal){
    let currentMedal = medals.filter(function(item) {
         return item[1] === medal; 
    })
        return currentMedal[0][0]; 
};

function getColor(color){
    let currentColor = medals.filter(function(item) {
         return item[1] === color; 
    })
        return currentColor[0][2]; 
};

function getFlag(country){
    let currentCountry = flags.filter(function(item){
        return item[0] === country;
    })
        return currentCountry[0][1]; 
};


let THs = olympic.map(function(item){
    return `<th style="background:skyblue">${item}</th>`
});

THs.splice(0,0,`<th></th>`);

let TRs = sports.map(function(sports){


    let Europe = [],
        Americas  = [],
        Asia = [],
        Oceania = [],
        Africa = []; 

    let currentWinners = winners.filter(function(winners){
        return winners[0] === sports[1];
    })
	.map(function(winner){
         winner.push(getContinent(winner[2])); 
         return winner; 
    })
    .map(function(winner){
        winner.push(`<div style="background:${getColor(winner[1])}">${getMedal(winner[1])} - ${getFlag(winner[2])}</div>`)
        return winner;
    })
    .forEach(function(winner){
        let winneContinent = winner[3];

        switch (winneContinent) {
            case `Europe`:
                Europe.push(winner[4]); 
                break;
            case `The Americas`:
                Americas.push(winner[4]); 
                break;
            case `Asia`:
                Asia.push(winner[4]); 
                break;
            case `Oceania`:
                Oceania.push(winner[4]); 
                break;
            case `Africa`:
                Africa.push(winner[4]); 
                break;         
        }
    });

    return `<tr>
                <td style="background:lightgreen">${sports[0]}</td>
                <td>${Europe.join('')}</td>
                <td>${Africa .join('')}</td>
                <td>${Americas.join('')}</td>
                <td>${Asia.join('')}</td>
                <td>${Oceania .join('')}</td>
            </tr>`
}).join('');

document.write(`<table border = 1px style="border-collapse: collapse"> 
                <thead>
                    <tr>
                    ${THs.join('')}
                    </tr>
                </thead>
                <tbody>
                    ${TRs}
                </tbody>
                </table>`); 