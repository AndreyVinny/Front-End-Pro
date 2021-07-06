let Ivan = new Animal('Ivan', '🐕', 'dog', 'Australian Shepherds'),
	Anna = new Animal('Anna', '🐩', 'dog', 'Siberian Huskies'),

	Olena = new Animal('Olena', '🐈', 'cat', 'British Shorthair'),
	Simba = new Animal('Simba', '🐆', 'cat', 'Leopard'),

	Kesha = new Animal('Kesha', '🦜', 'parrot', 'Cockatoos');

const VOICES = {
		cat: `I can say myu-myu.`,
		dog: `I can say gav-gav.`,
	  }

function Animal (name, icon, type, breed) {
    this.name = name;
    this.icon = icon;
    this.type = type;
    this.breed = breed;
}


Animal.prototype.getName = function(){
	return `Hello, my name is ${this.name} ${this.icon}.`;
};

Animal.prototype.getType = function(){
	return `${this.type}.`; 
};

Animal.prototype.getBreed = function(){
	return `I'm ${this.breed}`;
};

Animal.prototype.getVoice = function(){
	let voice = VOICES[this.type] ?  VOICES[this.type] : ``;
	return `${voice}`;
};

Animal.prototype.getInfo = function(){
	return `${this.getName()} ${this.getBreed()} ${this.getType()} ${this.getVoice()}`;
};


console.log(Ivan.getInfo());
console.log(Anna.getInfo());
console.log(Olena.getInfo());
console.log(Simba.getInfo());
console.log(Kesha.getInfo());