const HAMBURGER = {
	size: [
		{
			title: `small`,
			price: 5,
			calories: 20,
		},
		{
			title: `big`,
			price: 10,
			calories: 40,
		},
	],
	fillings: [
		{
			title: `cheese`,
			price: 1,
			calories: 20,
		},
		{
			title: `salad`,
			price: 2,
			calories: 5,
		},
		{
			title: `potato`,
			price: 1.5,
			calories: 10,
		},
	],
	toppings: [
		{
			title: `spice`,
			price: 1.5,
			calories: 0,
		},
		{
			title: `mayo`,
			price: 2,
			calories: 5,
		},
	]
};

class Hamburger{
	constructor(){
		this.setSize();
		this.setFillings();
		this.setToppings();
	}

	setSize(){
		let size;
		do{
		 	size = prompt(`Choose size: ${this.getAvaliableSizes().join(` or `)}`, this.getAvaliableSizes()[0]);
		} while(this.getAvaliableSizes().indexOf(size) === -1);

		this.size = size;
	}

	getAvaliableSizes(){
		return HAMBURGER.size.map(item => item.title);
	}

	setFillings(){
		let fillings;
		do{
			fillings = prompt(`Choose fillings: ${this.getAvaliableFillings().join(`, `)}`, this.getAvaliableFillings().join(`, `))
				.replaceAll(` `,``)
				.split(`,`);
		} while(!fillings);

		let correctFillings = [];

		for(let i=0; i<fillings.length; i++){
			for(let j=0; j<HAMBURGER.fillings.length; j++){
				if(fillings[i] === HAMBURGER.fillings[j].title){
					correctFillings.push(fillings[i]);
					break;
				}
			}
		}

		this.fillings = correctFillings;
	}

	getAvaliableFillings(){
		return HAMBURGER.fillings.map(item => item.title);
	}

	setToppings(){
		let toppings;
		do{
			toppings = prompt(`Choose toppings: ${this.getAvaliableToppings().join(`, `)}`, this.getAvaliableToppings().join(`, `))
				.replaceAll(` `,``)
				.split(`,`);
		} while(!toppings);

		let correctToppings = [];

		for(let i=0; i<toppings.length; i++){
			for(let j=0; j<HAMBURGER.toppings.length; j++){
				if(toppings[i] === HAMBURGER.toppings[j].title){
					correctToppings.push(toppings[i]);
					break;
				}
			}
		}

		this.toppings = correctToppings;
	}

	getAvaliableToppings(){
		return HAMBURGER.toppings.map(item => item.title);
	}

	getPrice(){
		let price = 0;
		for(let key in this){
			let data = this[key];

			if(Array.isArray(data)){
				price += data.reduce((sum, product) => {
					return sum + HAMBURGER[key].filter(item => item.title === product)[0].price;
				},price);
			} else{
				let product = HAMBURGER[key].filter(item => item.title === data)[0];
				price += product.price;
			}
		}

		return `Price is ${price}$.`;
	}

	getCalories(){
		let calories = 0;
		for(let key in this){
			let data = this[key];

			if(Array.isArray(data)){
				calories += data.reduce((sum, product) => {
					return sum + HAMBURGER[key].filter(item => item.title === product)[0].calories;
				},calories);
			} else{
				let product = HAMBURGER[key].filter(item => item.title === data)[0];
				calories += product.calories;
			}
		}

		return `Calories is ${calories}kkl.`;
	}
}

let myHamburg = new Hamburger();
console.log(myHamburg);
console.log(myHamburg.getPrice());
console.log(myHamburg.getCalories());