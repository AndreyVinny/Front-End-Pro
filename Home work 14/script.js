let list = [1,2,3,4,5];

function copy(list, func){
    let a = [];
    for(let i = 0; i < list.length; i++)
        if (typeof func == 'function'){
            a[i] = func(list[i]);
        } else
            a[i] = list[i];
        
        return a;
}

let withFunc = copy(list, function(value){return value * 10;});
let withoutFunc = copy(list, 155);

console.log(withFunc);
console.log(withoutFunc);