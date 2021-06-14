let obj1 = { x: 10, i: 40, z: 50 };
let obj2 = { x: 20, y: 30 };
let newObj={};

function isObject(obj) {
    return obj === Object(obj) && Array.isArray(obj) === false;  
   }

function assignObjects(obj1, obj2){
    if(isObject(obj1) && isObject(obj2)){
     Object.assign(newObj,obj1,obj2);
     return newObj;
   }
}

let result = assignObjects(obj1, obj2);
console.log(result);