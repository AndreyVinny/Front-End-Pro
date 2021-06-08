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

tasks = monday
  .concat(tuesday)
  .map(function(item){
    item[1] /= 60;
      return item;
  })
  .filter(function(item){
      return item[1] > 2; 
  })
  .map(function(item){
    return document.write(`<table>
                                <tr>
                                  <td>Task name: ${item[0]}</td>
                                  <td>Task duration: ${item[1]} hours</td>
                                  <td>Task amount: $${item[1]*amount}</td>
                                </tr>
                         </table>`);
  });