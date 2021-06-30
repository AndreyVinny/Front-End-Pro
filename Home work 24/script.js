function Animal (name, icon, tipe, breed) {
    this.name = name;
    this.icon = icon;
    this.tipe = tipe;
    this.breed = breed;
    
        function getVoice(voice) {
            if(voice === `dog`)
                return `I can say gav-gav.`
            else if(voice === `cat`)
                return `I can say myu-myu.`
            else 
                return ``; 
        }
            return console.log(`Hello, my name is ${name} ${icon}. I'm ${breed} ${tipe}. ${getVoice(tipe)}`);
}

let Ivan = new Animal('Ivan', '🐕', 'dog', 'Australian Shepherds'),
	Anna = new Animal('Anna', '🐩', 'dog', 'Siberian Huskies'),

	Olena = new Animal('Olena', '🐈', 'cat', 'British Shorthair'),
	Simba = new Animal('Simba', '🐆', 'cat', 'Leopard'),

	Kesha = new Animal('Kesha', '🦜', 'parrot', 'Cockatoos');