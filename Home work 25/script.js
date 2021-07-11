class SuperMath {
    constructor (x,y,znak){
        this.x = x;
        this.y = y;
        this.znak = znak;
    }
    
    check (){
        let question = confirm(`do you want operation ${this.znak} with ${this.x} and ${this.y}?`);


        if (question) {
            this.getInfo();
        } else {
           this.setNewOperation();
           this.getInfo();
        }
    }

    getInfo() {
        console.log( `${this.getX()} ${this.getZnak()} ${this.getY()} = ${this.getResult()}`); 
    }

    getX(){
        return `${this.x}`
    }

    setX(){
        let firstNum;
        do {
            firstNum = prompt(`Enter first number`);
        } while (isNaN(firstNum) || !firstNum || firstNum <= 0)

        this.x = +firstNum;
    }

    getY(){
        return `${this.y}`
    }

    setY(){
        let secondNum;
        do {
            secondNum = prompt(`Enter second number`);
        } while (isNaN(secondNum) || !secondNum || secondNum <= 0)

        this.y = +secondNum;
    }

    getZnak() {
        return `${this.znak}`
    }

    setZack(){
        let userZnak;
        do {  
            userZnak = prompt(`what do you operation do (+ - * /)`);
        } while (userZnak != '+' && userZnak != '-' && userZnak != '*' && userZnak != '/');

        this.znak = userZnak;
        
    }

    getResult(){
        let result = 0;
        switch(this.znak){
            case '+':
                result = this.x + this.y;
                break;
            case '-':
                result = this.x - this.y;
                break;
            case '*':
                result = this.x * this.y;
                break;
            case '/':
                result = this.x / this.y;
                break;
            }
            return result;
    }

    setNewOperation(){
        this.setX();
        this.setY();
        this.setZack();
    }

}

let p = new SuperMath(2,7,`+`);
p.check();

