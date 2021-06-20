let car = {
    getInfo() {  
        return  document.write(`<ul>
                                    <li>Name: ${this.Name}</li>
                                    <li>Vehicle type: ${this.Vehicle}</li>
                                    <li>Price as tested: ${this.Price}</li>
                                    <li>Engine type: ${this.Engine}</li>
                                </ul>`);} 
}

let Mazda = Object.create(car);

Mazda.Name = '2019 Mazda MX-5 Miata Club';
Mazda.Vehicle = 'front-engine, rear-wheel-drive, 2-passenger, 2-door convertible';
Mazda.Price = '$34,980 (base price: $30,510)';
Mazda.Engine = 'DOHC 16-valve inline-4, aluminum block and head, direct fuel injection';

let Toyota = Object.create(car);

Toyota.Name = '2021 Toyota Supra 3.0';
Toyota.Vehicle = 'front-engine, rear-wheel-drive, 2-passenger, 2-door hatchback';
Toyota.Price = '$52,440 (base price: $51,945)';
Toyota.Engine = 'turbocharged and intercooled DOHC 24-valve inline-6, aluminum block and head, direct fuel injection';

let Porsche = Object.create(car);

Porsche.Name = '2018 Porsche 718 Cayman GTS';
Porsche.Vehicle = 'mid-engine, rear-wheel-drive, 2-passenger, 2-door hatchback';
Porsche.Price = '$85,170 (base price: $81,750)';
Porsche.Engine = 'turbocharged and intercooled DOHC 16-valve flat-4, aluminum block and heads, direct fuel injection';


console.log( Mazda.getInfo() ); 
console.log( Toyota.getInfo() ); 
console.log( Porsche.getInfo() );  