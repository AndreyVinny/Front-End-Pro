console.log(`Задание №1`);
a = new Array(20),
b = new Array(20);
c = new Array();

for (i = 0, max = 100, min = 1; i < a.length; i++){
    a[i] = Math.floor(Math.random() * (max - min - 1) + min);
    b[i] = Math.floor(Math.random() * (max - min - 1) + min);
}

for (i = 0; i < a.length; i++) {
    for(j = 0; j < b.length; j++) {
        if(a[i] == b[j]){
            c[c.length] = a[i];
        }
    }
}
console.log(`Массив a - ${a}`);
console.log(`Массив b - ${b}`);
console.log(`Элементы которые повторяються в массивах а и b - ${c}`);
console.log(`-------------------`);
// -------------------------------------------------

console.log(`Задание №2`);
a = new Array(20),
b = new Array;

for (i = 0, max = 100, min = 1; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (max - min - 1) + min);
}

console.log(`Массив a - ${a}`);

next:
for (i = 2; i < a.length; i++) {
  for (k = 2; k < a[i]; k++) {
    if (a[i] % k == 0) continue next;
  }
    b[b.length] = a[i];
}

console.log(`Массив из простых чисел b - ${b}`);

for (i=0, min = b[0], max = b[0]; i < b.length; i++) {

    if(b[i] < min)
        min = b[i];
    
    if (b[i] > max)
        max = b[i];
}
    
console.log(`Минимальное число в массив b - ${min}`);
console.log(`Максимальное число в массив b - ${max}`);
console.log(`-------------------`);
// -------------------------------------------------

console.log(`Задание №3`);

a = new Array(10);

for(i = 0, max = 20, min = 1; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (max - min - 1) + min);
}
console.log(`Массив a - ${a} `)

for(i = 0;i < a.length;i++) {
    for (j = i + 1;j < a.length;j++) {
      if (a[i] > a[j]) {
        min = a[i];
        a[i] = a[j];
        a[j] = min;
      }
    }
}

console.log(`Массив а от миимального значение до максимального - ${a}`);
// -------------------------------------------------

console.log(`-------------------`);
console.log(`Задание №4`);
a = [52,33,4,15,11,7,10,99,22];
console.log(`Изначальный массив ${a}`);

for(i = 0, min = 0, max = 0; i < a.length; i++) {
    if (a[i] < a[min]) {
        min = i;
    } 
    if (a[i] > a[max]) {
        max = i;
    }
}
console.log(`Минимальное значение в массиве а - ${min}`);
console.log(`Максимальное значение в массиве а - ${max}`);

b = a[max];
a[max] = a[min];
a[min] = b;

console.log(`Массив а после замены мак и мин ${a}`);