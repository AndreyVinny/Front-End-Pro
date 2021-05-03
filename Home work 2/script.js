let sum = 100;

const a = prompt(`enter the first number`);
if (isNaN(a) || a <= 0) {
    alert(`A = ${a} is not valid number.`);
    alert(`Sum = ${sum}`);
} else if (a > 0) {
    alert(`A = ${a} is valid number.`);
    alert(`Sum = ${sum + +a}`);
    sum = sum + +a;
}

const b = prompt(`enter the second number`);
if (isNaN(b) || b <= 0) {
    alert(`A = ${b} is not valid number.`);
    alert(`Sum = ${sum}`);
} else if (b > 0) {
    alert(`B = ${b} is valid number.`);
    alert(`Sum = ${sum + +b}`);
    sum = sum + +b;
}

const c = prompt(`enter the third number`);
if (isNaN(c) || c <= 0) {
    alert(`A = ${c} is not valid number.`);
} else if (c > 0) {
    alert(`C = ${c} is valid number.`);
    sum = sum + +c;
}

alert(`Sum = ${sum}`);