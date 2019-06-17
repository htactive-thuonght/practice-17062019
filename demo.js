// sync
// let data = 0;
// task1();
// setTimeout(task2, 50);
// setTimeout(task3, 100);
// // task4();
// setTimeout(task4, 10);
// task5();
// setTimeout(() => console.log("call me afer 500ms"), 2000);
// prediction => unprediction
// path
// network
// cpu bound, io bound => async
// console.log("task 2");
// console.log("task 3");
// console.log("task 4");
// console.log("task 5");

function task1() {
  data += 1;
  console.log(data);
}
function task2() {
  data *= 2;
  console.log(data);
}
function task3() {
  data *= 3;
  console.log(data);
}
function task4() {
  data += 4;
  console.log(data);
}
function task5() {
  data *= 5;
  console.log(data);
}

//
var fs = require("fs");


// console.log("task 1 100 ms");

fs.readFile("test.txt", "utf-8", (e, asyncData) => {
  let links = asyncData.split(", ");
  console.log("async", links);
});
// 200ms

let data = fs.readFileSync("test.txt", "utf-8");
// let links = data.split(", ");
console.log("sync", data);







var content = "Today, I'm sadvfasd";
fs.writeFileSync('test.txt',content,'utf8');
        console.log('Ghi file thanh cong!');















// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   var result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: 'resolved'
// }

// asyncCall();

