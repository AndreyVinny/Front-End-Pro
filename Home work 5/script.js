do {
    a = +prompt(`Введите число А (положительное число)`);
} while (a < 0 || isNaN(a))

do {
    b = +prompt(`Введите число В (больше числа А)`);
} while (b < a || isNaN(b))

do {
    h = +prompt(`Введите шаг перебора факториалов (больше нуля)`);
} while (h <= 0 || h >= b || isNaN(h))

for (sumFactorial = 0; a <= b; a += h) {
   factorial = 1;
   for(i = 1; i <= a; i++) {
      factorial *= i;
   }
   sumFactorial += factorial;
}

alert(`Сумма факториалов равна ${sumFactorial}.`);