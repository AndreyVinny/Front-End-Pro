suitOfCards = [`clubs`, `spades`, `hearts`, `diamonds`],
pictureCards = [`jack`, `queen`, `king`],
suitsLetters = [`J`, `Q`, `K`];


for(i=2, cardSuits=[]; i<11; i++){
	for(j=0; j<suitOfCards.length; j++){
		cardSuit = `<div class="card">
		            	<div class="card__info">${i}<img src="images/${suitOfCards[j]}.svg" alt="${suitOfCards[j]}"></div>
		            	<div class="card__info">${i}<img src="images/${suitOfCards[j]}.svg" alt="${suitOfCards[j]}"></div>
		            </div>`
		cardSuits.push(cardSuit);
	}
}

for(i=0, k=0, cardsPersons=[]; i<pictureCards.length, k<suitsLetters.length; i++, k++){
	for(j=0; j<suitOfCards.length; j++){
		cardPerson = `<div class="card card--person">
			            <div class="card__info">${suitsLetters[k]}<img src="images/${suitOfCards[j]}.svg" alt="${suitOfCards[j]}"></div>
			            <img class="person" src="images/${pictureCards[i]}.svg" alt="${suitOfCards[j]}">
			            <div class="card__info">${suitsLetters[k]}<img src="images/${suitOfCards[j]}.svg" alt="${suitsLetters[j]}"></div>
		              </div>`
		cardsPersons.push(cardPerson);
	}
}

for(j=0, t=`T`, aces=[]; j<suitOfCards.length; j++){
	ace = `<div class="card card--person">
		    <div class="card__info">${t}<img src="images/${suitOfCards[j]}.svg" alt="${suitOfCards[j]}"></div>
		    <img class="person" src="images/${suitOfCards[j]}.svg" alt="${suitOfCards[j]}">
		    <div class="card__info">${t}<img src="images/${suitOfCards[j]}.svg" alt="${suitOfCards[j]}"></div>
	       </div>`
	aces.push(ace);
}

document.write( `<div class="wrapper">
					${cardSuits.join(``)}
        			${cardsPersons.join(``)}
					${aces.join(``)}
				</div>`);