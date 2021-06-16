let obj1 = { x: 190, z: 500  };
let obj2 = { x: 620, y: 730 };
let obj3 = { f: 1220, j: 5530 };
let obj4 = { m: 4654, p: 87 };

function isObject(obj) {
    return obj === Object(obj) && Array.isArray(obj) === false;  
}

function assignObjects(){
let newObj={};
    for(i=0; i < arguments.length; i++){
        if(isObject(arguments[i])){
            Object.assign(newObj,arguments[i]);
   }
}
    return newObj;
}

let result = assignObjects(obj1,obj2,obj3,obj4);
console.log(result);