var users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
    ];

let users1 = [];

users.forEach(function(item){
    users1.push(`${item[0]}!`);
});

console.log(users1);

let users2 = users.map(function(item){
    return item[0] + '?';
});

console.log(users2);

let newUsers = users.filter(function(item){
    return item[1] == 'red';
});

let sum = 0;

let tr = newUsers.map(function(item){
    let td = item.map(function(a){
        return `<td>${a}</td>`;
    })
    sum += item[2]
	return `<tr>${td.join('')}</tr>`;
});

document.write(`<table border=1px>${tr.join('')}</table><tfoot>Final summ:${sum}</tfoot>`);