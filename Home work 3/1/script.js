let result = 0;

let q1 = prompt('Сколько будет 2+2?').toLowerCase();
    if (q1 == 4 || q1 == `четыре` || q1 == `four`)
        result += 10;

let q2 = prompt('Солнце встает на востоке?').toLowerCase();
    if (q2 == `да` || q2 == `yes`)
        result += 10;

let q3 = prompt('Сколько будет 5 / 0 в языке программирования JS?').toLowerCase(); 
    if (q3 == `infinity` || q3 == `бесконечность`)
        result += 10;

let q4 = prompt('Какого цвета небо?').toLowerCase();
    if (q4 == `голубое` || q4 == `синее` || q4 == `blue`)
        result += 10;

let q5 = prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого.');
    if (q5 == 42)
        result += 10;
    
alert(`your result - ${result}, congratulations!`);