do {  
    a = prompt(`Введите действие которое хотите осуществить (+ - * /)`);
} while (a != '+' && a != '-' && a != '*' && a != '/');

do {
    b = +prompt(`Сколько оператов нужно? (от 1 до 7)`);
} while(b <= 1 || b > 7 || isNaN(b))

switch(a){
    case '+':
        result = 0;
        break;
    case '-':
        result = 0;
        break;
    case '*':
        result = 1;
        break;
    case '/':
        result = 1;
        break;
}

for(i = 0; i < b; i++) {
    do {
        x = +prompt(`Введите ${i + 1} число`);       
    } while(x <= 0 || isNaN(x))

    switch(a) {
        case '+':
            result += x;
            break;
        case '-':
            if (i <= 1 && i == 0) {
                result = x - result;
            } else {
                result -= x;
            }
            break;
        case '*':
            result *= x;
            break;
        case '/':
            if (i <= 1 && i == 0) {
                result = x / result;
            } else {
                result /= x;
            }
            break;
    }
}
    alert(`Ответ:${result}`)




    