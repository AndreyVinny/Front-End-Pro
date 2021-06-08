let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',180],
  ['A whole lot of nothing',240]
];

let tasks = [monday,tuesday];

tasks = monday.concat(tuesday);

tasks.forEach(function(item){
    let time = item[1] / 60;
        if (time > 2){
    let cost = time * amount;
            document.write(`<table>
            <tr>
                <td>Task name: ${item[0]}</td>
                <td>Taks duration: ${time} hours</td>
                <td>Task amount: $${cost}</td>
            </tr>
            </table>`)
    }
}); 