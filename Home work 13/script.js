let a = [1,2,3, 'hello',4,5];
let b = [1,2,3, true, 4, undefined, 6];

function f1(a, b) {
    for(i = 0, sumA=0; i < a.length; i++){
        if (typeof a[i] == 'number')
            sumA += a[i];
    }
    for(i = 0, sumB=0; i < b.length; i++){
            if (typeof b[i] == 'number')
                sumB += b[i];
        }
    
    if (sumA > sumB) 
        return a;
    else
        return b;   
}

console.log(f1(a,b));