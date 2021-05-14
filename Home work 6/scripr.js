let n = 15;

document.write(`<p>Вариант 1</p>`);

for(i = 2, sum = 0; i <= n; i++) {
  isPrime = true;
  for (k=2; k < i; k++) {
    ostatok = i % k;
    if(ostatok === 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime)
    sum += i;
}
document.write(`<p>Сумма простых чисел от 0 до числа ${n} равна ${sum}.</p>`);

document.write(`<p>Вариант 2</p>`);

next:
for (let i = 2, sum = 0; i <= n; i++) {
  for (let k = 2; k < i; k++) {
    if (i % k == 0) continue next;
  }
  sum += i;
}
document.write(`<p>Сумма простых чисел от 0 до числа ${n} равна ${sum}.</p>`);
