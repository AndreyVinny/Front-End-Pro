let list = [1,2,3,4,5];
let newList = copy(list, function(value){return value * 10;});

function copy(list, func){
    let a = [];
    for(let i = 0; i < list.length; i++)
        a[i] = func(list[i]);
    return a;
}

console.log(list);
console.log(newList);